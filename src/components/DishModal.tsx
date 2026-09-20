import React, { useState } from 'react';
import { X, Star, Clock, Flame, ShoppingBag, Plus, Minus, Check } from 'lucide-react';
import { MenuItem } from '../types';

interface DishModalProps {
  dish: MenuItem | null;
  onClose: () => void;
  onAddToCartWithQty: (dish: MenuItem, qty: number) => void;
}

export const DishModal: React.FC<DishModalProps> = ({
  dish,
  onClose,
  onAddToCartWithQty,
}) => {
  const [qty, setQty] = useState(1);
  const [added, setAdded] = useState(false);

  if (!dish) return null;

  const handleAdd = () => {
    onAddToCartWithQty(dish, qty);
    setAdded(true);
    setTimeout(() => {
      setAdded(false);
      onClose();
    }, 800);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/80 backdrop-blur-md"
        onClick={onClose}
      />

      {/* Modal Card */}
      <div className="relative z-50 bg-[#1e201f] text-[#e3e2e0] max-w-lg w-full rounded-3xl p-6 md:p-7 border border-[#e0c298]/30 shadow-2xl flex flex-col gap-5 max-h-[90vh] overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-8 h-8 rounded-full bg-[#121413]/80 hover:bg-[#121413] text-[#c3c8be] hover:text-[#e3e2e0] flex items-center justify-center transition-colors z-10"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Dish Hero Image */}
        <div className="relative aspect-video rounded-2xl overflow-hidden -mx-1 -mt-1 bg-[#121413] border border-[#434841]/30">
          <img
            src={dish.image}
            alt={dish.name}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover"
          />
          <div className="absolute top-3 left-3 flex gap-2">
            <span
              className={`px-2.5 py-0.5 rounded-md text-[11px] font-bold uppercase tracking-wider ${
                dish.veg
                  ? 'bg-emerald-950/90 text-emerald-300 border border-emerald-700/50'
                  : 'bg-rose-950/90 text-rose-300 border border-rose-700/50'
              }`}
            >
              {dish.veg ? 'Pure Veg' : 'Non-Vegetarian'}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="flex flex-col gap-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-[#b2ceac] tracking-widest uppercase">
              {dish.category}
            </span>
            <div className="flex items-center gap-1 text-[#e0c298] text-xs font-bold">
              <Star className="w-3.5 h-3.5 fill-[#e0c298]" /> {dish.rating} Rating
            </div>
          </div>

          <h3 className="font-serif text-2xl text-[#e3e2e0] font-normal leading-snug">
            {dish.name}
          </h3>

          <p className="text-sm text-[#c3c8be] leading-relaxed font-sans">
            {dish.desc}
          </p>

          {/* Details & Nutrition */}
          <div className="grid grid-cols-2 gap-3 py-1">
            <div className="bg-[#121413] p-3 rounded-xl border border-[#434841]/30 flex items-center gap-2.5">
              <Flame className="w-4 h-4 text-[#e0c298]" />
              <div>
                <span className="text-[10px] text-[#c3c8be] uppercase block">
                  Energy
                </span>
                <span className="text-xs font-semibold text-[#e3e2e0]">
                  {dish.calories}
                </span>
              </div>
            </div>
            <div className="bg-[#121413] p-3 rounded-xl border border-[#434841]/30 flex items-center gap-2.5">
              <Clock className="w-4 h-4 text-[#b2ceac]" />
              <div>
                <span className="text-[10px] text-[#c3c8be] uppercase block">
                  Prep Time
                </span>
                <span className="text-xs font-semibold text-[#e3e2e0]">
                  {dish.preparationTime || '15-20 mins'}
                </span>
              </div>
            </div>
          </div>

          {/* Ingredients & Allergens */}
          <div className="bg-[#121413] p-4 rounded-xl border border-[#434841]/30 flex flex-col gap-1.5">
            <span className="text-[11px] font-bold text-[#e0c298] uppercase tracking-wider">
              Ingredients & Notes
            </span>
            <p className="text-xs text-[#c3c8be] leading-relaxed">
              {dish.ingredients}
            </p>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="flex items-center justify-between pt-4 border-t border-[#434841]/40 mt-1">
          <div>
            <span className="text-[10px] text-[#c3c8be] uppercase block">
              Total Price
            </span>
            <span className="font-serif text-2xl font-semibold text-[#e0c298]">
              ₹{dish.price * qty}
            </span>
          </div>

          <div className="flex items-center gap-3">
            {/* Quantity Selector */}
            <div className="flex items-center gap-2 bg-[#121413] px-3 py-2 rounded-xl border border-[#434841]/50">
              <button
                onClick={() => setQty(Math.max(1, qty - 1))}
                className="text-[#c3c8be] hover:text-[#e0c298] transition-colors"
                title="Decrease"
              >
                <Minus className="w-3.5 h-3.5" />
              </button>
              <span className="text-xs font-bold text-[#e3e2e0] px-1.5 min-w-[16px] text-center">
                {qty}
              </span>
              <button
                onClick={() => setQty(qty + 1)}
                className="text-[#c3c8be] hover:text-[#e0c298] transition-colors"
                title="Increase"
              >
                <Plus className="w-3.5 h-3.5" />
              </button>
            </div>

            <button
              onClick={handleAdd}
              className="bg-[#e0c298] text-[#402d0f] px-5 py-3 rounded-xl text-xs font-bold uppercase tracking-wider hover:opacity-90 transition-all flex items-center gap-2 shadow-lg active:scale-95 cursor-pointer"
            >
              {added ? (
                <>
                  <Check className="w-4 h-4" />
                  <span>Added!</span>
                </>
              ) : (
                <>
                  <ShoppingBag className="w-4 h-4" />
                  <span>Add to Order</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
