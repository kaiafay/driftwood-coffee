export default function Visit() {
  return (
    <section id="visit" className="bg-warm-mid py-24 md:py-36 px-6 md:px-16">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex items-center gap-4 mb-16">
          <div className="h-px w-12 bg-terracotta" />
          <span className="text-terracotta text-xs tracking-[0.3em] uppercase font-sans font-medium">
            Find Us
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
          {/* Left — heading + info */}
          <div className="md:col-span-4">
            <h2
              className="font-serif font-bold text-espresso text-balance leading-tight mb-10"
              style={{ fontSize: 'clamp(2.2rem, 4vw, 3.5rem)' }}
            >
              Come as<br />you are.
            </h2>

            {/* Hours */}
            <div className="mb-8">
              <p className="text-xs tracking-[0.2em] uppercase text-terracotta font-sans font-medium mb-3">
                Hours
              </p>
              <div className="space-y-2">
                <div className="flex justify-between items-baseline gap-8">
                  <span className="font-sans text-espresso text-sm">Mon – Fri</span>
                  <span className="font-sans text-muted-foreground text-sm">7 am – 5 pm</span>
                </div>
                <div className="flex justify-between items-baseline gap-8">
                  <span className="font-sans text-espresso text-sm">Sat – Sun</span>
                  <span className="font-sans text-muted-foreground text-sm">8 am – 4 pm</span>
                </div>
              </div>
            </div>

            {/* Address */}
            <div className="mb-10">
              <p className="text-xs tracking-[0.2em] uppercase text-terracotta font-sans font-medium mb-3">
                Address
              </p>
              <address className="font-sans text-espresso text-sm not-italic leading-relaxed">
                1842 SE Ankeny St<br />
                Portland, OR 97214
              </address>
            </div>

            <a
              href="https://maps.google.com/?q=1842+SE+Ankeny+St+Portland+OR+97214"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-sans font-medium text-espresso tracking-widest uppercase border-b border-espresso pb-0.5 hover:text-terracotta hover:border-terracotta transition-colors duration-200"
            >
              Get Directions
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                <path d="M2 10L10 2M10 2H4M10 2V8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>

          {/* Right — map embed */}
          <div className="md:col-span-7 md:col-start-6 aspect-[4/3] md:aspect-auto md:h-[420px] overflow-hidden">
            <iframe
              title="Driftwood Coffee location map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2795.5488730506534!2d-122.65147!3d45.52334!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5495a09aa7de41e5%3A0x1!2s1842%20SE%20Ankeny%20St%2C%20Portland%2C%20OR%2097214!5e0!3m2!1sen!2sus!4v1710000000000"
              width="100%"
              height="100%"
              style={{ border: 0, filter: 'sepia(30%) saturate(80%)' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
