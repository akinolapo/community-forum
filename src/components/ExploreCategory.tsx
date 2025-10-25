'use client';

import React from 'react';

export default function ExploreCategory() {
  const categories = [
    {
      id: 1,
      title: 'Mobile App Development',
      description: 'iOS app development, android app development, hybrid app development...',
      posts: '12k posts',
      bgClass: 'category-mobile-dev',
      iconColor: 'text-blue-400'
    },
    {
      id: 2,
      title: 'UI/UX Design',
      description: 'UI/UX, prototyping, wireframing and creative workflows',
      posts: '8.2k posts',
      bgClass: 'category-uiux',
      iconColor: 'text-purple-400'
    },
    {
      id: 3,
      title: 'Programming & Tech',
      description: 'Software development, scripts and automation, AI & machine learning...',
      posts: '6.1k posts',
      bgClass: 'category-programming',
      iconColor: 'text-blue-400'
    },
    {
      id: 4,
      title: 'Social Media Design & Management',
      description: 'Instagram posts & stories, facebook ads design, social media banners...',
      posts: '12k posts',
      bgClass: 'category-social-media',
      iconColor: 'text-teal-400'
    },
    {
      id: 5,
      title: 'Graphics Design',
      description: 'Logo design, brand identity design, print design, brochure design...',
      posts: '12k posts',
      bgClass: 'category-graphics',
      iconColor: 'text-pink-400'
    },
    {
      id: 6,
      title: 'Video Editing & Animation',
      description: 'Video editing, motion graphics, 2D animation, 3D animation...',
      posts: '12k posts',
      bgClass: 'category-video',
      iconColor: 'text-blue-400'
    },
    {
      id: 7,
      title: 'Illustration & Digital Art',
      description: 'Character illustration, childrens book illustration, concept art, portrait illustration...',
      posts: '12k posts',
      bgClass: 'category-illustration',
      iconColor: 'text-orange-400'
    },
    {
      id: 8,
      title: 'Presentation Design',
      description: 'Pitch decks, investor presentation, company profiles, pitch dec design...',
      posts: '12k posts',
      bgClass: 'category-presentation',
      iconColor: 'text-teal-400'
    },
    {
      id: 9,
      title: 'Web Development',
      description: 'Front-end dev, back-end dev, full-stack dev, Web app dev...',
      posts: '12k posts',
      bgClass: 'category-web-dev',
      iconColor: 'text-purple-400'
    },
  ];

  return (
    <section className="bg-gray-50 py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Explore by Category
          </h2>
          <p className="text-gray-600 text-base sm:text-lg">
            Find discussions, resources, and opportunities in your field of expertise
          </p>
        </div>

        {/* Category Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => (
            <div
              key={category.id}
              className={`${category.bgClass} relative rounded-2xl overflow-hidden p-6 min-h-[200px] flex flex-col justify-between group hover:scale-105 transition-transform duration-300 cursor-pointer`}
            >
              {/* Decorative Pattern Overlay */}
              <div className="absolute inset-0 opacity-10 category-pattern"></div>

              {/* Content */}
              <div className="relative z-10">
                <h3 className="text-white text-xl font-bold mb-3">
                  {category.title}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed mb-4">
                  {category.description}
                </p>
              </div>

              {/* Post Count Badge */}
              <div className="relative z-10">
                <span className="inline-block bg-white text-gray-900 text-xs font-medium px-4 py-1.5 rounded-full">
                  {category.posts}
                </span>
              </div>

              {/* Decorative Icon (optional) */}
              <div className={`absolute top-4 right-4 ${category.iconColor} opacity-20`}>
                <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z" />
                  <path d="M15 7v2a4 4 0 01-4 4H9.828l-1.766 1.767c.28.149.599.233.938.233h2l3 3v-3h2a2 2 0 002-2V9a2 2 0 00-2-2h-1z" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}