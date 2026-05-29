const cats = [
  {
    name: "Miso",
    description: "Sweet, curious, cardboard enthusiast",
    accent: "bg-rose-100 text-rose-700",
  },
  {
    name: "Dashi",
    description: "Mischievous, dramatic, zoomies athlete",
    accent: "bg-teal-100 text-teal-700",
  },
];

const galleryItems = [
  "Window patrol",
  "Snack negotiations",
  "Blanket fortress",
  "Post-zoomies nap",
];

const captions = [
  "We were not on the counter. The counter was under us.",
  "A full bowl is a suggestion. A half bowl is an emergency.",
  "Today we chased one sunbeam, three shadows, and our own feelings.",
];

export default function Home() {
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

          <div className="relative mx-auto aspect-square w-full max-w-sm overflow-hidden rounded-[2rem] border border-[#ead8c2] bg-[#f7dfc6] shadow-2xl shadow-[#d7a47b]/25">
            <div className="absolute inset-x-8 top-10 h-24 rounded-full bg-white/45 blur-2xl" />
            <div className="relative flex h-full flex-col items-center justify-center gap-6 p-8 text-center">
              <div className="flex gap-5">
                <div className="h-24 w-24 rounded-full bg-[#f6f0e8] shadow-inner shadow-[#d0a483]" />
                <div className="h-24 w-24 rounded-full bg-[#3b342f] shadow-inner shadow-black/30" />
              </div>
              <div className="rounded-2xl bg-white/80 px-5 py-3 text-sm font-semibold text-[#6f4b3e] shadow-sm">
                Photo coming soon
              </div>
            </div>
          </div>
        </div>

        <section className="grid gap-5 md:grid-cols-2">
          {cats.map((cat) => (
            <article
              className="rounded-3xl border border-[#ead8c2] bg-white p-6 shadow-lg shadow-[#d6b18d]/15"
              key={cat.name}
            >
              <div
                className={`mb-8 inline-flex rounded-full px-4 py-2 text-sm font-bold ${cat.accent}`}
              >
                {cat.name}
              </div>
              <h2 className="text-3xl font-extrabold text-[#2d211b]">
                {cat.name}
              </h2>
              <p className="mt-3 text-lg leading-8 text-[#76594c]">
                {cat.description}
              </p>
            </article>
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
            {galleryItems.map((item, index) => (
              <div
                className="flex aspect-[4/3] flex-col justify-between rounded-3xl border border-dashed border-[#d9b79a] bg-[#fffdf8] p-5 text-[#76594c]"
                key={item}
              >
                <span className="text-sm font-bold">Photo {index + 1}</span>
                <span className="text-lg font-extrabold text-[#3c2a22]">
                  {item}
                </span>
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
