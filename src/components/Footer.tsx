import React from 'react';
import { Globe, Camera, Mail } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#1a1c1b] py-16 border-t border-[#434841]/20">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
        {/* Brand Column */}
        <div className="lg:col-span-2 flex flex-col gap-3">
          <span className="font-serif text-2xl text-[#b2ceac] uppercase tracking-widest">
            Aurelia Table
          </span>
          <span className="text-xs text-[#c3c8be] tracking-widest uppercase">
            Kitchen • Dining • Bar
          </span>
          <p className="text-xs sm:text-sm text-[#c3c8be] max-w-sm mt-2 leading-relaxed">
            Where every bite becomes a memory. Crafting exquisite culinary experiences with quiet sophistication and farm-fresh ingredients since 2012.
          </p>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col gap-3">
          <span className="text-xs text-[#e3e2e0] uppercase tracking-wider font-bold">
            Quick Links
          </span>
          <a
            href="#menu-section"
            className="text-xs text-[#c3c8be] hover:text-[#e0c298] transition-colors"
          >
            Our Menu
          </a>
          <a
            href="#reservation-section"
            className="text-xs text-[#c3c8be] hover:text-[#e0c298] transition-colors"
          >
            Reservations
          </a>
          <a
            href="#about"
            className="text-xs text-[#c3c8be] hover:text-[#e0c298] transition-colors"
          >
            About Story
          </a>
          <a
            href="#gallery"
            className="text-xs text-[#c3c8be] hover:text-[#e0c298] transition-colors"
          >
            Gallery
          </a>
        </div>

        {/* Categories */}
        <div className="flex flex-col gap-3">
          <span className="text-xs text-[#e3e2e0] uppercase tracking-wider font-bold">
            Cuisines
          </span>
          <a
            href="#menu-section"
            className="text-xs text-[#c3c8be] hover:text-[#e0c298] transition-colors"
          >
            North Indian Specialties
          </a>
          <a
            href="#menu-section"
            className="text-xs text-[#c3c8be] hover:text-[#e0c298] transition-colors"
          >
            Continental & Italian
          </a>
          <a
            href="#menu-section"
            className="text-xs text-[#c3c8be] hover:text-[#e0c298] transition-colors"
          >
            Asian Wok & Grills
          </a>
          <a
            href="#menu-section"
            className="text-xs text-[#c3c8be] hover:text-[#e0c298] transition-colors"
          >
            Artisanal Desserts
          </a>
        </div>

        {/* Connect Column */}
        <div className="flex flex-col gap-3">
          <span className="text-xs text-[#e3e2e0] uppercase tracking-wider font-bold">
            Connect
          </span>
          <a
            href="https://www.linkedin.com/in/suraj-kumar-kushwaha-b74aa637a/"
            target="_blank"
            rel="noreferrer"
            className="text-xs text-[#c3c8be] hover:text-[#e0c298] transition-colors"
          >
            LinkedIn Profile
          </a>
          <a
            href="https://github.com/surajkumar661380-netizen"
            target="_blank"
            rel="noreferrer"
            className="text-xs text-[#c3c8be] hover:text-[#e0c298] transition-colors"
          >
            GitHub Repository
          </a>
          <a
            href="mailto:surajkumar661380@gmail.com"
            className="text-xs text-[#c3c8be] hover:text-[#e0c298] transition-colors"
          >
            Email Support
          </a>
          <a
            href="tel:+917520745815"
            className="text-xs text-[#c3c8be] hover:text-[#e0c298] transition-colors font-medium"
          >
            +91 7520745815
          </a>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-10 mt-10 border-t border-[#434841]/20 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-xs text-[#c3c8be]">
          © {new Date().getFullYear()} Aurelia Table. All rights reserved. Designed with quiet sophistication.
        </div>
        <div className="flex items-center gap-4 text-[#c3c8be]">
          <Globe className="w-4 h-4 cursor-pointer hover:text-[#b2ceac] transition-colors" />
          <Camera className="w-4 h-4 cursor-pointer hover:text-[#b2ceac] transition-colors" />
          <Mail className="w-4 h-4 cursor-pointer hover:text-[#b2ceac] transition-colors" />
        </div>
      </div>
    </footer>
  );
};
