import React from 'react';
import { ShoppingBag, ArrowRight } from 'lucide-react';
import { CartItem } from '../types';

interface MobileStickyCartBarProps {
  cart: CartItem[];
  onOpenCart: () => void;
}

export const MobileStickyCartBar: React.FC<MobileStickyCartBarProps> = ({
  cart,
  onOpenCart,
}) => {
  const totalCount = cart.reduce((acc, item) => acc + item.qty, 0);
  const subtotal = cart.reduce((acc, item) => acc + item.price * item.qty, 0);

  if (totalCount === 0) return null;

  return (
    <aside
      aria-label="Mobile order summary bar"
      className="lg:hidden fixed bottom-0 left-0 right-0 z-40 p-3 bg-[#121413]/95 backdrop-blur-xl border-t border-[#e0c298]/30 shadow-2xl animate-in slide-in-from-bottom duration-300"
    >
      <div className="max-w-md mx-auto flex items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-[#e0c298] text-[#402d0f] flex items-center justify-center font-bold text-sm shadow">
            <ShoppingBag className="w-5 h-5" />
          </div>
          <div className="flex flex-col">
            <span className="text-xs font-bold text-[#e3e2e0]">
              {totalCount} item{totalCount !== 1 ? 's' : ''} added
            </span>
            <span className="text-sm font-serif text-[#e0c298] font-bold">
              ₹{subtotal}
            </span>
          </div>
        </div>

        <button
          id="mobile-sticky-view-order-btn"
          onClick={onOpenCart}
          className="bg-[#e0c298] text-[#402d0f] px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider flex items-center gap-2 shadow-lg active:scale-95 transition-transform"
        >
          <span>View Order</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </aside>
  );
};
