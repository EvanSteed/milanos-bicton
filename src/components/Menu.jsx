import React from 'react';

const dishes = [
  {
    id: 1,
    name: "Margherita Pizza",
    description: "Classic Italian pizza with San Marzano tomatoes, fresh mozzarella di bufala, and aromatic basil from our wood-fired oven.",
    price: "$20",
    image: "/images/margherita.jpg",
    tags: ["Signature", "Vegetarian"]
  },
  {
    id: 2,
    name: "Spaghetti Bolognese",
    description: "Hand-cut pasta simmered in our rich beef bolognese, finished with aged parmesan and fresh herbs.",
    price: "$28",
    image: "/images/pasta.jpg",
    tags: ["Popular"]
  },
  {
    id: 3,
    name: "Classic Tiramisu",
    description: "Layers of espresso-soaked ladyfingers and velvety mascarpone cream, dusted with premium cocoa.",
    price: "$12",
    image: "/images/tiramisu.jpg",
    tags: ["Dessert"]
  }
];

export default function Menu() {
  return (
    <section
      id="menu"
      className="py-32 md:py-48 bg-gradient-charcoal relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-40 left-20 w-80 h-80 border border-[#D4A853]/10 rounded-full"></div>
        <div className="absolute bottom-40 right-20 w-96 h-96 border border-[#D4A853]/5 rounded-full"></div>
      </div>

      <div className="container mx-auto px-8 md:px-16 relative z-10">
        <div className="mb-20 md:mb-28 animate-fade-in-up">
          <span className="text-[#D4A853] text-sm font-semibold tracking-[0.25em] uppercase mb-6 block">
            Signature Dishes
          </span>
          <h2 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-[#FDF8F3] max-w-xl">
            Featured <br/>Creations
          </h2>
          <p className="text-[#FDF8F3]/50 mt-6 max-w-md text-lg">
            Discover our chef's most loved dishes, crafted with passion and the finest ingredients
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {dishes.map((dish, index) => (
            <div
              key={dish.id}
              className="card-dark rounded-2xl overflow-hidden hover-lift group animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative h-72 overflow-hidden">
                <img
                  src={dish.image}
                  alt={dish.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A] via-transparent to-transparent"></div>
                <div className="absolute top-5 left-5 flex gap-2">
                  {dish.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-4 py-1.5 bg-[#D4A853]/20 text-[#D4A853] text-xs font-medium rounded-full backdrop-blur-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="p-8">
                <h3 className="font-display text-2xl md:text-3xl font-bold text-[#FDF8F3] mb-4">
                  {dish.name}
                </h3>
                <p className="text-[#FDF8F3]/50 mb-8 text-base leading-relaxed">
                  {dish.description}
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-[#D4A853] font-display text-3xl font-bold">
                    {dish.price}
                  </span>
                  <button className="px-6 py-3 bg-[#D4A853] text-[#1A1A1A] rounded-lg font-semibold text-sm hover:bg-[#E8C87A] transition-colors cursor-pointer" aria-label={`Order ${dish.name}`}>
                    Order Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 text-left">
          <a href="#fullmenu" className="btn-primary inline-block text-lg px-12 py-5">
            View Full Menu
          </a>
        </div>
      </div>
    </section>
  );
}