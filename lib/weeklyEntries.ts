export type CatKey = "miso" | "dashi";

type CatEntry = {
  photo: string;
  alt: string;
  caption: string;
};

export type WeeklyEntry = {
  slug: string;
  weekOf: string;
  title: string;
  summary?: string;
  cats: Record<CatKey, CatEntry>;
  instagramFeatured?: CatKey;
};

export const weeklyEntries: WeeklyEntry[] = [
  {
    slug: "2026-05-31",
    weekOf: "May 31, 2026",
    title: "The First Official Cat Week",
    summary: "It is a week wrapped in black and white stripes",
    cats: {
      miso: {
        photo: "/photos/weeks/2026-05-31/miso.jpeg",
        alt: "Miso tucked into a warm blanket.",
        caption: "Hooman it nice and cozy what you lookin at punk",
      },
      dashi: {
        photo: "/photos/weeks/2026-05-31/dashi.jpeg",
        alt: "Dashi tangled up with a pair of slides.",
        caption: "Sometime life be steppin on me bish",
      },
    },
    instagramFeatured: "dashi",
  },
];

export const latestWeeklyEntry = weeklyEntries[0];

export function getWeeklyEntry(slug: string) {
  return weeklyEntries.find((entry) => entry.slug === slug);
}
