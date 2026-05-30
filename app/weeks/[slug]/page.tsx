import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  getWeeklyEntry,
  type CatKey,
  weeklyEntries,
} from "@/lib/weeklyEntries";

type WeekPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

const catLabels: Record<CatKey, string> = {
  miso: "Miso",
  dashi: "Dashi",
};

export function generateStaticParams() {
  return weeklyEntries.map((entry) => ({
    slug: entry.slug,
  }));
}

export default async function WeekPage({ params }: WeekPageProps) {
  const { slug } = await params;
  const entry = getWeeklyEntry(slug);

  if (!entry) {
    notFound();
  }

  const featuredName = entry.instagramFeatured
    ? catLabels[entry.instagramFeatured]
    : null;

  return (
    <main className="min-h-screen bg-[#fff8ef] text-[#33251f]">
      <section className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-6 py-10 sm:px-8 lg:px-12">
        <div className="space-y-4 py-8">
          <div className="flex flex-wrap gap-4">
            <Link
              className="inline-flex font-bold text-[#2f4f4c] underline decoration-[#9fcfc5] decoration-2 underline-offset-4"
              href="/"
            >
              Back home
            </Link>
            <Link
              className="inline-flex font-bold text-[#2f4f4c] underline decoration-[#9fcfc5] decoration-2 underline-offset-4"
              href="/archive"
            >
              Archive
            </Link>
          </div>

          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#a85b44]">
              Week of {entry.weekOf}
            </p>
            <h1 className="mt-2 text-4xl font-black leading-tight text-[#2d211b] sm:text-5xl">
              {entry.title}
            </h1>
            {entry.summary ? (
              <p className="mt-4 max-w-3xl text-lg leading-8 text-[#76594c]">
                {entry.summary}
              </p>
            ) : null}
          </div>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {(["miso", "dashi"] as const).map((catKey) => {
            const catEntry = entry.cats[catKey];

            return (
              <article
                className="overflow-hidden rounded-3xl border border-[#ead8c2] bg-white shadow-lg shadow-[#d6b18d]/15"
                key={catKey}
              >
                <div className="relative aspect-[4/3] bg-[#f7dfc6]">
                  <Image
                    src={catEntry.photo}
                    alt={catEntry.alt}
                    fill
                    sizes="(min-width: 768px) 45vw, 90vw"
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#a85b44]">
                    {catLabels[catKey]}
                  </p>
                  <p className="mt-3 text-lg leading-8 text-[#76594c]">
                    &quot;{catEntry.caption}&quot;
                  </p>
                </div>
              </article>
            );
          })}
        </div>

        {featuredName ? (
          <aside className="rounded-3xl bg-[#2f4f4c] p-6 text-white sm:p-8">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#bfe8df]">
              Instagram highlight
            </p>
            <h2 className="mt-2 text-2xl font-extrabold">
              {featuredName} got the weekly spotlight.
            </h2>
            <p className="mt-3 max-w-2xl text-base leading-7 text-white/80">
              Instagram gets one highlight-reel moment. The journal keeps both
              sides of the story.
            </p>
          </aside>
        ) : null}
      </section>
    </main>
  );
}
