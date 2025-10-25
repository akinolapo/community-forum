'use client';

import Image from 'next/image';
import React from 'react';

export default function FeaturedTalk() {
  const discussions = [
    {
      id: 1,
      category: 'Business',
      trending: true,
      title: 'How to price your freelance services in 2024',
      excerpt: 'A comprehensive guide to setting competitive rates while ensuring profitability...',
      author: {
        name: 'Sarah Chen',
        role: 'Business Consultant',
        avatar: '/images/avatar-1.svg'
      },
      stats: {
        views: 47,
        likes: 156,
        time: '2 hours ago'
      }
    },
    {
      id: 2,
      category: 'Tools',
      trending: false,
      title: 'Best tools for remote client collaborations',
      excerpt: 'Sharing my favorite tools and workflows for managing client projects remotely...',
      author: {
        name: 'Vivian Kane',
        role: 'Web Developer',
        avatar: '/images/avatar-2.svg'
      },
      stats: {
        views: 32,
        likes: 89,
        time: '4 hours ago'
      }
    },
    {
      id: 3,
      category: 'Client Relations',
      trending: true,
      title: 'Dealing with difficult clients: A survival guide',
      excerpt: 'Strategies for maintaining professionalism and protecting your mental health...',
      author: {
        name: 'Emma Thompson',
        role: 'UX Designer',
        avatar: '/images/avatar-3.svg'
      },
      stats: {
        views: 73,
        likes: 234,
        time: '6 hours ago'
      }
    },
    {
      id: 4,
      category: 'Finance',
      trending: false,
      title: 'Tax tips for freelancers: What you need to know',
      excerpt: 'Essential tax deductions and record-keeping practices for independent contractors...',
      author: {
        name: 'David Park',
        role: 'Financial Advisor',
        avatar: '/images/avatar-4.svg'
      },
      stats: {
        views: 28,
        likes: 67,
        time: '6 hours ago'
      }
    },
  ];

  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex items-start justify-between mb-8">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">
              Featured Discussions
            </h2>
            <p className="text-gray-600 text-base">
              Join the conversation on trending topics
            </p>
          </div>
          
          {/* Hot Topics Button */}
          <button className="hidden sm:flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z" clipRule="evenodd" />
            </svg>
            Hot Topics
          </button>
        </div>

        {/* Discussion Cards */}
        <div className="space-y-6">
          {discussions.map((discussion) => (
            <div
              key={discussion.id}
              className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg hover:border-gray-300 transition-all duration-300 cursor-pointer"
            >
              {/* Category and Trending Badge */}
              <div className="flex items-center gap-2 mb-4">
                <span className="inline-block px-3 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-md">
                  {discussion.category}
                </span>
                {discussion.trending && (
                  <span className="inline-flex items-center gap-1 px-3 py-1 bg-blue-50 text-blue-600 text-xs font-medium rounded-md border border-blue-200">
                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
                    </svg>
                    Trending
                  </span>
                )}
              </div>

              {/* Title and Excerpt */}
              <h3 className="text-xl font-bold text-gray-900 mb-2 hover:text-purple-600 transition-colors">
                {discussion.title}
              </h3>
              <p className="text-gray-600 text-sm mb-6">
                {discussion.excerpt}
              </p>

              {/* Author and Stats */}
              <div className="flex items-center justify-between">
                {/* Author Info */}
                <div className="flex items-center gap-3">
                  <Image 
                    src={discussion.author.avatar} 
                    alt={discussion.author.name}
                    width={40}
                    height={40}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div>
                    <p className="text-sm font-semibold text-gray-900">
                      {discussion.author.name}
                    </p>
                    <p className="text-xs text-gray-500">
                      {discussion.author.role}
                    </p>
                  </div>
                </div>

                {/* Stats */}
                <div className="flex items-center gap-4 text-sm text-gray-500">
                  {/* Views */}
                  <div className="flex items-center gap-1">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                    <span>{discussion.stats.views}</span>
                  </div>

                  {/* Likes */}
                  <div className="flex items-center gap-1">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                    <span>{discussion.stats.likes}</span>
                  </div>

                  {/* Time */}
                  <div className="flex items-center gap-1">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>{discussion.stats.time}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button (Mobile) */}
        <div className="mt-8 sm:hidden">
          <button className="w-full flex items-center justify-center gap-2 px-4 py-3 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z" clipRule="evenodd" />
            </svg>
            Hot Topics
          </button>
        </div>
      </div>
    </section>
  );
}