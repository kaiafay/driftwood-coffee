import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative h-screen min-h-[600px] overflow-hidden"
    >
      {/* Full-bleed background image */}
      <Image
        src="/images/hero.webp"
        alt="Driftwood Coffee interior — warm lighting, reclaimed wood, trailing plants"
        fill
        priority
        className="object-cover object-bottom"
        sizes="100vw"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-espresso/60 via-espresso/30 to-espresso/10" />

      {/* Content — offset left, not centered */}
      <div className="relative h-full flex flex-col justify-end pb-20 md:pb-28 px-8 md:px-16 max-w-6xl">
        <div className="max-w-xl">
          <p className="text-terracotta text-xs tracking-[0.3em] uppercase font-sans font-medium mb-5">
            Portland, OR — Est. 2016
          </p>
          <h1
            className="font-serif text-cream text-balance leading-none font-bold mb-12"
            style={{ fontSize: "clamp(3.5rem, 9vw, 8rem)" }}
          >
            Driftwood
            <br />
            Coffee
          </h1>
          <a
            href="#menu"
            className="inline-block bg-terracotta text-cream font-sans text-sm tracking-widest uppercase font-semibold px-8 py-4 transition-all duration-300 hover:bg-cream hover:text-espresso"
          >
            View Menu
          </a>
        </div>
      </div>
    </section>
  );
}
