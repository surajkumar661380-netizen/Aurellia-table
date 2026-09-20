import React from 'react';
import { Leaf, ChefHat, Utensils, Users, Heart } from 'lucide-react';

export const TrustStrip: React.FC = () => {
  const features = [
    {
      icon: Leaf,
      title: 'Fresh Ingredients',
      desc: 'Farm to table daily',
    },
    {
      icon: ChefHat,
      title: 'Expert Chefs',
      desc: 'Michelin trained masters',
    },
    {
      icon: Utensils,
      title: 'Signature Dining',
      desc: 'Unmatched ambiance',
    },
    {
      icon: Users,
      title: 'Perfect for Groups',
      desc: 'Private dining rooms',
    },
    {
      icon: Heart,
      title: 'Happy Guests',
      desc: '25k+ delighted diners',
    },
  ];

  return (
    <section className="bg-[#1a1c1b] py-12 border-y border-[#434841]/20">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-2 md:grid-cols-5 gap-8 text-center">
        {features.map((item, idx) => {
          const Icon = item.icon;
          return (
            <div
              key={item.title}
              className={`flex flex-col items-center gap-2.5 ${
                idx === 4 ? 'col-span-2 md:col-span-1' : ''
              }`}
            >
              <div className="w-12 h-12 rounded-2xl bg-[#1e201f] border border-[#e0c298]/20 flex items-center justify-center text-[#b2ceac]">
                <Icon className="w-6 h-6" />
              </div>
              <span className="text-xs font-bold text-[#e3e2e0] uppercase tracking-wider">
                {item.title}
              </span>
              <span className="text-xs text-[#c3c8be]">{item.desc}</span>
            </div>
          );
        })}
      </div>
    </section>
  );
};
