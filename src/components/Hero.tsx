import React from 'react';
import { ArrowRight, CheckCircle, Star } from 'lucide-react';
import { HOTLINKED_IMAGES } from '../data/menuData';

interface HeroProps {
  onExploreMenu: () => void;
  onReserveTable: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreMenu, onReserveTable }) => {
  return (
    <section
      id="home"
      className="relative min-h-[860px] lg:min-h-[920px] flex items-center bg-[#121413] overflow-hidden pt-24 pb-16"
    >
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#b2ceac]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-[#e0c298]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        {/* Left Column Content */}
        <div className="lg:col-span-7 flex flex-col gap-6">
          <span className="text-xs font-semibold text-[#b2ceac] tracking-[0.2em] uppercase flex items-center gap-2">
            <span className="w-8 h-[1px] bg-[#b2ceac]" />
            GOOD FOOD. GREAT MOMENTS.
          </span>

          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#e3e2e0] leading-[1.15] font-normal">
            Experience Food That{' '}
            <span className="italic font-serif text-[#e0c298]">Feels Like Home</span>
          </h1>

          <p className="text-base sm:text-lg text-[#c3c8be] max-w-xl font-sans leading-relaxed">
            Welcome to Aurelia Table, where every ingredient tells a story, and every dish is crafted with quiet sophistication, passion, and uncompromising culinary art.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-3">
            <button
              onClick={onExploreMenu}
              className="bg-[#e0c298] text-[#402d0f] px-6 py-3.5 rounded-xl text-xs font-bold uppercase tracking-wider flex items-center gap-2 hover:opacity-90 transition-opacity shadow-lg cursor-pointer"
            >
              Explore Our Menu <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={onReserveTable}
              className="border border-[#e0c298]/40 text-[#e3e2e0] px-6 py-3.5 rounded-xl text-xs font-bold uppercase tracking-wider hover:bg-[#1e201f] transition-colors cursor-pointer"
            >
              Reserve a Table
            </button>
          </div>

          <div className="flex items-center gap-6 pt-6 border-t border-[#434841]/30">
            <div>
              <div className="font-serif text-2xl sm:text-3xl text-[#b2ceac] font-medium">
                2,500+
              </div>
              <div className="text-xs sm:text-sm text-[#c3c8be]">5-Star Reviews</div>
            </div>
            <div className="w-[1px] h-10 bg-[#434841]/40" />
            <div>
              <div className="font-serif text-2xl sm:text-3xl text-[#b2ceac] font-medium">
                150+
              </div>
              <div className="text-xs sm:text-sm text-[#c3c8be]">Signature Dishes</div>
            </div>
            <div className="w-[1px] h-10 bg-[#434841]/40" />
            <div>
              <div className="font-serif text-2xl sm:text-3xl text-[#b2ceac] font-medium">
                12+
              </div>
              <div className="text-xs sm:text-sm text-[#c3c8be]">Years of Excellence</div>
            </div>
          </div>
        </div>

        {/* Right Column Showcase Image */}
        <div className="lg:col-span-5 relative flex justify-center">
          <div className="relative w-full max-w-md aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-2xl border border-[#e0c298]/30 group">
            <img
              src={HOTLINKED_IMAGES.heroDuck}
              alt="Artisanal duck breast with blackberry reduction fine dining plate"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700"
            />
            {/* Floating Badges */}
            <div className="absolute top-6 left-6 bg-[#121413]/90 backdrop-blur-md px-3.5 py-2 rounded-xl border border-[#e0c298]/20 shadow-lg flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-[#e0c298]" />
              <span className="text-xs font-medium text-[#e3e2e0]">Chef's Signature</span>
            </div>
            <div className="absolute bottom-6 right-6 bg-[#121413]/90 backdrop-blur-md px-3.5 py-2 rounded-xl border border-[#e0c298]/20 shadow-lg flex items-center gap-2">
              <Star className="w-4 h-4 fill-[#b2ceac] text-[#b2ceac]" />
              <span className="text-xs font-semibold text-[#e3e2e0]">4.9 ★ Guest Rating</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
