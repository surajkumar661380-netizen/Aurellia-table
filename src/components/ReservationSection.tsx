import React, { useState } from 'react';
import { Clock, Phone, CheckCircle, Calendar, Users, Sparkles } from 'lucide-react';
import { ReservationData } from '../types';

export const ReservationSection: React.FC = () => {
  const [formData, setFormData] = useState<ReservationData>({
    fullName: 'Suraj Kumar',
    phone: '+91 7520745815',
    date: new Date().toISOString().split('T')[0],
    time: '19:30',
    guests: '2',
    occasion: 'dining',
    email: 'surajkumar661380@gmail.com',
    specialRequests: 'Quiet romantic table by the window with anniversary arrangement.',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const resetForm = () => {
    setSubmitted(false);
  };

  return (
    <section id="reservation-section" className="py-24 bg-[#121413] relative scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Side: Context & Timings */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          <span className="text-xs font-semibold text-[#b2ceac] tracking-[0.2em] uppercase">
            Secure Your Experience
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#e3e2e0] font-normal leading-snug">
            Reserve Your Table at Aurelia Table
          </h2>
          <p className="text-sm sm:text-base text-[#c3c8be] leading-relaxed">
            Whether it is an intimate candlelit dinner for two or a grand celebration, we prepare your table with meticulous attention to detail and personalized hospitality.
          </p>

          <div className="flex flex-col gap-4 pt-2">
            <div className="flex items-center gap-3.5 bg-[#1e201f] p-3 rounded-xl border border-[#434841]/30">
              <Clock className="w-5 h-5 text-[#e0c298]" />
              <div>
                <span className="text-xs text-[#c3c8be] block">Lunch Service</span>
                <span className="text-sm font-semibold text-[#e3e2e0]">
                  12:00 PM – 3:30 PM
                </span>
              </div>
            </div>

            <div className="flex items-center gap-3.5 bg-[#1e201f] p-3 rounded-xl border border-[#434841]/30">
              <Clock className="w-5 h-5 text-[#e0c298]" />
              <div>
                <span className="text-xs text-[#c3c8be] block">Dinner Service</span>
                <span className="text-sm font-semibold text-[#e3e2e0]">
                  7:00 PM – 11:30 PM
                </span>
              </div>
            </div>

            <div className="flex items-center gap-3.5 bg-[#1e201f] p-3 rounded-xl border border-[#434841]/30">
              <Phone className="w-5 h-5 text-[#e0c298]" />
              <div>
                <span className="text-xs text-[#c3c8be] block">Concierge Desk</span>
                <a
                  href="tel:+917520745815"
                  className="text-sm font-semibold text-[#e3e2e0] hover:text-[#e0c298] transition-colors"
                >
                  +91 7520745815
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Reservation Card */}
        <div className="lg:col-span-7 bg-[#1e201f] p-8 md:p-10 rounded-3xl border border-[#e0c298]/20 shadow-2xl">
          {submitted ? (
            <div className="flex flex-col items-center justify-center text-center py-12 gap-4 animate-in zoom-in-95 duration-300">
              <div className="w-16 h-16 rounded-full bg-emerald-950/80 border border-emerald-500/40 flex items-center justify-center text-emerald-400">
                <CheckCircle className="w-10 h-10" />
              </div>
              <h3 className="font-serif text-2xl md:text-3xl text-[#e3e2e0] font-normal">
                Reservation Confirmed!
              </h3>
              <p className="text-sm text-[#c3c8be] max-w-md leading-relaxed">
                Thank you, <span className="text-[#e3e2e0] font-semibold">{formData.fullName}</span>. Your reservation for <span className="text-[#e0c298] font-semibold">{formData.guests} guests</span> on <span className="text-[#e3e2e0] font-semibold">{formData.date}</span> at <span className="text-[#e0c298] font-semibold">{formData.time}</span> has been confirmed.
              </p>
              <div className="text-xs text-[#c3c8be] bg-[#121413] px-4 py-2 rounded-lg border border-[#434841]/30">
                A confirmation SMS & email will be sent to {formData.email}.
              </div>
              <button
                onClick={resetForm}
                className="mt-4 bg-[#121413] px-6 py-2.5 rounded-xl text-xs text-[#e3e2e0] uppercase tracking-wider font-semibold border border-[#e0c298]/30 hover:border-[#e0c298] transition-colors cursor-pointer"
              >
                Make Another Reservation
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1">
                  <label className="text-xs font-bold text-[#c3c8be] uppercase">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={(e) =>
                      setFormData({ ...formData, fullName: e.target.value })
                    }
                    placeholder="Suraj Kumar"
                    className="bg-[#121413] text-[#e3e2e0] px-4 py-3 rounded-xl text-sm border border-[#434841]/40 focus:outline-none focus:border-[#e0c298]"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label className="text-xs font-bold text-[#c3c8be] uppercase">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    placeholder="+91 7520745815"
                    className="bg-[#121413] text-[#e3e2e0] px-4 py-3 rounded-xl text-sm border border-[#434841]/40 focus:outline-none focus:border-[#e0c298]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="flex flex-col gap-1">
                  <label className="text-xs font-bold text-[#c3c8be] uppercase">
                    Date *
                  </label>
                  <input
                    type="date"
                    required
                    value={formData.date}
                    onChange={(e) =>
                      setFormData({ ...formData, date: e.target.value })
                    }
                    className="bg-[#121413] text-[#e3e2e0] px-4 py-3 rounded-xl text-sm border border-[#434841]/40 focus:outline-none focus:border-[#e0c298]"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label className="text-xs font-bold text-[#c3c8be] uppercase">
                    Time *
                  </label>
                  <select
                    required
                    value={formData.time}
                    onChange={(e) =>
                      setFormData({ ...formData, time: e.target.value })
                    }
                    className="bg-[#121413] text-[#e3e2e0] px-4 py-3 rounded-xl text-sm border border-[#434841]/40 focus:outline-none focus:border-[#e0c298]"
                  >
                    <option value="12:30">12:30 PM (Lunch)</option>
                    <option value="13:30">01:30 PM (Lunch)</option>
                    <option value="14:30">02:30 PM (Lunch)</option>
                    <option value="19:30">07:30 PM (Dinner)</option>
                    <option value="20:30">08:30 PM (Dinner)</option>
                    <option value="21:30">09:30 PM (Dinner)</option>
                  </select>
                </div>
                <div className="flex flex-col gap-1">
                  <label className="text-xs font-bold text-[#c3c8be] uppercase">
                    Guests *
                  </label>
                  <select
                    required
                    value={formData.guests}
                    onChange={(e) =>
                      setFormData({ ...formData, guests: e.target.value })
                    }
                    className="bg-[#121413] text-[#e3e2e0] px-4 py-3 rounded-xl text-sm border border-[#434841]/40 focus:outline-none focus:border-[#e0c298]"
                  >
                    <option value="2">2 Guests (Intimate)</option>
                    <option value="4">4 Guests</option>
                    <option value="6">6 Guests</option>
                    <option value="8">8+ Guests (Private Area)</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1">
                  <label className="text-xs font-bold text-[#c3c8be] uppercase">
                    Occasion
                  </label>
                  <select
                    value={formData.occasion}
                    onChange={(e) =>
                      setFormData({ ...formData, occasion: e.target.value })
                    }
                    className="bg-[#121413] text-[#e3e2e0] px-4 py-3 rounded-xl text-sm border border-[#434841]/40 focus:outline-none focus:border-[#e0c298]"
                  >
                    <option value="dining">Casual Dining</option>
                    <option value="birthday">Birthday Celebration</option>
                    <option value="anniversary">Anniversary</option>
                    <option value="business">Business Dinner</option>
                  </select>
                </div>
                <div className="flex flex-col gap-1">
                  <label className="text-xs font-bold text-[#c3c8be] uppercase">
                    Email Address
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    placeholder="surajkumar661380@gmail.com"
                    className="bg-[#121413] text-[#e3e2e0] px-4 py-3 rounded-xl text-sm border border-[#434841]/40 focus:outline-none focus:border-[#e0c298]"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-xs font-bold text-[#c3c8be] uppercase">
                  Special Requests
                </label>
                <textarea
                  rows={3}
                  value={formData.specialRequests}
                  onChange={(e) =>
                    setFormData({ ...formData, specialRequests: e.target.value })
                  }
                  placeholder="Dietary restrictions, preferred table placement, flower arrangements..."
                  className="bg-[#121413] text-[#e3e2e0] px-4 py-3 rounded-xl text-sm border border-[#434841]/40 focus:outline-none focus:border-[#e0c298]"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#e0c298] text-[#402d0f] py-4 rounded-xl text-xs font-bold uppercase tracking-widest hover:opacity-90 transition-opacity shadow-lg cursor-pointer mt-2"
              >
                Confirm Reservation
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};
