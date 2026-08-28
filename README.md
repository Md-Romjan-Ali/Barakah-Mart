# Barakah Mart

This is a Next.js storefront application.

## Dashboard and hydration fixes

Two separate problems caused the reported errors:

- The mobile menu used a HeroUI `Button` inside `DropdownTrigger`. `DropdownTrigger` already renders a native `<button>`, so this produced invalid `<button>`-inside-`<button>` HTML and caused the hydration error. The trigger now contains a non-button `span` instead.
- The dashboard route folder is named `deshboard`, but its links used the misspelled path `deshbaord`. Those links now point to `/deshboard/add-product` and `/deshboard/sell-product`, which removes the 404 for the sell-product page.
- The navbar is fixed, so dashboard content without top spacing could appear hidden underneath it. The shared dashboard layout now adds spacing, a responsive sidebar, and a visible dark dashboard surface.
- The dashboard landing component had been renamed but its default export still used the old name. That caused the production build to fail while collecting `/deshboard`; the export now matches the component name.

The dashboard layout is a nested layout for the `/deshboard` route group. It displays the dashboard navigation beside the page content, and its child pages are available at `/deshboard`, `/deshboard/add-product`, and `/deshboard/sell-product`.

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

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
