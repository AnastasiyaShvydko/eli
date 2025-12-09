import { useState } from "react";

const CATEGORIES = ["All", "Shawarma", "Platters", "Sides", "Drinks"];


  const ITEMS = [
  {
    id: 1,
    name: "Chicken Shawarma Wrap",
    price: "$11.99",
    category: "Shawarma",
    desc: "Marinated chicken, garlic sauce, fresh veggies.",
    img: "https://res.cloudinary.com/dbh4o00x2/image/upload/v1764017869/beef-steak-tartar-still-life_lpt4n2.jpg",
  },
  {
    id: 2,
    name: "Beef Shawarma Wrap",
    price: "$12.99",
    category: "Shawarma",
    desc: "Slow-roasted beef, tahini, pickles.",
    img: "https://res.cloudinary.com/dbh4o00x2/image/upload/v1764017867/close-up-hand-holding-plate-with-food_zwypam.jpg",
  },
  {
    id: 3,
    name: "Falafel Plate",
    price: "$13.50",
    category: "Platters",
    desc: "Crispy falafel, hummus, salad, pita.",
    img: "https://res.cloudinary.com/dbh4o00x2/image/upload/v1764017866/meat-cotlet-with-vegetables-red-basilic_yj0pea.jpg",
  },
  {
    id: 4,
    name: "Mixed Grill Platter",
    price: "$19.99",
    category: "Platters",
    desc: "Chicken, beef, rice, salad, sauces.",
    img: "/menu/mixed-grill.jpg",
  },
  {
    id: 5,
    name: "Hummus & Pita",
    price: "$7.50",
    category: "Sides",
    desc: "Creamy hummus, warm pita.",
    img: "/menu/hummus-pita.jpg",
  },
  {
    id: 6,
    name: "Fries",
    price: "$4.50",
    category: "Sides",
    desc: "Crispy golden fries.",
    img: "/menu/pasta-with-zucchini-chicken-green-peas.jpg",
  },
  {
    id: 7,
    name: "Mint Lemonade",
    price: "$4.99",
    category: "Drinks",
    desc: "Fresh lemon, mint, ice.",
    img: "/menu/mint-lemonade.jpg",
  },
  {
    id: 8,
    name: "Ayran",
    price: "$3.99",
    category: "Drinks",
    desc: "Traditional yogurt drink.",
    img: "/menu/ayran.jpg",
  },
];



export default function Menu() {
  const [active, setActive] = useState("All");

  const filtered = active === "All"
    ? ITEMS
    : ITEMS.filter(item => item.category === active);

  return (
    <section id = "menu-section" className="max-w-6xl mx-auto px-4 py-20 text-[var(--charcoal)]">
      <h1 className="text-4xl md:text-5xl font-cinzel text-center mb-6 text-[var(--sand)]">
        Our Menu
      </h1>
      <p className="text-center mb-10 text-sm md:text-base text-[var(--sand)] font-[var(--body)]">
        Choose a category to explore Eli’s Table favourites.
      </p>

      {/* Tabs */}
      <div className="flex justify-center mb-10">
        <div className="flex gap-3 overflow-x-auto pb-2">
          {CATEGORIES.map(cat => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={[
                "px-4 py-2 rounded-full text-sm md:text-base whitespace-nowrap border transition",
                active === cat
                  ? "bg-[var(--terracotta)] text-[var(--cream)] border-[var(--terracotta)]"
                  : "bg-white text-[var(--charcoal)] border-gray-300 hover:border-[var(--terracotta)] hover:text-[var(--terracotta)]"
              ].join(" ")}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Items */}
      <div className="grid gap-6 md:grid-cols-2">
        {filtered.map(item => (
          <div
  key={item.id}
  className="bg-white/90 shadow-sm border border-gray-100  overflow-hidden flex flex-col"
>
  {/* image */}
  {item.img && (
    <img
      src={item.img}
      alt={item.name}
      className="w-full h-[30rem]  object-cover object-buttom rounded-t-lg "
    />
  )}

  {/* content */}
  <div className="p-4 flex flex-col justify-between flex-1">
    <div>
      <div className="flex items-baseline justify-between gap-3 mb-1">
        <h3 className="text-lg md:text-xl font-[var(--body)]">
          {item.name}
        </h3>
        <span className="text-[var(--terracotta)] font-semibold">
          {item.price}
        </span>
      </div>
      <p className="text-sm text-gray-600 font-[var(--body)]">
        {item.desc}
      </p>
    </div>
    <div className="mt-3">
      <span className="inline-block text-xs px-3 py-1 rounded-full bg-[var(--sand)] text-[var(--charcoal)]">
        {item.category}
      </span>
    </div>
  </div>
</div>

        ))}

        {filtered.length === 0 && (
          <p className="col-span-full text-center text-gray-500">
            No items in this category yet.
          </p>
        )}
      </div>
    </section>
  );
}
