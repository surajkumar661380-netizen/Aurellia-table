import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

interface PromoBannerProps {
  onOrderNow: () => void;
}

export const PromoBanner: React.FC<PromoBannerProps> = ({ onOrderNow }) => {
  return (
    <section className="py-16 bg-[#121413]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-[#14291e] to-[#1e201f] p-8 md:p-12 border border-[#e0c298]/30 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Subtle decorative blur */}
          <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-[#e0c298]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="flex flex-col gap-4 max-w-xl relative z-10">
            <span className="text-xs font-bold text-[#e0c298] tracking-[0.2em] uppercase flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#e0c298]" />
              WEEKEND SIGNATURE OFFER
            </span>
            <h3 className="font-serif text-3xl sm:text-4xl text-[#e3e2e0] font-normal leading-tight">
              Get 20% OFF on Selected Chef's Specials
            </h3>
            <p className="text-sm sm:text-base text-[#c3c8be] font-sans">
              Indulge in our master artisan creations this weekend with an exclusive 20% savings. Valid for dine-in reservations and online delivery orders.
            </p>
          </div>

          <div className="relative z-10 shrink-0">
            <button
              onClick={onOrderNow}
              className="bg-[#e0c298] text-[#402d0f] px-7 py-3.5 rounded-xl text-xs font-bold uppercase tracking-wider inline-flex items-center gap-2 hover:opacity-90 transition-opacity shadow-lg cursor-pointer"
            >
              Order Now <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
