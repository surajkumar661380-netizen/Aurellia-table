import React, { useState } from 'react';
import { Calendar, ShoppingBag, Menu as MenuIcon, X, User } from 'lucide-react';
import { CartItem } from '../types';

interface HeaderProps {
  cart: CartItem[];
  onOpenCart: () => void;
  onOpenReservation: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  cart,
  onOpenCart,
  onOpenReservation,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const totalItems = cart.reduce((sum, item) => sum + item.qty, 0);
  const subtotal = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Menu', href: '#menu-section' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Reservations', href: '#reservation-section' },
    { label: 'Order Online', href: '#menu-section' },
    { label: 'Reviews', href: '#reviews' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 w-full z-40 bg-[#121413]/85 backdrop-blur-xl border-b border-[#434841]/20 transition-all duration-300">
      <div className="h-20 max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#home" className="flex flex-col group">
          <span className="font-serif text-xl sm:text-2xl font-medium tracking-widest text-[#b2ceac] uppercase group-hover:text-[#e0c298] transition-colors">
            Aurelia Table
          </span>
          <span className="text-[10px] sm:text-xs text-[#c3c8be] tracking-[0.2em] uppercase font-sans">
            Kitchen • Dining • Bar
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-7">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm tracking-wide text-[#c3c8be] hover:text-[#e0c298] transition-colors font-medium"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Header Right Actions */}
        <div className="flex items-center gap-3 sm:gap-4">
          {/* View Order Button */}
          <button
            id="header-view-order-btn"
            onClick={onOpenCart}
            className="relative flex items-center gap-2 px-3.5 sm:px-4 py-2 rounded-xl bg-[#1e201f] text-[#e3e2e0] border border-[#e0c298]/30 hover:border-[#e0c298] hover:bg-[#292a29] transition-all group"
            title="View Order"
          >
            <ShoppingBag className="w-4 h-4 text-[#e0c298] group-hover:scale-110 transition-transform" />
            <span className="text-xs sm:text-sm font-semibold tracking-wide">
              View Order
            </span>
            {totalItems > 0 && (
              <span className="ml-1 px-1.5 py-0.5 text-[11px] font-bold rounded-full bg-[#e0c298] text-[#121413] min-w-[20px] text-center animate-pulse">
                {totalItems}
              </span>
            )}
            {subtotal > 0 && (
              <span className="hidden md:inline text-xs font-medium text-[#e0c298] border-l border-[#434841]/50 pl-2">
                ₹{subtotal}
              </span>
            )}
          </button>

          {/* Book a Table CTA */}
          <button
            onClick={onOpenReservation}
            className="hidden sm:flex items-center gap-2 bg-[#C5A880] text-[#121413] px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider hover:opacity-90 transition-opacity shadow-sm"
          >
            <Calendar className="w-4 h-4" />
            <span>Book a Table</span>
          </button>

          {/* User Profile Avatar Icon */}
          <div className="w-8 h-8 rounded-full bg-[#b2ceac] flex items-center justify-center text-[#1e361e] shadow-sm">
            <User className="w-4 h-4" />
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden text-[#e3e2e0] hover:text-[#e0c298] p-1.5 rounded-lg focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#121413]/95 border-b border-[#434841]/30 px-6 py-5 flex flex-col gap-3.5 backdrop-blur-2xl">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-base text-[#c3c8be] hover:text-[#e0c298] py-1 border-b border-[#292a29] transition-colors"
            >
              {link.label}
            </a>
          ))}
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenReservation();
            }}
            className="mt-2 flex items-center justify-center gap-2 bg-[#C5A880] text-[#121413] py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider"
          >
            <Calendar className="w-4 h-4" />
            Book a Table
          </button>
        </div>
      )}
    </header>
  );
};
