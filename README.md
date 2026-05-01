# ElectAssist 🗳️

An interactive AI-powered assistant that helps users understand the election process, timelines, and steps in a simple and easy-to-follow way.

## 🎯 Chosen Vertical
Civic Education Assistant — helping citizens of all ages understand how democratic elections work.

## 🧠 Approach and Logic
The solution is built around three core ideas:
- **Learn** — Understand the election process through an interactive visual timeline
- **Explore** — Navigate through each phase of an election step by step
- **Ask** — Get instant answers from an AI assistant powered by Google Gemini

The AI assistant is context-aware and always neutral — it never takes political sides and uses simple language accessible to all age groups.

## ⚙️ How the Solution Works

### Pages
- **Home (/)** — Introduction and navigation to key features
- **Timeline (/timeline)** — Animated, interactive vertical timeline showing 7 universal election phases:
  1. Election Announcement
  2. Voter Registration
  3. Candidate Nomination
  4. Campaign Period
  5. Voting Day
  6. Vote Counting
  7. Result & Government Formation
- **AI Chat (/chat)** — Streaming chat interface powered by Google Gemini 2.0 Flash with pre-built starter questions

### Tech Stack
- **Frontend:** Next.js 14 (App Router), TypeScript, Tailwind CSS, Framer Motion
- **AI:** Google Gemini 2.0 Flash via Vercel AI SDK
- **Deployment:** Google Cloud Run

## 📌 Assumptions Made
- Election process is kept universal and generic — not specific to any one country
- Target audience is all age groups, so language is kept simple and friendly
- AI assistant is neutral and factual at all times

## 🔗 Live Demo
[https://electassist-17689171884.us-central1.run.app](https://electassist-17689171884.us-central1.run.app)

## 🚀 Local Setup

### Prerequisites
- Node.js 18+
- Google Gemini API Key from [aistudio.google.com](https://aistudio.google.com)

### Steps
```bash
git clone https://github.com/githubber121/electassist.git
cd electassist
npm install
```

Create `.env.local`:
```
GOOGLE_GENERATIVE_AI_API_KEY=your_gemini_api_key
```

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## 🌐 Google Services Used
- **Google Gemini 2.0 Flash** — AI chat assistant
- **Google Cloud Run** — Serverless deployment
- **Google AI Studio** — API key management
