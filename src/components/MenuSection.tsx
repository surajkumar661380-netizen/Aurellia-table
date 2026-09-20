import React, { useState, useMemo } from 'react';
import { Search, Star, Heart, Plus, Check, SlidersHorizontal } from 'lucide-react';
import { MenuItem, CartItem } from '../types';
import { CATEGORIES } from '../data/menuData';

interface MenuSectionProps {
  items: MenuItem[];
  cart: CartItem[];
  onAddToCart: (item: MenuItem) => void;
  onSelectDish: (item: MenuItem) => void;
}

export const MenuSection: React.FC<MenuSectionProps> = ({
  items,
  cart,
  onAddToCart,
  onSelectDish,
}) => {
  const [selectedCategory, setSelectedCategory] = useState('ALL');
  const [searchQuery, setSearchQuery] = useState('');
  const [vegOnly, setVegOnly] = useState(false);
  const [popularOnly, setPopularOnly] = useState(false);
  const [sortBy, setSortBy] = useState('default');
  const [favorites, setFavorites] = useState<number[]>([]);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const toggleFavorite = (e: React.MouseEvent, id: number, name: string) => {
    e.stopPropagation();
    setFavorites((prev) => {
      const isFav = prev.includes(id);
      const next = isFav ? prev.filter((item) => item !== id) : [...prev, id];
      setToastMessage(isFav ? `Removed ${name} from favorites` : `Added ${name} to favorites`);
      setTimeout(() => setToastMessage(null), 2500);
      return next;
    });
  };

  const filteredItems = useMemo(() => {
    return items
      .filter((item) => {
        // Category filter
        if (selectedCategory === "CHEF'S SPECIAL") {
          if (!item.chefSpecial) return false;
        } else if (selectedCategory !== 'ALL' && item.category !== selectedCategory) {
          return false;
        }

        // Search query filter
        if (searchQuery.trim()) {
          const query = searchQuery.toLowerCase();
          const matchName = item.name.toLowerCase().includes(query);
          const matchDesc = item.desc.toLowerCase().includes(query);
          const matchIng = item.ingredients.toLowerCase().includes(query);
          const matchCat = item.category.toLowerCase().includes(query);
          if (!matchName && !matchDesc && !matchIng && !matchCat) return false;
        }

        // Veg filter
        if (vegOnly && !item.veg) return false;

        // Popular filter
        if (popularOnly && !item.popular) return false;

        return true;
      })
      .sort((a, b) => {
        if (sortBy === 'price-low') return a.price - b.price;
        if (sortBy === 'price-high') return b.price - a.price;
        if (sortBy === 'rating') return b.rating - a.rating;
        return a.id - b.id;
      });
  }, [items, selectedCategory, searchQuery, vegOnly, popularOnly, sortBy]);

  return (
    <section id="menu-section" className="py-24 bg-[#0d0e0e] relative scroll-mt-20">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed top-24 right-6 z-50 bg-[#e0c298] text-[#121413] px-4 py-2.5 rounded-xl shadow-2xl text-xs font-bold uppercase tracking-wider flex items-center gap-2 border border-[#402d0f]/20 transition-all">
          <Heart className="w-4 h-4 fill-[#121413]" />
          {toastMessage}
        </div>
      )}

      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col gap-10">
        {/* Title and Search Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <span className="text-xs font-semibold text-[#b2ceac] tracking-[0.2em] uppercase">
              Culinary Masterpieces
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#e3e2e0] mt-2 font-normal">
              Explore Our Menu
            </h2>
          </div>

          {/* Search Bar */}
          <div className="relative w-full md:w-80">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-[#c3c8be]" />
            <input
              type="text"
              id="menu-search-input"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search dishes, ingredients..."
              className="w-full bg-[#1e201f] text-[#e3e2e0] pl-10 pr-4 py-2.5 rounded-xl text-sm border border-[#434841]/40 focus:outline-none focus:border-[#e0c298] placeholder-[#c3c8be]/50 transition-colors"
            />
          </div>
        </div>

        {/* Filters & Toggles */}
        <div className="flex flex-col gap-5">
          {/* Category Pills (Horizontal Scroll) */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {CATEGORIES.map((cat) => {
              const isActive = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider whitespace-nowrap transition-all cursor-pointer ${
                    isActive
                      ? 'bg-[#e0c298] text-[#402d0f] shadow'
                      : 'bg-[#1e201f] text-[#c3c8be] hover:text-[#e3e2e0] hover:bg-[#292a29] border border-[#434841]/30'
                  }`}
                >
                  {cat === 'ALL' ? 'All Dishes' : cat}
                </button>
              );
            })}
          </div>

          {/* Secondary Filters (Veg, Popular, Sort) */}
          <div className="flex flex-wrap items-center justify-between gap-4 pt-2 border-t border-[#434841]/20">
            <div className="text-xs text-[#c3c8be]">
              Showing <span className="text-[#e0c298] font-bold">{filteredItems.length}</span> delicacies
            </div>

            <div className="flex flex-wrap items-center gap-3">
              {/* Veg Only Toggle */}
              <button
                onClick={() => setVegOnly(!vegOnly)}
                className={`px-3 py-1.5 rounded-lg border text-xs font-medium transition-colors flex items-center gap-2 cursor-pointer ${
                  vegOnly
                    ? 'border-emerald-500 text-emerald-400 bg-emerald-950/30'
                    : 'border-[#434841]/40 text-[#c3c8be] hover:border-[#e0c298]'
                }`}
              >
                <span
                  className={`w-2 h-2 rounded-full ${
                    vegOnly ? 'bg-emerald-400' : 'bg-[#c3c8be]'
                  }`}
                />
                Veg Only
              </button>

              {/* Popular Filter */}
              <button
                onClick={() => setPopularOnly(!popularOnly)}
                className={`px-3 py-1.5 rounded-lg border text-xs font-medium transition-colors flex items-center gap-1.5 cursor-pointer ${
                  popularOnly
                    ? 'border-[#e0c298] text-[#e0c298] bg-[#e0c298]/10'
                    : 'border-[#434841]/40 text-[#c3c8be] hover:border-[#e0c298]'
                }`}
              >
                <Star
                  className={`w-3.5 h-3.5 ${
                    popularOnly ? 'fill-[#e0c298] text-[#e0c298]' : 'text-[#c3c8be]'
                  }`}
                />
                Popular
              </button>

              {/* Sort Selector */}
              <div className="flex items-center gap-1.5 bg-[#1e201f] border border-[#434841]/40 rounded-lg px-2.5 py-1">
                <SlidersHorizontal className="w-3.5 h-3.5 text-[#c3c8be]" />
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="bg-transparent text-[#e3e2e0] text-xs focus:outline-none cursor-pointer py-0.5"
                >
                  <option value="default" className="bg-[#1e201f]">
                    Sort: Featured
                  </option>
                  <option value="price-low" className="bg-[#1e201f]">
                    Price: Low to High
                  </option>
                  <option value="price-high" className="bg-[#1e201f]">
                    Price: High to Low
                  </option>
                  <option value="rating" className="bg-[#1e201f]">
                    Highest Rated
                  </option>
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* Menu Items Grid */}
        {filteredItems.length === 0 ? (
          <div className="py-20 text-center flex flex-col items-center gap-3">
            <p className="text-base text-[#c3c8be]">
              No dishes found matching your current search or filter criteria.
            </p>
            <button
              onClick={() => {
                setSelectedCategory('ALL');
                setSearchQuery('');
                setVegOnly(false);
                setPopularOnly(false);
                setSortBy('default');
              }}
              className="mt-2 text-xs uppercase tracking-wider text-[#e0c298] underline hover:opacity-80"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((dish) => {
              const isFav = favorites.includes(dish.id);
              const cartItem = cart.find((ci) => ci.id === dish.id);
              const inCartCount = cartItem?.qty || 0;

              return (
                <div
                  key={dish.id}
                  className="bg-[#121413] rounded-2xl overflow-hidden border border-[#434841]/30 hover:border-[#e0c298]/40 shadow-lg flex flex-col justify-between group transition-all"
                >
                  {/* Dish Thumbnail */}
                  <div
                    className="relative aspect-[4/3] overflow-hidden cursor-pointer bg-[#1e201f]"
                    onClick={() => onSelectDish(dish)}
                  >
                    <img
                      src={dish.image}
                      alt={dish.name}
                      referrerPolicy="no-referrer"
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />

                    {/* Badge Strip */}
                    <div className="absolute top-3 left-3 flex items-center gap-2">
                      <span
                        className={`px-2.5 py-0.5 rounded-md text-[11px] font-bold uppercase tracking-wider shadow-md ${
                          dish.veg
                            ? 'bg-emerald-950/90 text-emerald-300 border border-emerald-700/50'
                            : 'bg-rose-950/90 text-rose-300 border border-rose-700/50'
                        }`}
                      >
                        {dish.veg ? 'Veg' : 'Non-Veg'}
                      </span>
                      {dish.popular && (
                        <span className="bg-[#e0c298] text-[#402d0f] px-2 py-0.5 rounded-md text-[10px] font-bold uppercase tracking-wider shadow-md">
                          Popular
                        </span>
                      )}
                    </div>

                    {/* Favorite Button */}
                    <button
                      onClick={(e) => toggleFavorite(e, dish.id, dish.name)}
                      className="absolute top-3 right-3 w-8 h-8 rounded-full bg-[#121413]/80 backdrop-blur-md flex items-center justify-center text-[#e3e2e0] hover:text-[#e0c298] transition-colors"
                      title={isFav ? 'Remove from favorites' : 'Add to favorites'}
                    >
                      <Heart
                        className={`w-4 h-4 ${
                          isFav ? 'fill-rose-500 text-rose-500' : ''
                        }`}
                      />
                    </button>
                  </div>

                  {/* Card Body */}
                  <div className="p-6 flex flex-col gap-3 flex-1 justify-between">
                    <div>
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="text-[11px] font-bold text-[#b2ceac] uppercase tracking-wider">
                          {dish.category}
                        </span>
                        <span className="text-xs text-[#e0c298] flex items-center gap-1 font-semibold">
                          <Star className="w-3.5 h-3.5 fill-[#e0c298]" /> {dish.rating}
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

                    {/* Card Footer: Price & Add to Order */}
                    <div className="flex items-center justify-between pt-4 border-t border-[#434841]/20 mt-2">
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
                        className="bg-[#e0c298] text-[#402d0f] px-4 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider hover:opacity-90 transition-all flex items-center gap-1.5 shadow-md active:scale-95 cursor-pointer"
                      >
                        {inCartCount > 0 ? (
                          <>
                            <Check className="w-3.5 h-3.5" />
                            <span>In Order ({inCartCount})</span>
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
        )}
      </div>
    </section>
  );
};
