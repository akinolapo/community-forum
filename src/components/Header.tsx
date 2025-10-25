'use client';

import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="bg-white sticky top-0 z-50 pt-4">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="shrink-0">
            <Image src="/images/logo.png" width={145} height={42} alt='Logo'/>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex h-12 items-center gap-px px-10">
            <Link href="#find-jobs" className="text-gray-700 hover:text-gray-900 text-[15px] transition-colors menu-link">
              Find Jobs
            </Link>
            <Link href="#work-history" className="text-gray-700 hover:text-gray-900 text-[15px] transition-colors menu-link">
              Work History
            </Link>
            <Link href="#saved-jobs" className="text-gray-700 hover:text-gray-900 text-[15px] transition-colors menu-link">
              Saved Jobs
            </Link>
            <Link href="#messages" className="text-gray-700 hover:text-gray-900 text-[15px] transition-colors menu-link">
              Messages
            </Link>
            <Link href="#community" className="text-[#F05658] text-[15px] font-medium transition-colors menu-link">
              Community
            </Link>
          </div>

          {/* Right side icons */}
          <div className="flex items-center space-x-3">
            {/* Notification Bell Icon */}
            <button 
              className="p-2 text-gray-600 hover:text-gray-900 transition-colors relative border-2 border-gray-300 rounded-full"
              aria-label="Notifications"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
              </svg>
            </button>

            {/* User Profile Image */}
            <button 
              className="w-10 h-10 rounded-full overflow-hidden border-2 border-gray-200 hover:border-gray-300 transition-colors"
              aria-label="User profile"
            >
              <Image
                src="/images/profile.svg" 
                alt="User profile"
                width={40}
                height={40} 
                className="w-full h-full object-cover bg-gray-200"
              />
            </button>

            {/* Mobile menu button */}
            <button 
              className="md:hidden p-2 text-gray-600 hover:text-gray-900 transition-colors"
              onClick={toggleMobileMenu}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden pb-4 pt-2 space-y-2 animate-fadeIn">
            <a 
              href="#find-jobs" 
              className="block px-3 py-2 text-gray-700 hover:bg-gray-50 rounded-md transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Find Jobs
            </a>
            <a 
              href="#work-history" 
              className="block px-3 py-2 text-gray-700 hover:bg-gray-50 rounded-md transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Work History
            </a>
            <a 
              href="#saved-jobs" 
              className="block px-3 py-2 text-gray-700 hover:bg-gray-50 rounded-md transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Saved Jobs
            </a>
            <a 
              href="#messages" 
              className="block px-3 py-2 text-gray-700 hover:bg-gray-50 rounded-md transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Messages
            </a>
            <a 
              href="#community" 
              className="block px-3 py-2 text-[#F05658] hover:bg-pink-50 rounded-md font-medium transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Community
            </a>
          </div>
        )}
      </nav>
    </header>
  );
}