export default function Footer() {
  return (
    <footer className="bg-espresso border-t border-cream/10 py-10 px-6 md:px-16">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        {/* Brand */}
        <div>
          <p className="font-serif text-cream font-semibold text-lg mb-1">
            Driftwood Coffee
          </p>
          <p className="font-sans text-cream/40 text-sm">
            Good coffee. Great company.
          </p>
        </div>

        {/* Instagram */}
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Driftwood Coffee on Instagram"
          className="flex items-center gap-2 text-cream/50 hover:text-terracotta transition-colors duration-200 group"
        >
          {/* Instagram icon */}
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
            <circle cx="12" cy="12" r="5" />
            <circle
              cx="17.5"
              cy="6.5"
              r="0.5"
              fill="currentColor"
              stroke="none"
            />
          </svg>
          <span className="font-sans text-sm tracking-widest uppercase">
            @driftwoodpdx
          </span>
        </a>

        {/* Copyright */}
        <p className="font-sans text-cream/25 text-xs">
          &copy; {new Date().getFullYear()} Driftwood Coffee Co.
        </p>
      </div>
    </footer>
  );
}
