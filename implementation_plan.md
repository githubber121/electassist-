# ElectAssist Implementation Plan

## Goal Description
Build a Next.js 14 application named "ElectAssist" to help users understand the election process and timelines. The application will include a Home page, an animated Election Timeline page, and an AI Chat page powered by the Vercel AI SDK and Google's Gemini model. The design will be premium, responsive, and include modern aesthetics like glassmorphism, subtle gradients, and micro-animations to create a dynamic user experience.

## Open Questions
- Do you have a specific color palette preference (e.g., patriotic colors like red, white, and blue, or a sleek, neutral dark mode)? The current plan uses a modern deep navy and electric blue theme.

## Proposed Changes

### Configuration and Infrastructure
- `package.json`: Core dependencies including Next.js 14, React, Tailwind CSS, Framer Motion, Vercel AI SDK, and Lucide Icons.
- `next.config.ts`: Configured for standalone output for Docker deployment.
- `Dockerfile`: Multi-stage Docker build for optimized production deployment.
- `.dockerignore`: Ignoring node_modules and other unnecessary files.
- `tsconfig.json` & Tailwind/PostCSS configs: Standard Next.js TypeScript and styling setup.

### Data & Library
#### [NEW] `lib/electionData.ts`
Contains the 7 key phases of the universal election timeline with titles, short descriptions, and typical durations.

### Components
#### [NEW] `components/Navbar.tsx`
A sleek, glassmorphic navigation bar with links to the Home, Timeline, and Chat pages.
#### [NEW] `components/TimelineCard.tsx`
An expandable Framer Motion component for displaying each timeline phase interactively.
#### [NEW] `components/ChatBubble.tsx`
A chat message component to differentiate user inputs and the AI assistant's responses.

### Pages & Routes
#### [NEW] `app/layout.tsx` & `app/globals.css`
Root layout with Google Fonts (Inter) and global CSS definitions for rich gradients and custom scrollbars.
#### [NEW] `app/page.tsx`
The Home page featuring a hero section with a brief intro and primary call-to-action buttons.
#### [NEW] `app/timeline/page.tsx`
A vertical animated timeline utilizing `framer-motion` for smooth reveal and expansion effects.
#### [NEW] `app/api/chat/route.ts`
The Vercel AI SDK edge API route using `streamText` and `gemini-1.5-flash`.
#### [NEW] `app/chat/page.tsx`
The chat interface with a simple UI, streaming responses, and predefined starter question chips.

## Verification Plan
### Automated & Build Verification
- Run `npm install` and `npm run build` to ensure the project compiles with no TypeScript or linting errors.
- Verify that the Dockerfile builds successfully using `docker build`.

### Manual Verification
- Navigate through all routes (`/`, `/timeline`, `/chat`) locally.
- Test the Chat interface by asking the AI a predefined question and observing the streaming response.
- Verify the framer-motion animations on the timeline and ensure responsive design across devices.
