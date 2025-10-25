'use client';

import Image from 'next/image';
import React from 'react';

export default function Highlight() {
  // Placeholder images array
  const images = [
    { id: 1, alt: 'Community event 1' },
    { id: 2, alt: 'Community event 2' },
    { id: 3, alt: 'Community event 3' },
    { id: 4, alt: 'Community event 4' },
    { id: 5, alt: 'Community event 5' },
    { id: 6, alt: 'Community event 6' },
    { id: 7, alt: 'Community event 7' },
    { id: 8, alt: 'Community event 8' },
  ];

  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12">
          {/* Tag */}
          <div className="inline-block mb-4">
            <span className="text-purple-600 text-sm font-medium">
              Community Highlight
            </span>
          </div>

          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Snapshots from recent events.
          </h2>

          {/* Description */}
          <p className="text-gray-600 text-base sm:text-lg max-w-3xl">
            Catch a glimpse of the exciting moments and milestones our community members have been creating together!
          </p>
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {images.map((image) => (
            <div
              key={image.id}
              className="relative aspect-[4/3] rounded-lg overflow-hidden bg-gray-200 hover:opacity-90 transition-opacity"
            >
              <Image
                src={`/images/highlight${image.id}.jpg`}
                alt={image.alt}
                width={315}
                height={360}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}