const menuCategories = [
  {
    name: "Espresso",
    items: [
      { name: "Espresso", price: "$3.50" },
      { name: "Americano", price: "$4.00" },
      { name: "Cortado", price: "$4.50" },
      { name: "Latte", price: "$5.00" },
      { name: "Cappuccino", price: "$5.00" },
      { name: "Oat Milk Latte", price: "$5.50" },
    ],
  },
  {
    name: "Seasonal Specials",
    items: [
      { name: "Brown Butter Latte", price: "$6.00" },
      { name: "Cardamom Honey Latte", price: "$6.00" },
      { name: "Salted Maple Cold Brew", price: "$6.50" },
    ],
    special: true,
  },
  {
    name: "Brewed Coffee",
    items: [
      { name: "Drip Coffee", price: "$3.00" },
      { name: "Cold Brew", price: "$5.00" },
      { name: "Pour Over", price: "$6.00" },
    ],
  },
  {
    name: "Pastries & Bites",
    items: [
      { name: "Cardamom Morning Bun", price: "$4.50" },
      { name: "Brown Butter Blondie", price: "$4.00" },
      { name: "Almond Croissant", price: "$5.00" },
      { name: "Seasonal Galette", price: "$5.50" },
      { name: "Avocado Toast", price: "$9.00" },
      { name: "Soft Scrambled Egg Tartine", price: "$10.00" },
    ],
  },
];

export default function Menu() {
  return (
    <section id="menu" className="bg-espresso py-24 md:py-36 px-6 md:px-16">
      <div className="max-w-6xl mx-auto">
        {/* Header — offset */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 reveal">
          <div>
            <div className="flex items-center gap-4 mb-4">
              <div className="h-px w-12 bg-terracotta" />
              <span className="text-terracotta text-xs tracking-[0.3em] uppercase font-sans font-medium">
                What We Serve
              </span>
            </div>
            <h2
              className="font-serif font-bold text-cream text-balance leading-tight"
              style={{ fontSize: "clamp(2.5rem, 5vw, 4.5rem)" }}
            >
              The Menu
            </h2>
          </div>
          <p className="text-cream/50 font-sans text-sm max-w-xs text-pretty">
            Rotating seasonally. Updated weekly.
          </p>
        </div>

        {/* Menu grid — 2 col on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-14 reveal reveal-delay-1">
          {menuCategories.map((category) => (
            <div key={category.name}>
              {/* Category header */}
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-cream/15">
                <h3
                  className={`font-serif font-semibold text-xl ${
                    category.special ? "text-terracotta" : "text-cream"
                  }`}
                >
                  {category.name}
                </h3>
                {category.special && (
                  <span className="text-terracotta text-xs tracking-widest uppercase font-sans border border-terracotta/50 px-2 py-0.5">
                    New
                  </span>
                )}
              </div>

              {/* Items */}
              <ul className="space-y-3">
                {category.items.map((item) => (
                  <li
                    key={item.name}
                    className="flex items-baseline justify-between gap-4"
                  >
                    <span className="font-sans text-cream/80 text-[15px] leading-relaxed">
                      {item.name}
                    </span>
                    <span className="font-sans text-cream/50 text-sm shrink-0 tabular-nums">
                      {item.price}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
