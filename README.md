# EmotionalReset Platform

![EmotionalReset Banner](https://img.shields.io/badge/EmotionalReset-Platform-blueviolet)
![Next.js](https://img.shields.io/badge/Next.js-15-black)
![React](https://img.shields.io/badge/React-19-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue)
![License](https://img.shields.io/badge/License-MIT-green)

## 🌟 Overview

**EmotionalReset** is a comprehensive emotional wellness platform designed to help users understand, process, and grow through their emotions using science-backed tools and compassionate AI guidance. The platform provides a suite of interactive tools for emotional intelligence development, relationship building, confidence growth, and mental wellbeing.

## ✨ Features

### 🧠 Core Capabilities
- **AI-Powered Emotional Companion** - 24/7 chat support with empathetic AI
- **Daily Emotional Toolkit** - Science-backed exercises and reflections
- **Emotion Tracking** - Monitor and understand emotional patterns
- **Relationship Tools** - Improve communication and empathy skills
- **Confidence Building** - Exercises for self-esteem and assertiveness
- **Voice Therapy Tools** - Express and process emotions verbally

### 🎨 Modern UI/UX
- **Professional Design** - Clean, modern interface with gradient aesthetics
- **Fully Responsive** - Optimized for mobile, tablet, and desktop
- **Interactive Elements** - Engaging animations and transitions
- **Accessibility First** - WCAG compliant design
- **Dark Mode Support** - Eye-friendly themes

### 🔧 Technical Features
- **Real-time Updates** - Live quote generation and content rotation
- **User Progress Tracking** - Personalized journey tracking
- **Secure Authentication** - Protected user data and sessions
- **Performance Optimized** - Fast loading and smooth interactions
- **SEO Optimized** - Built for discoverability

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn
- Git

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/rono1579/health-reset.git
cd health-reset
```

2. **Install dependencies**
```bash
npm install
# or
yarn install
```

3. **Set up environment variables**
```bash
cp .env.example .env.local
```
Edit `.env.local` with your configuration:
```env
NEXT_PUBLIC_APP_URL=http://localhost:3000
NEXT_PUBLIC_API_URL=http://localhost:3000/api
# Add other required variables
```

4. **Run development server**
```bash
npm run dev
# or
yarn dev
```

5. **Open in browser**
```
http://localhost:3000
```

## 🛠️ Tech Stack

### Frontend
- **Next.js 15** - React framework with App Router
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **Shadcn/ui** - Reusable UI components
- **Lucide React** - Icon library
- **Framer Motion** - Animations

### Backend (if applicable)
-**Django**
- **PostgreSQL** - Primary database

### Development Tools
- **ESLint** - Code linting
- **Prettier** - Code formatting
- **Husky** - Git hooks
- **Jest** - Testing framework
- **Cypress** - E2E testing

## 🧪 Testing

Run the test suite:
```bash
# Unit tests
npm run test

# E2E tests
npm run test:e2e

# Test coverage
npm run test:coverage
```

## 📦 Deployment

### Vercel (Recommended)
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Build for Production
```bash
npm run build
npm start
```

### Customizing Theme
Edit `tailwind.config.js` to modify colors, fonts, and design tokens:

```javascript
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#4F46E5',
          light: '#6366F1',
        },
        // Add custom colors
      }
    }
  }
}
```

### Adding New Features
1. Create page in `app/(pages)/`
2. Add route in navigation component
3. Update features array in `quotes.js` if needed
4. Add corresponding backend API routes

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Code Style Guidelines
- Follow TypeScript best practices
- Use meaningful variable names
- Write comprehensive comments
- Add tests for new features
- Update documentation as needed

## 📊 Analytics & Monitoring

The platform includes:
- User engagement tracking
- Performance monitoring
- Error logging (Sentry)
- Usage analytics

## 🔒 Security

- Data encryption at rest and in transit
- Regular security audits
- GDPR compliant
- Privacy-focused design

---

<div align="center">

### 💙 Built for Emotional Wellness

*"Your space to reconnect with your mind, your feelings, and the people around you"*

[Get Started](#) • [View Demo](#) • [Contribute](#)

</div>