import React from 'react';

export const StatsStrip: React.FC = () => {
  const stats = [
    { value: '12+', label: 'Years Experience' },
    { value: '25K+', label: 'Happy Guests' },
    { value: '150+', label: 'Signature Dishes' },
    { value: '4.9', label: 'Average Rating' },
    { value: '5', label: 'Dining Zones' },
  ];

  return (
    <section className="py-16 bg-[#1a1c1b] border-y border-[#434841]/20">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-2 md:grid-cols-5 gap-8 text-center">
        {stats.map((item, idx) => (
          <div
            key={item.label}
            className={idx === 4 ? 'col-span-2 md:col-span-1' : ''}
          >
            <div className="font-serif text-3xl sm:text-4xl text-[#b2ceac] font-medium">
              {item.value}
            </div>
            <div className="text-xs text-[#c3c8be] uppercase tracking-wider mt-1.5 font-sans">
              {item.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
