import { GoogleGenerativeAI } from '@google/generative-ai';
import {
  PROJECTS,
  ACHIEVEMENTS_DATA,
  TIMELINE_DATA,
  SKILL_DATA,
  BACKEND_SKILL,
  FULLSTACK_SKILL,
  OTHER_SKILL,
} from '@/constants';
import { translations, TIMELINE_TRANSLATIONS } from '@/lib/translations';

interface ChatMessage {
  role: "user" | "assistant";
  content: string;
}

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || '');

function buildSystemPrompt(): string {
  const allSkills = [...SKILL_DATA, ...BACKEND_SKILL, ...FULLSTACK_SKILL, ...OTHER_SKILL]
    .map((s) => s.skill_name)
    .join(", ");

  const projectsList = PROJECTS.map((p) => `- ${p.title}: ${p.description}`).join("\n");

  const achievementsList = ACHIEVEMENTS_DATA.map(
    (a) => `- ${a.title} (${a.year}): ${a.description}`
  ).join("\n");

  const timelineList = TIMELINE_DATA.map((entry) => {
    const description = TIMELINE_TRANSLATIONS[entry.id]?.en ?? "";
    const period = `${entry.startDate} - ${entry.endDate ?? "Present"}`;
    return `- ${entry.title} at ${entry.org} (${period}): ${description}`;
  }).join("\n");

  const bio = `${translations.en.about.paragraph1} ${translations.en.about.paragraph2}`;
  const location = translations.en.contact.locationValue;

  return `You are a helpful AI assistant embedded in Rian Cahyo Anggoro's portfolio website. Here's up-to-date information about Rian:

Name: Rian Cahyo Anggoro
Role: Full Stack Developer
Location: ${location}

Bio: ${bio}

Skills: ${allSkills}

Experience & Organizations (most recent first):
${timelineList}

Projects:
${projectsList}

Certifications & Achievements:
${achievementsList}

The website itself also has a dark/light mode toggle, an Indonesian/English language toggle, and a contact form.

Answer questions about Rian's skills, experience, certifications, projects, and background using only the information above. If asked about something not covered here, say you don't have that detail and suggest using the contact form. If asked about contact, mention they can use the contact form on the website. Be friendly, concise, and helpful.

Keep responses under 3 paragraphs and use a conversational tone. Respond in the same language the user writes in (Indonesian or English).`;
}

const SYSTEM_PROMPT = buildSystemPrompt();

async function retryWithBackoff<T>(
  fn: () => Promise<T>,
  maxRetries = 3,
  initialDelay = 1000
): Promise<T> {
  let lastError: any;
  
  for (let i = 0; i < maxRetries; i++) {
    try {
      return await fn();
    } catch (error: any) {
      lastError = error;
      console.error(`Attempt ${i + 1} failed:`, error);
      
      if (error?.status && error.status !== 503 && error.status !== 429) {
        throw error;
      }
      
      if (i < maxRetries - 1) {
        const delay = initialDelay * Math.pow(2, i);
        console.log(`Retrying in ${delay}ms...`);
        await new Promise(resolve => setTimeout(resolve, delay));
      }
    }
  }
  
  throw lastError;
}

export async function sendMessageToGemini(
  messages: ChatMessage[]
): Promise<string> {
  try {
    const chatHistory = messages
      .map((msg) => `${msg.role === 'user' ? 'User' : 'Assistant'}: ${msg.content}`)
      .join('\n');

    const fullPrompt = `${SYSTEM_PROMPT}

Conversation history:
${chatHistory}

Please respond naturally and helpfully.`;

    console.log('Sending request to Gemini...');

    const response = await retryWithBackoff(async () => {
      const model = genAI.getGenerativeModel({ 
        model: 'gemini-2.5-flash-lite',
        generationConfig: {
          temperature: 0.7,
          maxOutputTokens: 500,
        }
      });
      
      const result = await model.generateContent(fullPrompt);
      return result.response;
    });

    const text = response.text();
    console.log('Response received:', text.substring(0, 50) + '...');
    
    return text || 'Sorry, I could not generate a response.';
  } catch (error: any) {
    console.error("Gemini API Error:", error);
    
    if (error?.status === 429) {
      throw new Error('Rate limit exceeded. Please try again in a moment.');
    }
    
    if (error?.status === 403) {
      throw new Error('API key is invalid or not authorized. Please check your configuration.');
    }
    
    throw new Error(`Failed to get response: ${error?.message || 'Unknown error'}`);
  }
}

export function isGeminiConfigured(): boolean {
  const apiKey = process.env.GEMINI_API_KEY || '';
  return apiKey.length > 0 && apiKey !== 'YOUR_GEMINI_API_KEY_HERE';
}