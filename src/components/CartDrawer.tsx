import React from 'react';
import { ShoppingBag, X, Plus, Minus, Trash2, ArrowRight } from 'lucide-react';
import { CartItem } from '../types';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cart: CartItem[];
  onUpdateQty: (id: number, delta: number) => void;
  onRemoveItem: (id: number) => void;
  onProceedToCheckout: () => void;
  onExploreMenu: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  cart,
  onUpdateQty,
  onRemoveItem,
  onProceedToCheckout,
  onExploreMenu,
}) => {
  if (!isOpen) return null;

  const totalCount = cart.reduce((acc, item) => acc + item.qty, 0);
  const subtotal = cart.reduce((acc, item) => acc + item.price * item.qty, 0);
  const tax = Math.round(subtotal * 0.05); // 5% GST
  const deliveryFee = subtotal > 0 ? (subtotal >= 1000 ? 0 : 49) : 0;
  const grandTotal = subtotal > 0 ? subtotal + tax + deliveryFee : 0;

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      {/* Backdrop overlay */}
      <div
        className="fixed inset-0 bg-black/75 backdrop-blur-sm transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Drawer Panel */}
      <div
        id="order-summary-drawer"
        className="relative z-50 w-full max-w-md h-full bg-[#1e201f] text-[#e3e2e0] flex flex-col justify-between shadow-2xl border-l border-[#e0c298]/20 animate-in slide-in-from-right duration-300"
      >
        {/* Drawer Header */}
        <div className="p-6 border-b border-[#434841]/30 flex items-center justify-between bg-[#121413]">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-[#292a29] border border-[#e0c298]/30 flex items-center justify-center text-[#e0c298]">
              <ShoppingBag className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-serif text-xl text-[#e3e2e0] font-normal">
                Your Culinary Order
              </h3>
              <span className="text-xs text-[#c3c8be]">
                {totalCount} item{totalCount !== 1 ? 's' : ''} in cart
              </span>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-[#c3c8be] hover:text-[#e3e2e0] p-1.5 rounded-lg hover:bg-[#292a29] transition-colors"
            title="Close Cart"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Drawer Content */}
        <div className="flex-1 overflow-y-auto p-6 flex flex-col gap-4">
          {cart.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center py-16 px-4 gap-4 my-auto">
              <div className="w-16 h-16 rounded-full bg-[#292a29] border border-[#434841]/40 flex items-center justify-center text-[#c3c8be]">
                <ShoppingBag className="w-8 h-8 opacity-60" />
              </div>
              <h4 className="font-serif text-2xl text-[#e3e2e0]">
                Your order is empty
              </h4>
              <p className="text-sm text-[#c3c8be] max-w-xs leading-relaxed">
                You haven't added any delicacies yet. Explore our handcrafted menu to begin your culinary journey.
              </p>
              <button
                id="empty-cart-explore-btn"
                onClick={() => {
                  onClose();
                  onExploreMenu();
                }}
                className="mt-2 bg-[#e0c298] text-[#402d0f] px-6 py-3 rounded-xl text-xs font-bold uppercase tracking-wider hover:opacity-90 transition-opacity shadow-lg flex items-center gap-2 cursor-pointer"
              >
                <span>Explore Menu</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          ) : (
            <div className="flex flex-col gap-3.5">
              {cart.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center gap-3.5 bg-[#121413] p-3.5 rounded-2xl border border-[#434841]/30 hover:border-[#e0c298]/30 transition-colors"
                >
                  {/* Food Image */}
                  <img
                    src={item.image}
                    alt={item.name}
                    referrerPolicy="no-referrer"
                    className="w-16 h-16 rounded-xl object-cover shrink-0 border border-[#434841]/30 bg-[#1e201f]"
                  />

                  {/* Food Details */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-1.5 mb-0.5">
                      <span
                        className={`w-2 h-2 rounded-full ${
                          item.veg ? 'bg-emerald-400' : 'bg-rose-400'
                        }`}
                      />
                      <span className="text-[10px] uppercase tracking-wider text-[#b2ceac] truncate">
                        {item.category}
                      </span>
                    </div>

                    <h4 className="text-sm font-medium text-[#e3e2e0] truncate font-sans">
                      {item.name}
                    </h4>

                    <div className="text-xs text-[#e0c298] font-semibold mt-0.5">
                      ₹{item.price}{' '}
                      <span className="text-[#c3c8be] font-normal text-[11px]">
                        each
                      </span>
                    </div>
                  </div>

                  {/* Quantity and Controls */}
                  <div className="flex flex-col items-end gap-2 shrink-0">
                    <div className="flex items-center gap-2 bg-[#1e201f] px-2 py-1 rounded-xl border border-[#434841]/50">
                      <button
                        onClick={() => onUpdateQty(item.id, -1)}
                        className="w-5 h-5 flex items-center justify-center text-[#c3c8be] hover:text-[#e0c298] transition-colors"
                        title="Decrease quantity"
                      >
                        <Minus className="w-3.5 h-3.5" />
                      </button>
                      <span className="text-xs font-bold text-[#e3e2e0] min-w-[14px] text-center">
                        {item.qty}
                      </span>
                      <button
                        onClick={() => onUpdateQty(item.id, 1)}
                        className="w-5 h-5 flex items-center justify-center text-[#c3c8be] hover:text-[#e0c298] transition-colors"
                        title="Increase quantity"
                      >
                        <Plus className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold text-[#e3e2e0]">
                        ₹{item.price * item.qty}
                      </span>
                      <button
                        onClick={() => onRemoveItem(item.id)}
                        className="text-[#c3c8be] hover:text-rose-400 p-1 transition-colors"
                        title="Remove dish"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Drawer Footer & Dynamic Calculations */}
        {cart.length > 0 && (
          <div className="p-6 bg-[#121413] border-t border-[#434841]/40 flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <div className="flex justify-between text-xs text-[#c3c8be]">
                <span>Item Subtotal</span>
                <span className="font-semibold text-[#e3e2e0]">₹{subtotal}</span>
              </div>
              <div className="flex justify-between text-xs text-[#c3c8be]">
                <span>Taxes & GST (5%)</span>
                <span className="font-semibold text-[#e3e2e0]">₹{tax}</span>
              </div>
              <div className="flex justify-between text-xs text-[#c3c8be]">
                <span>Delivery Fee</span>
                <span>
                  {deliveryFee === 0 ? (
                    <span className="text-emerald-400 font-bold uppercase tracking-wider text-[11px]">
                      FREE
                    </span>
                  ) : (
                    `₹${deliveryFee}`
                  )}
                </span>
              </div>
              {subtotal < 1000 && (
                <div className="text-[10px] text-[#e0c298] italic">
                  Add ₹{1000 - subtotal} more for free priority delivery!
                </div>
              )}
              <div className="flex justify-between items-baseline text-base font-serif text-[#e3e2e0] pt-2 border-t border-[#434841]/40">
                <span className="font-sans font-medium text-sm">Grand Total</span>
                <span className="font-serif text-2xl font-semibold text-[#e0c298]">
                  ₹{grandTotal}
                </span>
              </div>
            </div>

            {/* Proceed to Checkout CTA */}
            <button
              id="proceed-to-checkout-btn"
              onClick={onProceedToCheckout}
              className="w-full bg-[#e0c298] text-[#402d0f] py-3.5 rounded-xl text-xs font-bold uppercase tracking-widest hover:opacity-90 transition-opacity shadow-lg flex items-center justify-center gap-2 cursor-pointer active:scale-95"
            >
              <span>Proceed to Checkout</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
