"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { latestWeeklyEntry } from "@/lib/weeklyEntries";

const cats = [
  {
    name: "Miso",
    description: "Sweet, curious, cardboard enthusiast",
    accent: "bg-rose-100 text-rose-700",
    image: "/photos/profiles/miso.jpeg",
    imageAlt: "Miso lounging sweetly on a cushion.",
    imageClassName: "object-cover [image-orientation:none]",
  },
  {
    name: "Dashi",
    description: "Mischievous, dramatic, zoomies athlete",
    accent: "bg-teal-100 text-teal-700",
    image: "/photos/profiles/dashi.jpeg",
    imageAlt: "Dashi draped dramatically across a lap.",
    imageClassName: "object-cover object-[50%_38%]",
  },
];

const galleryItems = [
  {
    src: "/photos/weeks/2026-05-31/dashi.jpeg",
    alt: "Dashi tangled up with a pair of slides.",
    title: "Slide wrestling",
    cats: ["Dashi"],
  },
  {
    src: "/photos/gallery/dashi-mischeivous.jpeg",
    alt: "Dashi peeking out from a paper bag.",
    title: "Paper bag ambush",
    cats: ["Dashi"],
  },
  {
    src: "/photos/gallery/dashi-play.jpeg",
    alt: "Dashi sitting inside a clear cat backpack.",
    title: "Carrier inspection",
    cats: ["Dashi"],
  },
  {
    src: "/photos/gallery/miso-box.jpeg",
    alt: "Miso peeking out from a small storage bin.",
    title: "Secret headquarters",
    cats: ["Miso"],
  },
  {
    src: "/photos/gallery/miso-sleepy.jpeg",
    alt: "Miso stretched out on a cozy blanket.",
    title: "Maximum stretch",
    cats: ["Miso"],
  },
  {
    src: "/photos/weeks/2026-05-31/miso.jpeg",
    alt: "Miso tucked into a warm blanket.",
    title: "Blanket mode",
    cats: ["Miso"],
  },
  {
    src: "/photos/gallery/sibling-hug.jpeg",
    alt: "Miso and Dashi cuddled together in a cat carrier.",
    title: "Double occupancy",
    cats: ["Miso", "Dashi"],
  },
  {
    src: "/photos/gallery/sibling-love.jpeg",
    alt: "Miso and Dashi cuddling together in a cardboard box.",
    title: "Box of love",
    cats: ["Miso", "Dashi"],
  },
];

export default function Home() {
  const [activeCat, setActiveCat] = useState<string | null>(null);
  const [selectedGalleryItem, setSelectedGalleryItem] = useState<
    (typeof galleryItems)[number] | null
  >(null);

  const visibleGalleryItems = activeCat
    ? galleryItems.filter((item) => item.cats.includes(activeCat))
    : galleryItems;

  return (
    <main className="min-h-screen bg-[#fff8ef] text-[#33251f]">
      <section className="mx-auto flex w-full max-w-6xl flex-col gap-16 px-6 py-10 sm:px-8 lg:px-12">
        <div className="grid items-center gap-10 py-10 md:grid-cols-[1.1fr_0.9fr] md:py-16">
          <div className="space-y-6 text-center md:text-left">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#a85b44]">
              Tiny household management team
            </p>
            <div className="space-y-4">
              <h1 className="text-5xl font-black leading-none text-[#2d211b] sm:text-6xl lg:text-7xl">
                Miso & Dashi
              </h1>
              <p className="mx-auto max-w-2xl text-xl leading-8 text-[#76594c] md:mx-0">
                Two tiny chaos kiddos living their best life.
              </p>
            </div>
          </div>

          <div className="relative mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden rounded-[2rem] border border-[#ead8c2] bg-[#f7dfc6] shadow-2xl shadow-[#d7a47b]/25 sm:max-w-md">
            <Image
              src="/photos/hero/main.jpeg"
              alt="Miso and Dashi leaping toward a houseplant together."
              fill
              priority
              sizes="(min-width: 768px) 40vw, 90vw"
              className="object-cover"
            />
            <div className="absolute inset-x-4 bottom-4 rounded-2xl bg-white/85 px-4 py-3 text-sm font-bold text-[#6f4b3e] shadow-sm backdrop-blur">
              Daily chaos, professionally supervised
            </div>
          </div>
        </div>

        <section className="grid gap-5 md:grid-cols-2">
          {cats.map((cat) => (
            <button
              aria-pressed={activeCat === cat.name}
              className={`overflow-hidden rounded-3xl border bg-white text-left shadow-lg shadow-[#d6b18d]/15 transition ${
                activeCat === cat.name
                  ? "border-[#a85b44] ring-4 ring-[#e8b29c]/40"
                  : "border-[#ead8c2] hover:-translate-y-1 hover:border-[#d9b79a]"
              }`}
              key={cat.name}
              onClick={() =>
                setActiveCat(activeCat === cat.name ? null : cat.name)
              }
              type="button"
            >
              <div className="relative aspect-[4/3] bg-[#f7dfc6]">
                <Image
                  src={cat.image}
                  alt={cat.imageAlt}
                  fill
                  unoptimized
                  sizes="(min-width: 768px) 45vw, 90vw"
                  className={cat.imageClassName}
                />
              </div>
              <div className="p-6">
                <div
                  className={`mb-6 inline-flex rounded-full px-4 py-2 text-sm font-bold ${cat.accent}`}
                >
                  {cat.name}
                </div>
                <h2 className="text-3xl font-extrabold text-[#2d211b]">
                  {cat.name}
                </h2>
                <p className="mt-3 text-lg leading-8 text-[#76594c]">
                  {cat.description}
                </p>
              </div>
            </button>
          ))}
        </section>

        <section className="space-y-6 rounded-3xl border border-[#ead8c2] bg-white p-6 shadow-xl shadow-[#d6b18d]/15 sm:p-8">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#a85b44]">
                Latest Weekly Feels
              </p>
              <h2 className="mt-2 text-3xl font-extrabold text-[#2d211b]">
                {latestWeeklyEntry.title}
              </h2>
              <p className="mt-2 text-sm font-bold text-[#a85b44]">
                Week of {latestWeeklyEntry.weekOf}
              </p>
            </div>
            <Link
              className="inline-flex h-12 items-center justify-center rounded-full bg-[#2f4f4c] px-5 text-sm font-bold text-white transition hover:bg-[#243f3c]"
              href="/archive"
            >
              View archive
            </Link>
          </div>

          {latestWeeklyEntry.summary ? (
            <p className="max-w-3xl text-lg leading-8 text-[#76594c]">
              {latestWeeklyEntry.summary}
            </p>
          ) : null}

          <div className="grid gap-5 md:grid-cols-2">
            {(["miso", "dashi"] as const).map((catKey) => {
              const catEntry = latestWeeklyEntry.cats[catKey];
              const catName = catKey === "miso" ? "Miso" : "Dashi";

              return (
                <article
                  className="overflow-hidden rounded-3xl border border-[#ead8c2] bg-[#fffdf8]"
                  key={catKey}
                >
                  <div className="relative aspect-[4/3] bg-[#f7dfc6]">
                    <Image
                      src={catEntry.photo}
                      alt={catEntry.alt}
                      fill
                      priority
                      unoptimized
                      sizes="(min-width: 768px) 45vw, 90vw"
                      className="object-cover"
                    />
                  </div>
                  <div className="p-5">
                    <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#a85b44]">
                      {catName}
                    </p>
                    <p className="mt-3 text-lg leading-8 text-[#76594c]">
                      &quot;{catEntry.caption}&quot;
                    </p>
                  </div>
                </article>
              );
            })}
          </div>

          <Link
            className="inline-flex font-bold text-[#2f4f4c] underline decoration-[#9fcfc5] decoration-2 underline-offset-4"
            href={`/weeks/${latestWeeklyEntry.slug}`}
          >
            Read this week&apos;s full entry
          </Link>
        </section>

        <section className="space-y-6">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#a85b44]">
              Gallery
            </p>
            <h2 className="mt-2 text-3xl font-extrabold text-[#2d211b]">
              Favorite tiny moments
            </h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {visibleGalleryItems.map((item) => (
              <button
                aria-label={`Open ${item.title} photo`}
                className="group overflow-hidden rounded-3xl border border-[#ead8c2] bg-white text-left shadow-md shadow-[#d6b18d]/10 transition hover:-translate-y-1 hover:border-[#d9b79a]"
                key={item.src}
                onClick={() => setSelectedGalleryItem(item)}
                type="button"
              >
                <div className="relative aspect-[4/3] bg-[#f7dfc6]">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-base font-extrabold text-[#3c2a22]">
                    {item.title}
                  </h3>
                </div>
              </button>
            ))}
          </div>
        </section>

      </section>

      <footer className="border-t border-[#ead8c2] px-6 py-8 text-center text-sm font-semibold text-[#76594c]">
        Made with love for Miso & Dashi.
      </footer>

      {selectedGalleryItem ? (
        <div
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#2d211b]/80 p-4 backdrop-blur-sm"
          role="dialog"
        >
          <button
            aria-label="Close enlarged photo"
            className="absolute inset-0 cursor-default"
            onClick={() => setSelectedGalleryItem(null)}
            type="button"
          />
          <div className="relative z-10 w-full max-w-5xl overflow-hidden rounded-3xl bg-white shadow-2xl">
            <div className="relative aspect-[4/3] max-h-[78vh] bg-[#f7dfc6]">
              <Image
                src={selectedGalleryItem.src}
                alt={selectedGalleryItem.alt}
                fill
                priority
                sizes="95vw"
                className="object-contain"
              />
            </div>
            <div className="flex items-center justify-between gap-4 p-4 sm:p-5">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#a85b44]">
                  Gallery
                </p>
                <h3 className="text-xl font-extrabold text-[#2d211b]">
                  {selectedGalleryItem.title}
                </h3>
              </div>
              <button
                className="inline-flex h-11 items-center justify-center rounded-full bg-[#2f4f4c] px-5 text-sm font-bold text-white transition hover:bg-[#243f3c]"
                onClick={() => setSelectedGalleryItem(null)}
                type="button"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </main>
  );
}
