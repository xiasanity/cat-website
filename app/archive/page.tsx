import Image from "next/image";
import Link from "next/link";
import { weeklyEntries } from "@/lib/weeklyEntries";

export default function ArchivePage() {
  return (
    <main className="min-h-screen bg-[#fff8ef] text-[#33251f]">
      <section className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-6 py-10 sm:px-8 lg:px-12">
        <div className="space-y-4 py-8">
          <Link
            className="inline-flex font-bold text-[#2f4f4c] underline decoration-[#9fcfc5] decoration-2 underline-offset-4"
            href="/"
          >
            Back home
          </Link>
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#a85b44]">
              Archive
            </p>
            <h1 className="mt-2 text-4xl font-black leading-tight text-[#2d211b] sm:text-5xl">
              Weekly Cat Journal
            </h1>
            <p className="mt-4 max-w-2xl text-lg leading-8 text-[#76594c]">
              Every official week of Miso and Dashi, preserved for serious
              research and future snack-related inquiries.
            </p>
          </div>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {weeklyEntries.map((entry) => (
            <Link
              className="group overflow-hidden rounded-3xl border border-[#ead8c2] bg-white shadow-lg shadow-[#d6b18d]/15 transition hover:-translate-y-1 hover:border-[#d9b79a]"
              href={`/weeks/${entry.slug}`}
              key={entry.slug}
            >
              <div className="grid grid-cols-2">
                <div className="relative aspect-[4/3] bg-[#f7dfc6]">
                  <Image
                    src={entry.cats.miso.photo}
                    alt={entry.cats.miso.alt}
                    fill
                    sizes="(min-width: 768px) 25vw, 50vw"
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="relative aspect-[4/3] bg-[#f7dfc6]">
                  <Image
                    src={entry.cats.dashi.photo}
                    alt={entry.cats.dashi.alt}
                    fill
                    sizes="(min-width: 768px) 25vw, 50vw"
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
              </div>
              <div className="p-6">
                <p className="text-sm font-bold text-[#a85b44]">
                  Week of {entry.weekOf}
                </p>
                <h2 className="mt-2 text-2xl font-extrabold text-[#2d211b]">
                  {entry.title}
                </h2>
                {entry.summary ? (
                  <p className="mt-3 text-base leading-7 text-[#76594c]">
                    {entry.summary}
                  </p>
                ) : null}
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
