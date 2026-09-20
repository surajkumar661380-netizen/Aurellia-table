import React from 'react';
import { Star, Plus, Check } from 'lucide-react';
import { MenuItem, CartItem } from '../types';

interface ChefSpecialsProps {
  items: MenuItem[];
  cart: CartItem[];
  onAddToCart: (item: MenuItem) => void;
  onSelectDish: (item: MenuItem) => void;
}

export const ChefSpecials: React.FC<ChefSpecialsProps> = ({
  items,
  cart,
  onAddToCart,
  onSelectDish,
}) => {
  // Grab the 4 designated chef's special items
  const specials = items.filter((i) => i.chefSpecial).slice(0, 4);

  return (
    <section className="py-20 bg-[#1a1c1b]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col gap-12">
        <div className="text-center max-w-2xl mx-auto flex flex-col gap-3">
          <span className="text-xs font-semibold text-[#b2ceac] tracking-[0.2em] uppercase">
            Curated Excellence
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#e3e2e0] font-normal">
            Chef's Special Favorites
          </h2>
          <p className="text-sm sm:text-base text-[#c3c8be]">
            The absolute pinnacle of our culinary artistry, handpicked by Executive Chef Marcus.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {specials.map((dish) => {
            const cartItem = cart.find((ci) => ci.id === dish.id);
            const inCartCount = cartItem?.qty || 0;

            return (
              <div
                key={dish.id}
                className="bg-[#121413] rounded-2xl overflow-hidden border border-[#e0c298]/20 shadow-lg flex flex-col justify-between group hover:border-[#e0c298]/50 transition-colors"
              >
                {/* Image Container */}
                <div
                  className="relative aspect-[4/3] overflow-hidden cursor-pointer"
                  onClick={() => onSelectDish(dish)}
                >
                  <img
                    src={dish.image}
                    alt={dish.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-3 left-3 bg-[#e0c298] text-[#402d0f] text-[11px] font-bold px-2.5 py-1 rounded-lg uppercase tracking-wider">
                    Chef's Pick
                  </span>
                  <div className="absolute top-3 right-3 bg-[#121413]/80 backdrop-blur-sm px-2 py-1 rounded-md flex items-center gap-1 text-[11px] font-semibold text-[#e0c298]">
                    <Star className="w-3 h-3 fill-[#e0c298]" /> {dish.rating}
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 flex flex-col gap-3 flex-1 justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-[11px] font-bold text-[#b2ceac] uppercase tracking-wider">
                        {dish.category}
                      </span>
                      <span
                        className={`text-[10px] font-bold uppercase px-2 py-0.5 rounded ${
                          dish.veg
                            ? 'bg-emerald-950/80 text-emerald-300 border border-emerald-800/40'
                            : 'bg-rose-950/80 text-rose-300 border border-rose-800/40'
                        }`}
                      >
                        {dish.veg ? 'Veg' : 'Non-Veg'}
                      </span>
                    </div>

                    <h3
                      onClick={() => onSelectDish(dish)}
                      className="font-serif text-lg text-[#e3e2e0] font-normal hover:text-[#e0c298] transition-colors cursor-pointer line-clamp-1"
                    >
                      {dish.name}
                    </h3>
                    <p className="text-xs text-[#c3c8be] line-clamp-2 mt-1 leading-relaxed">
                      {dish.desc}
                    </p>
                  </div>

                  {/* Price & Add to Order CTA */}
                  <div className="flex items-center justify-between pt-4 border-t border-[#434841]/30 mt-2">
                    <div>
                      <span className="font-serif text-xl font-medium text-[#e3e2e0]">
                        ₹{dish.price}
                      </span>
                      <span className="block text-[10px] text-[#c3c8be]">
                        {dish.calories}
                      </span>
                    </div>

                    <button
                      onClick={() => onAddToCart(dish)}
                      className="bg-[#e0c298] text-[#402d0f] px-3.5 py-2 rounded-xl text-xs font-bold uppercase tracking-wider hover:opacity-90 transition-all flex items-center gap-1.5 shadow cursor-pointer active:scale-95"
                    >
                      {inCartCount > 0 ? (
                        <>
                          <Check className="w-3.5 h-3.5" />
                          <span>Added ({inCartCount})</span>
                        </>
                      ) : (
                        <>
                          <Plus className="w-3.5 h-3.5" />
                          <span>Add to Order</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
