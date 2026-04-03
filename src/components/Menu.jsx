import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const dishes = [
  {
    id: 1,
    name: "Margherita Pizza",
    description: "Classic Italian pizza with San Marzano tomatoes, fresh mozzarella di bufala, and aromatic basil from our wood-fired oven.",
    price: "$20",
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    tags: ["Signature", "Vegetarian"]
  },
  {
    id: 2,
    name: "Spaghetti Bolognese",
    description: "Hand-cut pasta simmered in our rich beef bolognese, finished with aged parmesan and fresh herbs.",
    price: "$28",
    image: "https://images.unsplash.com/photo-1612874742237-415c69bb9dca?w=600&h=500&fit=crop",
    tags: ["Popular"]
  },
  {
    id: 3,
    name: "Classic Tiramisu",
    description: "Layers of espresso-soaked ladyfingers and velvety mascarpone cream, dusted with premium cocoa.",
    price: "$12",
    image: "https://images.unsplash.com/photo-1571115177098-24ec42ed204d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    tags: ["Dessert"]
  }
];

export default function Menu() {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(titleRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
            toggleActions: 'play none none reverse'
          }
        }
      );

      cardsRef.current.forEach((card, index) => {
        gsap.fromTo(card,
          { opacity: 0, y: 60, scale: 0.95 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 1,
            delay: index * 0.2,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top 60%',
              toggleActions: 'play none none reverse'
            }
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={sectionRef}
      id="menu" 
      className="py-32 md:py-48 bg-gradient-charcoal relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-40 left-20 w-80 h-80 border border-[#D4A853]/10 rounded-full"></div>
        <div className="absolute bottom-40 right-20 w-96 h-96 border border-[#D4A853]/5 rounded-full"></div>
      </div>

      <div className="container mx-auto px-8 md:px-16 relative z-10">
        <div ref={titleRef} className="mb-20 md:mb-28">
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
              ref={el => cardsRef.current[index] = el}
              className="card-dark rounded-2xl overflow-hidden hover-lift group"
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
                  <button className="px-6 py-3 bg-[#D4A853] text-[#1A1A1A] rounded-lg font-semibold text-sm hover:bg-[#E8C87A] transition-colors cursor-pointer">
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