import Image from "next/image";

export default function About() {
  return (
    <section
      id="about"
      className="bg-background py-24 md:py-36 px-6 md:px-16 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section label */}
        <div className="flex items-center gap-4 mb-16 reveal">
          <div className="h-px w-12 bg-terracotta" />
          <span className="text-terracotta text-xs tracking-[0.3em] uppercase font-sans font-medium">
            Our Story
          </span>
        </div>

        {/* Asymmetric layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-0 items-start">
          {/* Image — large, offset left, overlapping */}
          <div className="md:col-span-6 relative reveal reveal-delay-1">
            <div className="aspect-[4/5] relative overflow-hidden">
              <Image
                src="/images/about.jpg"
                alt="A latte in a ceramic cup on a reclaimed wood table at Driftwood Coffee"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            {/* Floating accent block */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-terracotta hidden md:block -z-10" />
          </div>

          {/* Text — offset right, pushed down */}
          <div className="md:col-span-5 md:col-start-8 md:mt-24 reveal reveal-delay-2">
            <h2
              className="font-serif font-bold text-espresso text-balance leading-tight mb-8"
              style={{ fontSize: "clamp(2.2rem, 4vw, 3.5rem)" }}
            >
              A place to stay
              <br />a little longer.
            </h2>
            <p className="font-sans text-muted-foreground text-base md:text-lg leading-relaxed text-pretty mb-8">
              Driftwood is a neighborhood café in Portland&apos;s inner east
              side. We source our beans from small Pacific Northwest roasters,
              bake everything in-house each morning, and believe a good cup of
              coffee shouldn&apos;t be rushed.
            </p>
            <p className="font-sans text-muted-foreground text-base md:text-lg leading-relaxed text-pretty mb-10">
              Pull up a chair — we saved you a seat.
            </p>
            <div className="flex items-center gap-4">
              <div className="h-px w-10 bg-sage" />
              <span className="text-sage text-sm font-sans tracking-widest uppercase">
                SE Portland
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
