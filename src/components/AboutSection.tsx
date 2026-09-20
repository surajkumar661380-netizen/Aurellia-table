import React from 'react';
import { ArrowRight } from 'lucide-react';
import { HOTLINKED_IMAGES } from '../data/menuData';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-[#121413] relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Gallery Image Grid */}
        <div className="lg:col-span-6 grid grid-cols-2 gap-4">
          <div className="w-full h-72 rounded-2xl overflow-hidden shadow-lg border border-[#434841]/30 group">
            <img
              src={HOTLINKED_IMAGES.aboutInterior}
              alt="Warm intimate dining room interior of Aurelia Table"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div className="w-full h-72 rounded-2xl overflow-hidden shadow-lg mt-8 border border-[#434841]/30 group">
            <img
              src={HOTLINKED_IMAGES.aboutChef}
              alt="Master chef carefully garnishing fine dining plate"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>

        {/* Narrative */}
        <div className="lg:col-span-6 flex flex-col gap-6">
          <span className="text-xs font-semibold text-[#b2ceac] tracking-[0.2em] uppercase">
            Our Story
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#e3e2e0] font-normal leading-tight">
            Where Passion Meets Plate
          </h2>
          <p className="text-sm sm:text-base text-[#c3c8be] leading-relaxed">
            Founded in 2012, Aurelia Table was born out of a profound desire to celebrate authentic flavors through a contemporary lens. We source our organic produce from local certified farmers every morning, ensuring that every dish pulses with vibrant life and uncompromising quality.
          </p>
          <p className="text-sm sm:text-base text-[#c3c8be] leading-relaxed">
            Our culinary team blends time-honored traditional techniques with bold modern innovation. Whether you are joining us for an intimate anniversary dinner or a celebratory family gathering, our hospitality is as warm and inviting as home.
          </p>
          <div className="pt-2">
            <a
              href="#menu-section"
              className="inline-flex items-center gap-2 text-[#e0c298] text-xs font-bold uppercase tracking-wider hover:underline group"
            >
              Discover Our Story{' '}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
