import React, { useState } from 'react';
import { X, ZoomIn } from 'lucide-react';
import { HOTLINKED_IMAGES } from '../data/menuData';

export const GallerySection: React.FC = () => {
  const [selectedImg, setSelectedImg] = useState<{ src: string; caption: string } | null>(null);

  const galleryImages = [
    {
      src: HOTLINKED_IMAGES.gallery1Exterior,
      caption: 'Aurelia Table Grand Entrance at Twilight with glowing warm sconces',
    },
    {
      src: HOTLINKED_IMAGES.gallery2Cocktails,
      caption: 'Artisan handcrafted botanical cocktails garnished with dehydrated citrus',
    },
    {
      src: HOTLINKED_IMAGES.gallery3Booth,
      caption: 'Private dining salon with crystal stemware and intimate candlelight',
    },
    {
      src: HOTLINKED_IMAGES.gallery4LavaCake,
      caption: 'Warm Valrhona chocolate molten lava cake with artisan gelato',
    },
    {
      src: HOTLINKED_IMAGES.gallery5ChefDining,
      caption: 'Executive Chef presenting a tasting menu course to delighted guests',
    },
    {
      src: HOTLINKED_IMAGES.gallery6FreshHerbs,
      caption: 'Farm-fresh organic vegetables and seasonal herbs on prep station',
    },
    {
      src: HOTLINKED_IMAGES.gallery7Pizza,
      caption: 'Neapolitan 48-hr fermented wood-fired artisan pizza with buffalo mozzarella',
    },
    {
      src: HOTLINKED_IMAGES.gallery8Guests,
      caption: 'Guests enjoying evening dinner service and vintage wines',
    },
  ];

  return (
    <section id="gallery" className="py-24 bg-[#1a1c1b] scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col gap-12">
        <div className="text-center max-w-2xl mx-auto flex flex-col gap-3">
          <span className="text-xs font-semibold text-[#b2ceac] tracking-[0.2em] uppercase">
            Visual Journey
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#e3e2e0] font-normal">
            Restaurant Gallery
          </h2>
          <p className="text-sm sm:text-base text-[#c3c8be]">
            A glimpse into our luxurious dining rooms, exquisite dishes, and vibrant atmosphere.
          </p>
        </div>

        {/* 8 Photo Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {galleryImages.map((img, idx) => (
            <div
              key={idx}
              onClick={() => setSelectedImg(img)}
              className="relative w-full h-60 sm:h-64 rounded-2xl overflow-hidden shadow-md group cursor-pointer border border-[#434841]/30 hover:border-[#e0c298]/50 transition-all bg-[#121413]"
            >
              <img
                src={img.src}
                alt={img.caption}
                referrerPolicy="no-referrer"
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <div className="w-10 h-10 rounded-full bg-[#121413]/80 text-[#e0c298] flex items-center justify-center shadow">
                  <ZoomIn className="w-5 h-5" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImg && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setSelectedImg(null)}
        >
          <div
            className="relative max-w-4xl w-full max-h-[90vh] flex flex-col items-center gap-3"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedImg(null)}
              className="absolute -top-12 right-0 text-[#e3e2e0] hover:text-[#e0c298] p-2"
            >
              <X className="w-6 h-6" />
            </button>
            <img
              src={selectedImg.src}
              alt={selectedImg.caption}
              referrerPolicy="no-referrer"
              className="w-full max-h-[78vh] object-contain rounded-2xl shadow-2xl border border-[#e0c298]/30"
            />
            <p className="text-sm text-[#c3c8be] text-center font-sans">
              {selectedImg.caption}
            </p>
          </div>
        </div>
      )}
    </section>
  );
};
