This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

**Live deployment:** https://wdd430-portfolio-ebon.vercel.app/

## W01 Assignment: My First Next.js Application

**Custom Component:** `ContactCard` ([components/ContactCard.tsx](components/ContactCard.tsx)) — a Server Component that displays contact details (email as a `mailto:` link, plus an optional location). It accepts a typed `email: string` prop and an optional `location?: string` prop, is styled with Tailwind CSS, and is rendered on the [About page](app/about/page.tsx).

### Reflection Questions

1. **What is the purpose of `layout.tsx`?**
   `layout.tsx` defines the shared UI shell (like the header and footer) that wraps every page in a route segment, so common structure doesn't need to be repeated on each page.

2. **Why are Server Components used by default in the App Router?**
   Server Components render on the server, which keeps JavaScript out of the client bundle, allows direct data fetching, and improves performance — Next.js only opts into Client Components when interactivity requires it.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
