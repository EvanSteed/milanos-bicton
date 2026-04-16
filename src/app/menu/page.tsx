"use client";

import { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const menuData = {
  breakfast: [
    { id: 1, name: "Two Slices of Toast", price: "$7.50", desc: "" },
    { id: 2, name: "Two Slices of Fruit Toast", price: "$8.50", desc: "Served with jam/vegemite/peanut butter/marmalade/honey." },
    { id: 3, name: "Big Breakfast", price: "$32", desc: "Eggs your way, bacon, hashbrown, mixed mushroom, oven roasted tomato, smashed avocado with sourdough toast." },
    { id: 4, name: "Bacon and Egg Sandwich", price: "$11.50", desc: "Fried egg, cheese, bacon with choice of your sauce." },
    { id: 5, name: "Eggs Benedict Bacon", price: "$24", desc: "Soft poached eggs served with spinach, hollandaise sauce and toast" },
    { id: 6, name: "Eggs Benedict Ham", price: "$24", desc: "Soft poached eggs served with spinach, hollandaise sauce and toast" },
    { id: 7, name: "Eggs Benedict Salmon", price: "$27", desc: "Soft poached eggs served with spinach, hollandaise sauce and toast" },
    { id: 8, name: "Omelette with 4 Fillings and Toast", price: "$21", desc: "Mushroom, tomato, baby spinach and onion." },
    { id: 9, name: "Breaky Burrito", price: "$19", desc: "Chorizo or bacon, spring onion, chilli, scrambled free-range eggs in a wrap with tabasco sauce (Vegetarian option available)." },
    { id: 10, name: "Breaky Wrap", price: "$15", desc: "Fried eggs, bacon and spinach served with your choice of sauce." },
    { id: 11, name: "Avocado Smash", price: "$28", desc: "Smashed avocado on sourdough, smoked salmon, two poached eggs topped with hollandaise sauce." },
    { id: 12, name: "Waffles", price: "$20", desc: "Nutella waffles served with banana, maple syrup and icecream or cream." }
  ],
  brunchlunch: [
    { id: 1, name: "Breakfast Gnocchi", price: "$32", desc: "Gnocchi, pan fried chorizo, wild mushrooms, semi-dried tomato, house pesto, two poached eggs and macadamia nuts." },
    { id: 2, name: "Filled Mushroom", price: "$25", desc: "Grilled filled mushroom with guacamole, tomato, poached eggs, asparagus served on toast." },
    { id: 3, name: "Breaky Bruschetta", price: "$25", desc: "Tomato, onion, basil and feta salsa served warm on toast, topped with poached eggs and hollandaise sauce." },
    { id: 4, name: "Steak Sandwich and Chips", price: "$28.50", desc: "Tender steak with caramelized onion, beetroot pickle, egg, lettuce, cheese, tomato and aioli sauce." },
    { id: 5, name: "Chicken, Bacon and Avocado Sandwich with Chips", price: "$25", desc: "Freshly grilled chicken and crispy bacon served with lettuce, tomato, cheese, avocado and mayo." },
    { id: 6, name: "Vegetable Wrap", price: "$23", desc: "Roasted vegetables and lettuce served with chips." }
  ],
  starters: [
    { id: 1, name: "Garlic Bread", price: "$9.50", desc: "" },
    { id: 2, name: "Fresh Bread", price: "$9", desc: "served with olive oil and balsamic vinegar. V" },
    { id: 3, name: "Pizza Bianca", price: "$12", desc: "Olive oil, thyme and sea salt. V" },
    { id: 4, name: "Bruschetta", price: "$20", desc: "Tomatoes, basil pesto, onion, fetta on toasted garlic bread, drizzled with olive oil and balsamic glaze." },
    { id: 5, name: "Antipasto", price: "$30", desc: "Please see our specials menu" },
    { id: 6, name: "Chilli Prawns", price: "$28", desc: "Sauteed with fresh tomatoes, chilli, lemon, thyme, served with toasted garlic bread. (1/2 dozen)" },
    { id: 7, name: "Garlic Prawns", price: "$28", desc: "Pan fried with garlic, white wine, cream, served with steamed wild and jasmine rice. GF" },
    { id: 8, name: "Chilli Mussels", price: "$30", desc: "Local mussels tossed in rich tomato sauce, chilli, garlic and basil. Served with fresh bread. 1/2 kg." },
    { id: 9, name: "Arancini", price: "$20", desc: "Mini rice balls, lightly crumbed, served with tomato sauce, fresh rocket and shaved parmesan cheese. V" },
    { id: 10, name: "Dips", price: "$24", desc: "Please see our specials menu" },
    { id: 11, name: "Oysters Natural", price: "$25", desc: "Fresh oysters served over ice with mignonette sauce. (1/2 Dozen) GF" },
    { id: 12, name: "Oysters Kilpatrick", price: "$28", desc: "Grilled oysters topped with bacon, kilpatrick sauce, served over a bed of rock salt. (1/2 Dozen)" },
    { id: 13, name: "Dusted Calamari", price: "$20", desc: "Lightly paprika crumbed calamari served with garden salad." }
  ],
  pizza: [
    { id: 1, name: "Margherita", price: "$23", desc: "Tomato sauce, bocconcini cheese, fresh basil. V" },
    { id: 2, name: "Ham and Pineapple", price: "$24", desc: "Tomato sauce, cheese, ham, pineapple." },
    { id: 3, name: "Prosciutto", price: "$28", desc: "Tomato sauce, cheese, bocconcini, tomatoes, prosciutto." },
    { id: 4, name: "Chicken", price: "$29", desc: "Tomato sauce, cheese, chicken breast, red onion, capsicum, semi-dried tomatoes, basil pesto." },
    { id: 5, name: "Lamb", price: "$29", desc: "Eggplant kasundi, tomato sauce, cheese, red onion, mint yoghurt, chilli." },
    { id: 6, name: "Bacon", price: "$28", desc: "Mushrooms, bacon, olives, tomatoes, cheese." },
    { id: 7, name: "Prawn", price: "$29", desc: "Tomato sauce, cheese, marinated prawns, fresh chilli, garlic, rocket pesto." },
    { id: 8, name: "Seafood", price: "$32", desc: "Tomato sauce, cheese, prawns, calamari, fish, mussels." },
    { id: 9, name: "Meatlovers", price: "$30", desc: "Tomato sauce, cheese, ham, salami, bacon, italian sausage." },
    { id: 10, name: "Pepperoni", price: "$29", desc: "Tomato sauce, olives, capsicum, cheese." },
    { id: 11, name: "Pumpkin", price: "$29", desc: "Tomato sauce, cheese, goats cheese, roasted pumpkin, basil pesto, cherry tomatoes, fresh rocket, roasted pine nuts. V" },
    { id: 12, name: "Tandoori Chicken", price: "$29", desc: "Tomato sauce, cheese, Tandoori chicken, onion, jalapeno with mint yoghurt." },
    { id: 13, name: "Vegetarian", price: "$28", desc: "Tomato sauce, cheese, capsicum, onion, tomatoes, olives, mushroom. V" },
    { id: 14, name: "Calzone", price: "$28", desc: "Tomato sauce, cheese, italian sausage, capsicum, mushrooms, ricotta cheese." }
  ],
  pasta: [
    { id: 1, name: "Spaghetti Aglio e Olio", price: "$24", desc: "Chilli, garlic, onion, fresh tomatoes, parsley, basil and olive oil topped with shaved parmesan cheese. V" },
    { id: 2, name: "Spaghetti Bolognese", price: "$29", desc: "Spaghetti pasta, cooked in beef bolognese served with shaved parmesan cheese." },
    { id: 3, name: "Ragu", price: "$30", desc: "Hand cut pasta tossed with chunky beef and tomato sauce, finished with shaved parmesan cheese." },
    { id: 4, name: "Gamberi", price: "$32", desc: "Garlic prawns, fettuccine pasta, garlic, semi-dried tomato pesto, white wine, cream and basil." },
    { id: 5, name: "Prawn and Scallop Ravioli", price: "$33", desc: "Handmade pasta pillows, filled with prawn and scallop mousse, cream, saffron, semi-dried tomatoes, finished with shaved parmesan cheese." },
    { id: 6, name: "Carbonara", price: "$31", desc: "Fettuccine pasta, bacon, spring onion, garlic, cream, black pepper, mushrooms, shaved parmesan." },
    { id: 7, name: "Beef Cheek Ravioli", price: "$32", desc: "Home-made pasta with succulent braised beef, chilli and basil." },
    { id: 8, name: "Vegetable Ravioli", price: "$31", desc: "Pasta filled with roasted pumpkin, ricotta cheese, walnuts, tossed with tomatoes, basil and chilli. V." },
    { id: 9, name: "Gnocchi", price: "$29", desc: "Handmade potato gnocchi, spinach, fresh tomatoes, chilli, olive oil, basil, shaved parmesan. V." },
    { id: 10, name: "Marinara", price: "$33", desc: "Spaghetti tossed with prawns, fish, mussels, squid, onion, garlic, in rich tomato sauce and fresh basil." },
    { id: 11, name: "Mushroom Risotto", price: "$30", desc: "Mixed mushrooms, onion, garlic, cream, with shaved parmesan cheese and crispy sweet potato. V | GF." },
    { id: 12, name: "Penne Chicken", price: "$30", desc: "Marinated chicken breast, onion, garlic, spinach, semi-dried tomatoes, mushrooms in white wine cream." },
    { id: 13, name: "Seafood Paella", price: "$34", desc: "Mixed seafood, arborio rice, chorizo, peas, capsicum, tomatoes, oven baked with saffron fish stock." },
    { id: 14, name: "Crab Linguine", price: "$35", desc: "Shark bay crab, tossed with chilli, onion, garlic, fresh tomatoes, basil, saffron with butter." }
  ],
  mains: [
    { id: 1, name: "Mango Chicken", price: "$33", desc: "Pan fried chicken breast, mango, cherry tomatoes, white wine, cream, served with creamy mash potato, topped with roasted macadamia nuts." },
    { id: 2, name: "Oysters Natural", price: "$42", desc: "Fresh oysters served over ice with mignonette sauce. (Dozen) GF" },
    { id: 3, name: "Oysters Kilpatrick", price: "$42", desc: "Grilled oysters topped with bacon, kilpatrick sauce served over a bed of rock salt. (Dozen)" },
    { id: 4, name: "Calamari", price: "$28", desc: "Lightly fried, served with chips, fresh garden salad and lemon aioli." },
    { id: 5, name: "Fish and Chips", price: "$30", desc: "Lightly fried in beer batter, served with chips and greek salad." },
    { id: 6, name: "Chilli Mussels", price: "$45", desc: "Mussels tossed in rich tomato sauce, chilli, garlic and basil. Served with fresh bread. 1 kg." },
    { id: 7, name: "BBQ Seafood", price: "$45", desc: "Prawn skewers, mussels, cockles, squid, Tasmanian salmon, garden salad, chips with aioli. GF" },
    { id: 8, name: "Garlic Prawns", price: "$38", desc: "Pan fried with garlic, white wine, cream, served with steamed wild and jasmine rice. GF" },
    { id: 9, name: "Trio of Surf", price: "$45", desc: "Grilled salmon, half shell scallops, grilled prawns served with mashed potato and wilted spinach." },
    { id: 10, name: "Parmigiana", price: "$32", desc: "Crumbed veal or chicken topped with tomato sauce, mozzarella cheese served with chips." },
    { id: 11, name: "Duck", price: "$42", desc: "Oven roasted duck breast served over porcini mushroom risotto, drizzled with blood orange glaze, garden salad." },
    { id: 12, name: "Chicken Breast", price: "$30", desc: "Marinated in garlic, grilled, drizzled with balsamic glaze. Served with balsamic pears, cherry tomatoes, bocconcini and rocket salad. GF" },
    { id: 13, name: "Lamb Cutlets", price: "$50", desc: "Oven roasted and served with creamy mash potato, honey glazed carrots and rosemary jus." },
    { id: 14, name: "Scotch Fillet", price: "$48", desc: "Black angus, oven roasted the way you like it, served with oven roasted garlic potato and red wine jus." },
    { id: 15, name: "Chilli Prawns", price: "$38", desc: "Sauteed with fresh tomatoes, chilli, lemon, thyme, served with toasted garlic bread. (1 dozen)" }
  ],
  salads: [
    { id: 1, name: "Garden Salad", price: "$12", desc: "Tomato, cucumber, mixed lettuce, onion, olives, balsamic dressing. V | GF" },
    { id: 2, name: "Greek Salad", price: "$15", desc: "Tomato, cucumber, onion, olives, fetta cheese, homemade greek dressing. V" },
    { id: 3, name: "Caesar Salad", price: "$21", desc: "Cos lettuce, boiled egg, anchovies, croutons, cherry tomatoes, crispy bacon, shaved parmesan cheese." },
    { id: 4, name: "Smoked Salmon Salad", price: "$26", desc: "Avocado, cherry tomatoes, roasted pumpkin, persian fetta, fresh spinach, pine nuts." },
    { id: 5, name: "Chicken Caesar Salad", price: "$28", desc: "Chicken breast, cos lettuce, boiled egg, anchovies, croutons, cherry tomatoes, avocado, crispy bacon, shaved parmesan cheese." },
    { id: 6, name: "Tomato Bocconcini and Prosciutto Salad", price: "$19", desc: "Fresh basil, olive oil, balsamic." },
    { id: 7, name: "Rocket Salad", price: "$18", desc: "Fresh rocket, blue cheese, cherry tomatoes, balsamic pears, roasted walnuts, olive oil, balsamic glaze." }
  ],
  kids: [
    { id: 1, name: "Ham and Pineapple Pizza", price: "$12", desc: "" },
    { id: 2, name: "Chicken and Cheese Pizza", price: "$12", desc: "" },
    { id: 3, name: "Spaghetti Bolognese", price: "$12", desc: "" },
    { id: 4, name: "Spaghetti Butter and Cheese", price: "$12", desc: "" },
    { id: 5, name: "Chicken Fettuccine", price: "$12", desc: "" },
    { id: 6, name: "Crumbed Chicken and Chips", price: "$12", desc: "" },
    { id: 7, name: "Calamari or Fish, with Chips", price: "$12", desc: "" },
    { id: 8, name: "Margherita Pizza (No Basil)", price: "$12", desc: "" }
  ],
  extras: [
    { id: 1, name: "Chips", price: "$8.50", desc: "" },
    { id: 2, name: "Wedges", price: "$9.50", desc: "with sour cream and sweet chilli." },
    { id: 3, name: "Steamed Jasmine Rice Bowl", price: "$5", desc: "" },
    { id: 4, name: "Roasted Vegetables", price: "$12", desc: "" },
    { id: 5, name: "Creamy Mash Potato", price: "$6", desc: "" },
    { id: 6, name: "Bowl of Olives and Fetta", price: "$14", desc: "" },
    { id: 7, name: "Extra Sauce", price: "$1", desc: "" }
  ]
};

const tabs = [
  { id: 'breakfast', label: 'Breakfast' },
  { id: 'brunchlunch', label: 'Brunch/Lunch' },
  { id: 'starters', label: 'Starters' },
  { id: 'pizza', label: 'Pizza' },
  { id: 'salads', label: 'Salads' },
  { id: 'pasta', label: 'Pasta/Risotto' },
  { id: 'mains', label: 'Meat/Seafood' },
  { id: 'kids', label: 'Kids' },
  { id: 'extras', label: 'Extras' }
];

export default function MenuPage() {
  const [activeTab, setActiveTab] = useState('breakfast');
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const itemsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(headerRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
            toggleActions: "play none none reverse"
          }
        }
      );

      gsap.fromTo(".menu-tab",
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.5, stagger: 0.08, ease: "power2.out" }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    itemsRef.current.forEach((item, index) => {
      if (item) {
        gsap.fromTo(item,
          { opacity: 0, y: 20, scale: 0.95 },
          { opacity: 1, y: 0, scale: 1, duration: 0.4, delay: index * 0.03, ease: "power2.out" }
        );
      }
    });
  }, [activeTab]);

  return (
    <section ref={sectionRef} className="min-h-screen py-24 md:py-32 bg-[#FDF8F3]">
      <div className="container mx-auto px-6 md:px-12">
        <div ref={headerRef} className="text-center mb-16">
          <span className="text-[#991B1B] text-sm font-semibold tracking-[0.25em] uppercase mb-4 block">
            Our Menu
          </span>
          <img 
            src="/images/logo_black.png" 
            alt="Milano's" 
            className="h-16 md:h-20 mx-auto mb-6"
          />
          <p className="text-[#2D2D2D]/70 text-xl max-w-xl mx-auto">
            Authentic Italian cuisine crafted with passion and the finest ingredients
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-[#D4A853] via-[#991B1B] to-[#D4A853] mx-auto mt-8"></div>
        </div>

        <div className="mb-12 flex flex-wrap justify-center gap-3">
          {tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`menu-tab px-6 py-3 rounded-lg font-medium transition-all duration-300 text-base ${
                activeTab === tab.id
                  ? 'bg-[#991B1B] text-[#FDF8F3] shadow-lg'
                  : 'bg-white text-[#2D2D2D] hover:bg-[#D4A853]/20 hover:text-[#991B1B] border border-[#D4A853]/30'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {activeTab === 'kids' && (
          <div className="mb-8 text-center">
            <p className="text-[#991B1B] font-semibold text-lg">For children 12 years and under</p>
          </div>
        )}

        {activeTab === 'breakfast' && (
          <div className="mb-8 text-center">
            <p className="text-[#991B1B] font-semibold text-lg">Breakfast from 7am. All day breakfast.</p>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {menuData[activeTab as keyof typeof menuData].map((item, index) => (
            <div 
              key={item.id}
              ref={el => { if (el) itemsRef.current[index] = el }}
              className="menu-item bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-[#D4A853]/20"
            >
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-display text-xl font-bold text-[#1A1A1A]">
                  {item.name}
                </h3>
                <span className="text-[#991B1B] font-semibold text-lg ml-4 whitespace-nowrap">
                  {item.price}
                </span>
              </div>
              {item.desc && (
                <p className="text-[#2D2D2D]/70 text-base leading-relaxed">
                  {item.desc}
                </p>
              )}
            </div>
          ))}
        </div>

        {activeTab === 'breakfast' && (
          <div className="mt-12">
            <h3 className="text-center text-[#991B1B] font-display text-2xl font-bold mb-6">Kids Breakfast</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              <div className="menu-item bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-[#D4A853]/20">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-display text-xl font-bold text-[#1A1A1A]">Eggs on Toast with Bacon</h3>
                  <span className="text-[#991B1B] font-semibold text-lg ml-4 whitespace-nowrap">$14</span>
                </div>
              </div>
              <div className="menu-item bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-[#D4A853]/20">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-display text-xl font-bold text-[#1A1A1A]">Eggs on Toast with Hashbrown</h3>
                  <span className="text-[#991B1B] font-semibold text-lg ml-4 whitespace-nowrap">$14</span>
                </div>
              </div>
              <div className="menu-item bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-[#D4A853]/20">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-display text-xl font-bold text-[#1A1A1A]">Kids Waffles with Maple Syrup and Icecream</h3>
                  <span className="text-[#991B1B] font-semibold text-lg ml-4 whitespace-nowrap">$14</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'brunchlunch' && (
          <div className="mt-12">
            <h3 className="text-center text-[#991B1B] font-display text-2xl font-bold mb-6">Kids Lunch</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              <div className="menu-item bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-[#D4A853]/20">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-display text-xl font-bold text-[#1A1A1A]">Kids Fish and Chips</h3>
                  <span className="text-[#991B1B] font-semibold text-lg ml-4 whitespace-nowrap">$14</span>
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="mt-16 max-w-3xl mx-auto bg-white rounded-xl p-10 shadow-lg border border-[#D4A853]/30 text-center">
          <p className="text-[#2D2D2D] text-lg">
            <strong className="text-[#991B1B]">V</strong> = Vegetarian | <strong className="text-[#991B1B]">GF</strong> = Gluten Free
          </p>
          <p className="text-[#2D2D2D]/60 text-base mt-4">
            Please advise your server of any dietary requirements or allergies
          </p>
          <p className="text-[#991B1B] font-semibold text-lg mt-6">
            Functions and catering available
          </p>
          <p className="text-[#2D2D2D]/60 text-base mt-2">
            15% surcharge on public holidays
          </p>
        </div>
      </div>
    </section>
  );
}
