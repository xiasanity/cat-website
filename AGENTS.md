# Cat Journal Project Instructions

- This is a weekly cat journal for Miso and Dashi, built with Next.js App Router, TypeScript, and Tailwind CSS.
- The homepage introduces Miso and Dashi and should feature the latest weekly entry prominently.
- Each weekly entry should include a week date, short title, one Miso photo and caption, one Dashi photo and caption, and optional weekly summary.
- Each week may also choose one Instagram-featured cat/photo/caption; Instagram is the highlight reel, while the website is the permanent archive for both cats.
- Store weekly post data in a simple TypeScript data file when adding journal entries.
- Recommended routes: `app/page.tsx` for the homepage, `app/archive/page.tsx` for all entries, and `app/weeks/[slug]/page.tsx` for individual weekly entries.
- Global styles are in `app/globals.css`; app metadata/layout is in `app/layout.tsx`; static assets go in `public/`.
- Use Next.js `Image` for photos.
- Use `npm run dev` to run locally and `npm run build` to verify production builds.
- Keep the design cute, polished, mobile-friendly, and simple.
- Avoid adding new dependencies unless necessary.
- Prefer readable code and simple data shapes over clever abstractions.
- After making code changes, explain what changed and why.
