# Doc X Platform

**MVP/PoC Version** - Transform structured content into intelligent, adaptive web experiences.

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Deployment to Vercel

This project is ready for Vercel deployment:

1. Push to GitHub/GitLab
2. Import project in Vercel dashboard
3. Add environment variables
4. Deploy!

Vercel automatically detects Next.js and configures everything.

## Environment Variables

Create `.env.local`:

```bash
# Supabase
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
SUPABASE_SERVICE_ROLE_KEY=

# OpenAI
OPENAI_API_KEY=

# Redis (Week 4)
UPSTASH_REDIS_URL=
UPSTASH_REDIS_TOKEN=

# Inngest (Week 3)
INNGEST_EVENT_KEY=
INNGEST_SIGNING_KEY=

# Sentry (Error Tracking)
NEXT_PUBLIC_SENTRY_DSN=
SENTRY_AUTH_TOKEN=
```

## Project Structure

```
doc-x/
├── app/              # Next.js App Router
├── components/        # React components
├── lib/              # Utilities and helpers
├── public/           # Static assets
└── types/            # TypeScript types
```

## Development

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

