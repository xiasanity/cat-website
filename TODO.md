# Cat Journal TODO

## Weekly Data
- Create a simple TypeScript data file for weekly entries.
- Define fields for slug, week date, title, Miso photo/caption, Dashi photo/caption, optional summary, and optional Instagram feature.

## Homepage
- Update the homepage to introduce Miso and Dashi as a weekly journal.
- Feature the latest weekly entry prominently.
- Keep a small, simple path to the archive.

## Weekly Entry Pages
- Add `app/weeks/[slug]/page.tsx`.
- Show the week title, date, both cats' photos/captions, summary, and Instagram feature when present.

## Archive
- Add `app/archive/page.tsx`.
- List all weekly entries in reverse chronological order.
- Make each entry link to its individual week page.

## Photos
- Store photos in `public/`.
- Use Next.js `Image` for all journal photos.
- Keep hero/profile/gallery images from duplicating weekly content unnecessarily.

## Instagram Highlight
- Pick one featured photo/caption per week for Instagram.
- Make it clear that Instagram is the highlight reel and the site is the full archive.

## Mobile Responsiveness
- Test homepage, archive, and weekly pages on small screens.
- Keep photo layouts readable and captions comfortable on mobile.

## SEO And Metadata
- Update page titles and descriptions for the journal direction.
- Add social preview metadata after choosing a stable featured image.

## Deployment
- Run `npm run build` before deploying.
- Deploy to Vercel after homepage, archive, and at least one weekly entry are ready.

## Nice-To-Have Ideas
- Add tags like chaos, cozy, cardboard, and zoomies.
- Add a yearly recap page.
- Add a random week or favorite memory button.
