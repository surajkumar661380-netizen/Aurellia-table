import React, { useState } from 'react';
import { X, CheckCircle, ShieldCheck, MapPin, Phone, Mail, User } from 'lucide-react';
import { CartItem } from '../types';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  cart: CartItem[];
  onOrderSuccess: () => void;
}

export const CheckoutModal: React.FC<CheckoutModalProps> = ({
  isOpen,
  onClose,
  cart,
  onOrderSuccess,
}) => {
  const [orderType, setOrderType] = useState<'Delivery' | 'Pickup' | 'Dine-in'>('Delivery');
  const [paymentMethod, setPaymentMethod] = useState<'UPI' | 'Card' | 'COD'>('UPI');
  const [fullName, setFullName] = useState('Suraj Kumar');
  const [phone, setPhone] = useState('+91 7520745815');
  const [email, setEmail] = useState('surajkumar661380@gmail.com');
  const [address, setAddress] = useState('Connaught Place, Central Delhi, 110001');
  const [confirmedOrderId, setConfirmedOrderId] = useState<string | null>(null);

  if (!isOpen) return null;

  const subtotal = cart.reduce((acc, item) => acc + item.price * item.qty, 0);
  const tax = Math.round(subtotal * 0.05);
  const deliveryFee = orderType === 'Delivery' ? (subtotal >= 1000 ? 0 : 49) : 0;
  const grandTotal = subtotal + tax + deliveryFee;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newOrderId = `AT-2026-${Math.floor(1000 + Math.random() * 9000)}`;
    setConfirmedOrderId(newOrderId);
  };

  const handleFinish = () => {
    setConfirmedOrderId(null);
    onOrderSuccess();
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/85 backdrop-blur-md"
        onClick={() => !confirmedOrderId && onClose()}
      />

      {/* Modal Container */}
      <div className="relative z-50 bg-[#1e201f] text-[#e3e2e0] max-w-xl w-full rounded-3xl p-6 md:p-8 border border-[#e0c298]/30 shadow-2xl my-8">
        {!confirmedOrderId && (
          <button
            onClick={onClose}
            className="absolute top-5 right-5 text-[#c3c8be] hover:text-[#e3e2e0] p-1.5 rounded-lg transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        )}

        {confirmedOrderId ? (
          /* Success State */
          <div className="flex flex-col items-center justify-center text-center py-6 gap-4 animate-in zoom-in-95 duration-300">
            <div className="w-16 h-16 rounded-full bg-emerald-950/80 border border-emerald-500/40 flex items-center justify-center text-emerald-400">
              <CheckCircle className="w-10 h-10" />
            </div>

            <h4 className="font-serif text-3xl text-[#e3e2e0] font-normal">
              Order Confirmed!
            </h4>

            <div className="bg-[#121413] px-5 py-2.5 rounded-xl border border-[#e0c298]/30 text-sm font-mono font-bold text-[#e0c298]">
              Order ID: {confirmedOrderId}
            </div>

            <p className="text-sm text-[#c3c8be] max-w-sm leading-relaxed">
              Thank you for dining with Aurelia Table. Your order has been dispatched to our master kitchen. Estimated preparation and delivery time is{' '}
              <span className="text-[#e0c298] font-semibold">25–35 mins</span>.
            </p>

            <div className="w-full bg-[#121413] p-4 rounded-xl border border-[#434841]/30 flex flex-col gap-2 mt-2 text-left text-xs text-[#c3c8be]">
              <div className="flex justify-between">
                <span>Type:</span>
                <span className="text-[#e3e2e0] font-medium">{orderType}</span>
              </div>
              <div className="flex justify-between">
                <span>Payment:</span>
                <span className="text-[#e3e2e0] font-medium">{paymentMethod} (Paid/Authorized)</span>
              </div>
              <div className="flex justify-between border-t border-[#434841]/30 pt-1">
                <span>Amount:</span>
                <span className="text-[#e0c298] font-bold text-sm">₹{grandTotal}</span>
              </div>
            </div>

            <button
              onClick={handleFinish}
              className="mt-4 bg-[#e0c298] text-[#402d0f] px-8 py-3 rounded-xl text-xs font-bold uppercase tracking-wider hover:opacity-90 transition-opacity cursor-pointer"
            >
              Close & Return
            </button>
          </div>
        ) : (
          /* Checkout Form */
          <div className="flex flex-col gap-5">
            <div>
              <span className="text-xs font-semibold text-[#b2ceac] tracking-widest uppercase">
                Aurelia Table Express
              </span>
              <h3 className="font-serif text-2xl md:text-3xl text-[#e3e2e0] font-normal">
                Secure Checkout
              </h3>
            </div>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              {/* Order Type Toggle */}
              <div className="flex gap-2">
                {(['Delivery', 'Pickup', 'Dine-in'] as const).map((type) => (
                  <label
                    key={type}
                    className={`flex-1 flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl border text-xs font-bold uppercase tracking-wider cursor-pointer transition-all ${
                      orderType === type
                        ? 'border-[#e0c298] bg-[#e0c298]/10 text-[#e0c298]'
                        : 'border-[#434841]/40 bg-[#121413] text-[#c3c8be] hover:border-[#e0c298]/40'
                    }`}
                  >
                    <input
                      type="radio"
                      name="order-type"
                      value={type}
                      checked={orderType === type}
                      onChange={() => setOrderType(type)}
                      className="sr-only"
                    />
                    {type}
                  </label>
                ))}
              </div>

              {/* Personal Info */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div className="flex flex-col gap-1">
                  <label className="text-[11px] font-bold text-[#c3c8be] uppercase">
                    Full Name *
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-[#c3c8be]" />
                    <input
                      type="text"
                      required
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="Suraj Kumar"
                      className="w-full bg-[#121413] text-[#e3e2e0] pl-10 pr-3 py-2.5 rounded-xl text-xs border border-[#434841]/40 focus:outline-none focus:border-[#e0c298]"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-1">
                  <label className="text-[11px] font-bold text-[#c3c8be] uppercase">
                    Phone Number *
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-[#c3c8be]" />
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+91 7520745815"
                      className="w-full bg-[#121413] text-[#e3e2e0] pl-10 pr-3 py-2.5 rounded-xl text-xs border border-[#434841]/40 focus:outline-none focus:border-[#e0c298]"
                    />
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="flex flex-col gap-1">
                <label className="text-[11px] font-bold text-[#c3c8be] uppercase">
                  Email Address *
                </label>
                <div className="relative">
                  <Mail className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-[#c3c8be]" />
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="surajkumar661380@gmail.com"
                    className="w-full bg-[#121413] text-[#e3e2e0] pl-10 pr-3 py-2.5 rounded-xl text-xs border border-[#434841]/40 focus:outline-none focus:border-[#e0c298]"
                  />
                </div>
              </div>

              {/* Address / Table No */}
              <div className="flex flex-col gap-1">
                <label className="text-[11px] font-bold text-[#c3c8be] uppercase">
                  {orderType === 'Dine-in'
                    ? 'Table Number or Special Instructions'
                    : 'Delivery Address & Landmark *'}
                </label>
                <div className="relative">
                  <MapPin className="w-4 h-4 absolute left-3.5 top-3 text-[#c3c8be]" />
                  <textarea
                    required
                    rows={2}
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    placeholder="Enter complete street address, landmark or table preference..."
                    className="w-full bg-[#121413] text-[#e3e2e0] pl-10 pr-3 py-2.5 rounded-xl text-xs border border-[#434841]/40 focus:outline-none focus:border-[#e0c298]"
                  />
                </div>
              </div>

              {/* Payment Method */}
              <div className="flex flex-col gap-1.5">
                <label className="text-[11px] font-bold text-[#c3c8be] uppercase">
                  Payment Method
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {(['UPI', 'Card', 'COD'] as const).map((method) => (
                    <label
                      key={method}
                      className={`flex items-center justify-center gap-2 py-2.5 rounded-xl border text-xs font-bold cursor-pointer transition-all ${
                        paymentMethod === method
                          ? 'border-[#e0c298] bg-[#e0c298]/10 text-[#e0c298]'
                          : 'border-[#434841]/40 bg-[#121413] text-[#c3c8be] hover:border-[#e0c298]/40'
                      }`}
                    >
                      <input
                        type="radio"
                        name="payment-method"
                        value={method}
                        checked={paymentMethod === method}
                        onChange={() => setPaymentMethod(method)}
                        className="sr-only"
                      />
                      {method}
                    </label>
                  ))}
                </div>
              </div>

              {/* Price summary badge */}
              <div className="bg-[#121413] p-3 rounded-xl border border-[#434841]/30 flex items-center justify-between text-xs">
                <span className="text-[#c3c8be]">Total Payable Amount:</span>
                <span className="font-serif text-lg font-bold text-[#e0c298]">
                  ₹{grandTotal}
                </span>
              </div>

              <button
                type="submit"
                className="w-full bg-[#e0c298] text-[#402d0f] py-3.5 rounded-xl text-xs font-bold uppercase tracking-widest hover:opacity-90 transition-opacity shadow-lg flex items-center justify-center gap-2 cursor-pointer active:scale-95"
              >
                <ShieldCheck className="w-4 h-4" />
                <span>Place Order Now (₹{grandTotal})</span>
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
