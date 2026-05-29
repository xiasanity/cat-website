"use client";

import Image from "next/image";
import { useState } from "react";

const cats = [
  {
    name: "Miso",
    description: "Sweet, curious, cardboard enthusiast",
    accent: "bg-rose-100 text-rose-700",
    image: "/photos/miso-portrait.jpeg",
    imageAlt: "Miso lounging sweetly on a cushion.",
    imageClassName: "object-contain p-3",
  },
  {
    name: "Dashi",
    description: "Mischievous, dramatic, zoomies athlete",
    accent: "bg-teal-100 text-teal-700",
    image: "/photos/dashi-portrait.jpeg",
    imageAlt: "Dashi draped dramatically across a lap.",
    imageClassName: "object-cover object-[50%_38%]",
  },
];

const galleryItems = [
  {
    src: "/photos/dashi-chaos.jpeg",
    alt: "Dashi tangled up with a pair of slides.",
    title: "Slide wrestling",
    cats: ["Dashi"],
  },
  {
    src: "/photos/dashi-mischeivous.jpeg",
    alt: "Dashi peeking out from a paper bag.",
    title: "Paper bag ambush",
    cats: ["Dashi"],
  },
  {
    src: "/photos/dashi-play.jpeg",
    alt: "Dashi sitting inside a clear cat backpack.",
    title: "Carrier inspection",
    cats: ["Dashi"],
  },
  {
    src: "/photos/miso-box.jpeg",
    alt: "Miso peeking out from a small storage bin.",
    title: "Secret headquarters",
    cats: ["Miso"],
  },
  {
    src: "/photos/miso-sleepy.jpeg",
    alt: "Miso stretched out on a cozy blanket.",
    title: "Maximum stretch",
    cats: ["Miso"],
  },
  {
    src: "/photos/miso-warm.jpeg",
    alt: "Miso tucked into a warm blanket.",
    title: "Blanket mode",
    cats: ["Miso"],
  },
  {
    src: "/photos/sibling-hug.jpeg",
    alt: "Miso and Dashi cuddled together in a cat carrier.",
    title: "Double occupancy",
    cats: ["Miso", "Dashi"],
  },
  {
    src: "/photos/sibling-love.jpeg",
    alt: "Miso and Dashi cuddling together in a cardboard box.",
    title: "Box of love",
    cats: ["Miso", "Dashi"],
  },
];

const captions = [
  "We were not on the counter. The counter was under us.",
  "A full bowl is a suggestion. A half bowl is an emergency.",
  "Today we chased one sunbeam, three shadows, and our own feelings.",
];

export default function Home() {
  const [activeCat, setActiveCat] = useState<string | null>(null);

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
              src="/photos/main.jpeg"
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
              <div
                className="group overflow-hidden rounded-3xl border border-[#ead8c2] bg-white shadow-md shadow-[#d6b18d]/10"
                key={item.src}
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
              </div>
            ))}
          </div>
        </section>

        <section className="space-y-6 rounded-3xl bg-[#2f4f4c] p-6 text-white sm:p-8">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#bfe8df]">
              Instagram captions
            </p>
            <h2 className="mt-2 text-3xl font-extrabold">
              As dictated by the cats
            </h2>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {captions.map((caption) => (
              <blockquote
                className="rounded-2xl bg-white/10 p-5 text-lg leading-8"
                key={caption}
              >
                &quot;{caption}&quot;
              </blockquote>
            ))}
          </div>
        </section>
      </section>

      <footer className="border-t border-[#ead8c2] px-6 py-8 text-center text-sm font-semibold text-[#76594c]">
        Made with love for Miso & Dashi.
      </footer>
    </main>
  );
}
