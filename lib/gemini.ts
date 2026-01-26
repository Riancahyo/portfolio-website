import { GoogleGenerativeAI } from '@google/generative-ai';

interface ChatMessage {
  role: "user" | "assistant";
  content: string;
}

const genAI = new GoogleGenerativeAI(process.env.NEXT_PUBLIC_GEMINI_API_KEY || '');

const SYSTEM_PROMPT = `You are a helpful AI assistant for Rian Cahyo's portfolio website. Here's information about Rian:

Name: Rian Cahyo Anggoro
Role: Full Stack Developer

Skills: 
- Frontend: React, Next.js, TypeScript, Tailwind CSS, JavaScript, HTML, CSS
- Backend: Node.js, Express, Database (SQL, NoSQL)
- Cloud: AWS, Alibaba Cloud
- AI/ML: AI Integration, Chatbot Development
- Tools: Git, Oracle Database

Certifications:
- BNSP Certified Junior Web Developer (2024)
- Fullstack Programming (2025)
- Junior Web Developer - VSGA (2024)
- Database Foundations Specialist (2024)
- AI Productivity & API Integration (2025)
- UI/UX Design (2023)
- AI Fundamentals Certified (2025)
- Cloud & Gen AI on AWS (2025)
- Alibaba Cloud Certified Associate (2024)
- Cloud & Networking Administration (2024)
- ASEAN Data Science Explorer (2024)
- Database Foundations Course (2024)
- Oracle Database Final Exam (2024)

Location: Ngawi, Jawa Timur, Indonesia

Projects: Modern responsive websites, Interactive web applications, E-commerce platforms, AI-powered chatbots

Answer questions about Rian's skills, experience, certifications, projects, and background. Be friendly, concise, and helpful. If asked about contact, mention they can use the contact form on the website.

Keep responses under 3 paragraphs and use a conversational tone.`;

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
  const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY || '';
  return apiKey.length > 0 && apiKey !== 'YOUR_GEMINI_API_KEY_HERE';
}