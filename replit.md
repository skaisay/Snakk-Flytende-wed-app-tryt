# PaeeeApi - PWA Chat Application

## Overview

PaeeeApi is a Progressive Web Application (PWA) that provides an AI-powered chat interface with online OpenAI API integration. The application is built as a full-stack TypeScript solution using React for the frontend and Express.js for the backend, with PostgreSQL as the database. The app focuses on online functionality with OpenAI's GPT-4o model, with PWA features for improved user experience.

## System Architecture

### Frontend Architecture
- **Framework**: React with TypeScript
- **Build Tool**: Vite for fast development and optimized builds
- **UI Framework**: Tailwind CSS with shadcn/ui components
- **State Management**: React hooks with custom conversation management
- **Routing**: Wouter for lightweight client-side routing
- **Data Fetching**: TanStack Query for server state management

### Backend Architecture
- **Runtime**: Node.js with Express.js
- **Language**: TypeScript with ESM modules
- **Database**: PostgreSQL with Drizzle ORM
- **Session Management**: Express sessions with PostgreSQL store
- **Development**: Hot reload with Vite middleware integration

### PWA Features
- **Service Worker**: Custom caching strategy for offline functionality
- **Manifest**: Web app manifest for installation
- **Offline AI**: TensorFlow.js integration for local AI processing
- **Cache Management**: 50MB storage limit optimization for Safari compatibility

## Key Components

### Chat System
- **ChatInterface**: Main chat component with message display and input
- **MessageBubble**: Individual message rendering with copy functionality
- **InputArea**: Message input with send functionality and file attachment support
- **StatusIndicator**: Online/offline status display

### AI Integration
- **Online Mode**: OpenAI API integration using GPT-4o model
- **Backend Proxy**: Express.js server handles OpenAI API calls to avoid CORS issues
- **Connection Monitoring**: Real-time online/offline status detection
- **Response Caching**: Local storage for conversation history

### PWA Infrastructure
- **Service Worker**: Manages caching and offline functionality
- **Install Prompt**: Native app installation prompts
- **Responsive Design**: Mobile-first approach with adaptive layouts

## Data Flow

1. **User Input**: Messages entered through InputArea component
2. **Connection Check**: useOnlineStatus hook determines network availability
3. **AI Processing**: 
   - Online: API calls to backend proxy endpoint (/api/openai/chat)
   - Offline: Error message displayed, no local processing
4. **Response Handling**: AI responses formatted and displayed
5. **Storage**: Conversations cached locally for persistence
6. **Real-time Updates**: UI updates reflect connection status changes

## External Dependencies

### Core Dependencies
- **React Ecosystem**: React 18+ with hooks and context
- **UI Components**: Radix UI primitives with shadcn/ui styling
- **AI Integration**: OpenAI API through backend proxy
- **Database**: Drizzle ORM with PostgreSQL adapter
- **HTTP Client**: Fetch API with backend routing

### Development Dependencies
- **Build Tools**: Vite with TypeScript support
- **Code Quality**: ESLint and TypeScript compiler
- **Styling**: Tailwind CSS with PostCSS
- **Database Tools**: Drizzle Kit for migrations

### Third-party Services
- **OpenAI API**: GPT-4o model for AI responses
- **Neon Database**: PostgreSQL hosting (configured but not actively used)
- **GitHub**: Repository hosting and API key storage through secrets

## Deployment Strategy

### Development Environment
- **Local Development**: Vite dev server with hot module replacement
- **Database**: Local PostgreSQL or Neon cloud database
- **API Integration**: Direct OpenAI API calls with CORS proxy

### Production Deployment
- **Static Hosting**: Optimized for GitHub Pages deployment
- **Build Process**: Vite production build with asset optimization
- **Service Worker**: Precaching of critical resources
- **PWA Features**: Full offline functionality with cached AI models

### Environment Configuration
- **API Keys**: Replit Secrets for OpenAI API token (OPENAI_API_KEY)
- **Database**: Environment-based connection strings
- **Backend Proxy**: Express.js server handles API calls to avoid CORS issues

## Changelog

```
Changelog:
- July 03, 2025: Initial setup
- July 03, 2025: Implemented dark theme UI matching user's iPhone interface
- July 03, 2025: Added offline functionality with fallback responses
- July 03, 2025: Configured GitHub Pages deployment with CORS proxy
- July 03, 2025: Added Russian language support and purple character design
- July 03, 2025: Fixed React hooks errors by converting to pure HTML/CSS/JavaScript
- July 03, 2025: Integrated working OpenAI GPT-4o API through backend proxy
- July 03, 2025: Applied glassmorphism effects to UI elements
- July 03, 2025: Refined input area design with Telegram-style send button
- July 03, 2025: Fixed animation persistence - character remains visible after messages
- July 03, 2025: Removed input container background, made minimalistic field
- July 03, 2025: Hidden scrollbars while maintaining swipe functionality
- July 03, 2025: Created standalone GitHub Pages version with direct OpenAI API calls
- July 03, 2025: Added API key management system with local storage
- July 03, 2025: Implemented PWA features with manifest and service worker support
```

## User Preferences

```
Preferred communication style: Simple, everyday language.
```