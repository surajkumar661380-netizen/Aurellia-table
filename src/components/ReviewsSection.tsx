import React from 'react';
import { Star, Quote } from 'lucide-react';

export const ReviewsSection: React.FC = () => {
  const reviews = [
    {
      id: 1,
      name: 'Aarav Rastogi',
      role: 'Dined 3 days ago',
      avatar: 'AR',
      comment:
        'Aurelia Table redefined our expectation of fine dining. The Truffle Cream Pasta and the ambiance are simply unmatched. Truly felt like royalty from the moment we stepped in.',
      rating: 5,
    },
    {
      id: 2,
      name: 'Priya Sharma',
      role: 'Online Delivery Order',
      avatar: 'PS',
      comment:
        'Ordered online for a family gathering and the food arrived piping hot, beautifully packaged in sustainable containers, and tasted every bit as phenomenal as dining in!',
      rating: 5,
    },
    {
      id: 3,
      name: 'Vikram Kapoor',
      role: 'Anniversary Guest',
      avatar: 'VK',
      comment:
        'Celebrated our 5th wedding anniversary here. The concierge arranged an intimate secluded table with candlelight and complimentary dessert. Unforgettable hospitality!',
      rating: 5,
    },
  ];

  return (
    <section id="reviews" className="py-24 bg-[#121413] scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col gap-12">
        {/* Header & Overall Score */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <span className="text-xs font-semibold text-[#b2ceac] tracking-[0.2em] uppercase">
              Guest Testimonials
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#e3e2e0] mt-2 font-normal">
              What Our Guests Say
            </h2>
          </div>

          <div className="flex items-center gap-3.5 bg-[#1e201f] px-5 py-3 rounded-2xl border border-[#e0c298]/20 self-start md:self-auto">
            <div className="font-serif text-3xl text-[#b2ceac] font-medium">
              4.9
            </div>
            <div>
              <div className="flex text-[#e0c298] text-sm gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-[#e0c298]" />
                ))}
              </div>
              <div className="text-xs text-[#c3c8be] mt-0.5">
                Based on 2,500+ verified reviews
              </div>
            </div>
          </div>
        </div>

        {/* 3 Review Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((r) => (
            <div
              key={r.id}
              className="bg-[#1e201f] p-7 rounded-2xl border border-[#434841]/30 hover:border-[#e0c298]/30 transition-colors shadow-lg flex flex-col justify-between gap-6 relative"
            >
              <Quote className="w-8 h-8 text-[#e0c298]/10 absolute top-5 right-5 pointer-events-none" />

              <div className="flex flex-col gap-3.5">
                <div className="flex text-[#e0c298] gap-0.5">
                  {[...Array(r.rating)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-[#e0c298]" />
                  ))}
                </div>
                <p className="text-sm text-[#e3e2e0] italic leading-relaxed font-sans">
                  "{r.comment}"
                </p>
              </div>

              <div className="flex items-center gap-3.5 pt-4 border-t border-[#434841]/20">
                <div className="w-10 h-10 rounded-full bg-[#e0c298] text-[#402d0f] font-bold flex items-center justify-center text-xs">
                  {r.avatar}
                </div>
                <div>
                  <div className="text-xs font-bold text-[#e3e2e0]">
                    {r.name}
                  </div>
                  <div className="text-[11px] text-[#c3c8be]">{r.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
