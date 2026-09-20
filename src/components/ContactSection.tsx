import React from 'react';
import { MapPin, Mail, Phone, ExternalLink } from 'lucide-react';
import { HOTLINKED_IMAGES } from '../data/menuData';

export const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-[#121413] scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Contact Info */}
        <div className="lg:col-span-6 flex flex-col gap-6">
          <span className="text-xs font-semibold text-[#b2ceac] tracking-[0.2em] uppercase">
            Get in Touch
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#e3e2e0] font-normal leading-snug">
            We Would Love to Hear From You
          </h2>
          <p className="text-sm sm:text-base text-[#c3c8be] leading-relaxed">
            Have questions about private dining reservations, anniversary celebrations, bespoke catering, or culinary dietary requirements? Reach out to our concierge team directly.
          </p>

          <div className="flex flex-col gap-4 pt-2">
            <div className="flex items-start gap-3.5">
              <div className="w-9 h-9 rounded-xl bg-[#1e201f] border border-[#e0c298]/20 flex items-center justify-center text-[#e0c298] shrink-0 mt-0.5">
                <MapPin className="w-4 h-4" />
              </div>
              <span className="text-sm text-[#e3e2e0] leading-relaxed">
                42, Gourmet Boulevard, Connaught Place, New Delhi 110001, India
              </span>
            </div>

            <div className="flex items-center gap-3.5">
              <div className="w-9 h-9 rounded-xl bg-[#1e201f] border border-[#e0c298]/20 flex items-center justify-center text-[#e0c298] shrink-0">
                <Mail className="w-4 h-4" />
              </div>
              <a
                href="mailto:surajkumar661380@gmail.com"
                className="text-sm text-[#e3e2e0] hover:text-[#e0c298] transition-colors"
              >
                surajkumar661380@gmail.com
              </a>
            </div>

            <div className="flex items-center gap-3.5">
              <div className="w-9 h-9 rounded-xl bg-[#1e201f] border border-[#e0c298]/20 flex items-center justify-center text-[#e0c298] shrink-0">
                <Phone className="w-4 h-4" />
              </div>
              <a
                href="tel:+917520745815"
                className="text-sm text-[#e3e2e0] hover:text-[#e0c298] transition-colors font-medium"
              >
                +91 7520745815
              </a>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3.5 pt-4">
            <a
              href="https://www.linkedin.com/in/suraj-kumar-kushwaha-b74aa637a/"
              target="_blank"
              rel="noreferrer"
              className="bg-[#1e201f] text-[#e3e2e0] px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider border border-[#e0c298]/30 hover:border-[#e0c298] hover:text-[#e0c298] transition-all inline-flex items-center gap-1.5"
            >
              <span>LinkedIn</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>

            <a
              href="https://github.com/surajkumar661380-netizen"
              target="_blank"
              rel="noreferrer"
              className="bg-[#1e201f] text-[#e3e2e0] px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider border border-[#e0c298]/30 hover:border-[#e0c298] hover:text-[#e0c298] transition-all inline-flex items-center gap-1.5"
            >
              <span>GitHub</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>

            <a
              href="tel:+917520745815"
              className="bg-[#e0c298] text-[#402d0f] px-6 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider hover:opacity-90 transition-opacity inline-flex items-center gap-1.5 shadow"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Call Now</span>
            </a>
          </div>
        </div>

        {/* Right: Location Map Visual */}
        <div className="lg:col-span-6 h-[380px] rounded-3xl overflow-hidden shadow-2xl border border-[#e0c298]/20 group relative">
          <img
            src={HOTLINKED_IMAGES.locationMap}
            alt="Aurelia Table Connaught Place New Delhi Location Map"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute bottom-4 left-4 bg-[#121413]/90 backdrop-blur-md px-4 py-2 rounded-xl border border-[#e0c298]/20 flex items-center gap-2">
            <MapPin className="w-4 h-4 text-[#e0c298]" />
            <span className="text-xs font-semibold text-[#e3e2e0]">
              Connaught Place, New Delhi
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
