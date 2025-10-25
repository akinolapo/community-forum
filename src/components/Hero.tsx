'use client';

import Image from 'next/image';
import React from 'react';

export default function Hero() {
  return (
    <section className="relative bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto pl-4 sm:px-8 lg:pl-10 py-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="relative z-10">
            {/* Tag */}
            <div className="inline-block mb-4">
              <span className="text-purple-600 text-sm font-medium">
                Designed for Collaborations
              </span>
            </div>

            {/* Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Become part of the world&apos;s leading{' '}
              <span className="text-[#F05658]">creative</span> community
            </h1>

            {/* Description */}
            <p className="text-gray-600 text-base sm:text-lg mb-8 max-w-xl">
              Connect with top-tier talent, showcase your creativity, and collaborate on groundbreaking ideas in a vibrant network of innovators
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <button className="bg-[#F05658] hover:bg-[#f3272b] text-white px-8 py-3 rounded-2xl font-medium transition-colors shadow-md hover:shadow-lg cursor-pointer">
                Join the Conversation
              </button>
              <button className="bg-white hover:bg-gray-50 text-gray-700 px-8 py-3 rounded-2xl font-medium border border-gray-300 transition-colors flex items-center justify-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Find Jobs
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 sm:gap-8">
              {/* Active Members */}
              <div className="text-center sm:text-left">
                <div className="inline-flex items-center justify-center w-10 h-10 bg-blue-100 rounded-full mb-2">
                  <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                  </svg>
                </div>
                <div className="text-2xl font-bold text-gray-900">25,000+</div>
                <div className="text-sm text-gray-600">Active Members</div>
              </div>

              {/* Discussions */}
              <div className="text-center sm:text-left">
                <div className="inline-flex items-center justify-center w-10 h-10 bg-green-100 rounded-full mb-2">
                  <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="text-2xl font-bold text-gray-900">150,000+</div>
                <div className="text-sm text-gray-600">Discussions</div>
              </div>

              {/* Job Posted */}
              <div className="text-center sm:text-left">
                <div className="inline-flex items-center justify-center w-10 h-10 bg-purple-100 rounded-full mb-2">
                  <svg className="w-5 h-5 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd" />
                    <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" />
                  </svg>
                </div>
                <div className="text-2xl font-bold text-gray-900">5,000+</div>
                <div className="text-sm text-gray-600">Job Posted</div>
              </div>
            </div>
          </div>

          {/* Right Image with Gradient Background */}
          <div className="relative lg:h-[750px] h-[550px] flex items-end justify-center lg:justify-end">
            {/* Gradient Blob Background */}
            <div className="absolute inset-0 bottom-0 right-0 w-full overflow-hidden pointer-events-none">
            <div className="absolute bottom-0 left-0 w-full h-[70%] rounded-tl-full lg:rounded-tl-ful bg-linear-to-t from-purple-400 via-purple-300 to-red-400 opacity-90"></div>
            </div>
            {/* Decorative Lines */}
            <div className="absolute top-8 left-12 lg:left-20">
              <Image 
                src="/images/decorative-lines.svg" 
                alt="Decorative lines"
                width={100}
                height={100} 
                // className="w-24 h-24 lg:w-32 lg:h-32 object-cover"
              />
            </div>

            {/* Woman Image */}
            <div className="relative z-10 w-full h-full flex items-end justify-center">
                <Image 
                  src="/images/woman.png" 
                  alt="Excited woman"
                  width={700}
                  height={1000} 
                  className="w-full h-full object-cover object-top"
                />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}