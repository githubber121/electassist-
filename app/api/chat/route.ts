import { streamText } from "ai";
import { google } from "@ai-sdk/google";

export async function POST(req: Request) {
  const { messages } = await req.json();

  console.log("KEY:", process.env.GOOGLE_GENERATIVE_AI_API_KEY);

  const result = await streamText({
    model: google("gemini-2.0-flash"),
    system: "You are ElectAssist, a friendly and neutral assistant that explains the election process, timelines, and voting steps clearly. Use simple language. Be factual and never take political sides.",
    messages,
  });
  return result.toDataStreamResponse();
}