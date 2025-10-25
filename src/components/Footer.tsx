'use client';

import React, { useState } from 'react';
import { FaTwitter, FaFacebookF, FaTelegramPlane, FaInstagram, FaYoutube, FaLinkedinIn } from 'react-icons/fa';

export default function Footer() {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log('Subscribe email:', email);
  };

  const footerLinks = {
    categories: [
      'Graphic Design',
      'UI/UX Design',
      'Web Development',
      'Mobile App Development',
      'Programming and Tech',
      'Video Editing',
      'Animation',
      'Social Media Design',
      'Social Media Management',
      'Presentation Design',
      'Illustration and Digital Art',
    ],
    explore: [
      'How it works',
      'Help and Support',
      'Articles',
      'Community',
      'FAQs',
      'Marketplace',
    ],
    forFreelancers: [
      'Join as a freelancer',
      'Find Jobs',
      'Freelancing Tips',
      'Community Forums',
      'Success Stories',
    ],
    company: [
      'About Allnova',
      'Contact Us',
      'Privacy Policy',
      'Terms of Service',
    ],
    forClients: [
      'Hire Freelancers',
      'Shared Platform',
      'Post a job',
    ],
  };

  return (
    <footer className="bg-gray-50 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Newsletter Section */}
        <div className="mb-16 pb-12 border-b border-gray-200">
          <div className="block lg:flex lg:items-center lg:justify-between lg:gap-8">
            <div className="lg:max-w-2xl">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
              Become the smartest person in the room.
            </h2>
            <p className="text-gray-600 mb-6">
              Subscribe for practical insights and proven strategies straight to your inbox
            </p>
            </div>
            {/* Email Form */}
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3 lg:shrink-0 lg:min-w-[500px]">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter email"
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                required
              />
              <button
                type="submit"
                className="px-8 py-3 bg-[#F05658] hover:bg-[#f33c3f] text-white font-medium rounded-lg transition-colors whitespace-nowrap"
              >
                Unlock Insights
              </button>
            </form>
          </div>
        </div>

        {/* Footer Links */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 mb-12">
          {/* Categories */}
          <div>
            <h3 className="text-gray-900 font-semibold mb-4">Categories</h3>
            <ul className="space-y-3">
              {footerLinks.categories.map((link, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-600 hover:text-gray-900 text-sm transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Explore */}
          <div>
            <h3 className="text-gray-900 font-semibold mb-4">Explore</h3>
            <ul className="space-y-3">
              {footerLinks.explore.map((link, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-600 hover:text-gray-900 text-sm transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* For Freelancers */}
          <div>
            <h3 className="text-gray-900 font-semibold mb-4">For Freelancers</h3>
            <ul className="space-y-3">
              {footerLinks.forFreelancers.map((link, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-600 hover:text-gray-900 text-sm transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-gray-900 font-semibold mb-4">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-600 hover:text-gray-900 text-sm transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* For Clients */}
          <div>
            <h3 className="text-gray-900 font-semibold mb-4">For Clients</h3>
            <ul className="space-y-3">
              {footerLinks.forClients.map((link, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-600 hover:text-gray-900 text-sm transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section - Social Icons and Copyright */}
        <div className="flex flex-col sm:flex-row justify-between items-center pt-8 border-t border-gray-200 gap-4">
          {/* Social Icons */}
          <div className="flex items-center gap-4">
            <a
              href="#"
              className="text-gray-600 hover:text-gray-900 transition-colors"
              aria-label="Twitter"
            >
              <FaTwitter className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-gray-900 transition-colors"
              aria-label="Facebook"
            >
              <FaFacebookF className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-gray-900 transition-colors"
              aria-label="Telegram"
            >
              <FaTelegramPlane className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-gray-900 transition-colors"
              aria-label="Instagram"
            >
              <FaInstagram className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-gray-900 transition-colors"
              aria-label="YouTube"
            >
              <FaYoutube className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-gray-900 transition-colors"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn className="w-5 h-5" />
            </a>
          </div>

          {/* Copyright */}
          <p className="text-gray-500 text-sm">
            © 2024 Allnova. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}