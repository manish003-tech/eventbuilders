'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Events', icon: '🎉', color: 'from-cyan-400 to-blue-500' },
    { id: 'birthday', name: 'Birthday Parties', icon: '🎂', color: 'from-pink-400 to-rose-500' },
    { id: 'wedding', name: 'Weddings', icon: '💍', color: 'from-purple-400 to-pink-500' },
    { id: 'corporate', name: 'Corporate Events', icon: '🏢', color: 'from-blue-400 to-indigo-500' },
    { id: 'festival', name: 'Festivals', icon: '🎪', color: 'from-orange-400 to-red-500' },
    { id: 'party', name: 'Private Parties', icon: '🎊', color: 'from-green-400 to-emerald-500' }
  ];

  const galleryItems = [
    // Birthday Parties
    { id: 1, category: 'birthday', image: '/images/gallery/birthday-1.jpg', title: 'Kids Birthday Bash', description: 'Carnival games & fun' },
    { id: 2, category: 'birthday', image: '/images/gallery/birthday-2.jpg', title: 'Teen Party', description: 'Photo booth memories' },
    { id: 3, category: 'birthday', image: '/images/gallery/birthday-3.jpg', title: 'Sweet 16 Celebration', description: 'Dancing & entertainment' },
    { id: 4, category: 'birthday', image: '/images/gallery/birthday-4.jpg', title: 'Adult Birthday', description: 'Elegant setup' },
    
    // Weddings
    { id: 5, category: 'wedding', image: '/images/gallery/wedding-1.jpg', title: 'Garden Wedding', description: 'Romantic photo booth' },
    { id: 6, category: 'wedding', image: '/images/gallery/wedding-2.jpg', title: 'Beach Wedding', description: 'Sunset memories' },
    { id: 7, category: 'wedding', image: '/images/gallery/wedding-3.jpg', title: 'Elegant Reception', description: 'Premium entertainment' },
    { id: 8, category: 'wedding', image: '/images/gallery/wedding-4.jpg', title: 'Wedding Games', description: 'Guest engagement' },
    
    // Corporate Events
    { id: 9, category: 'corporate', image: '/images/gallery/corporate-1.jpg', title: 'Team Building', description: 'Interactive games' },
    { id: 10, category: 'corporate', image: '/images/gallery/corporate-2.jpg', title: 'Product Launch', description: 'Professional setup' },
    { id: 11, category: 'corporate', image: '/images/gallery/corporate-3.jpg', title: 'Annual Party', description: 'Employee celebration' },
    { id: 12, category: 'corporate', image: '/images/gallery/corporate-4.jpg', title: 'Conference Booth', description: 'Brand activation' },
    
    // Festivals
    { id: 13, category: 'festival', image: '/images/gallery/festival-1.jpg', title: 'Summer Festival', description: 'Outdoor fun' },
    { id: 14, category: 'festival', image: '/images/gallery/festival-2.jpg', title: 'College Fest', description: 'Student engagement' },
    { id: 15, category: 'festival', image: '/images/gallery/festival-3.jpg', title: 'Community Event', description: 'Family activities' },
    { id: 16, category: 'festival', image: '/images/gallery/festival-4.jpg', title: 'Music Festival', description: 'Entertainment zone' },
    
    // Private Parties
    { id: 17, category: 'party', image: '/images/gallery/party-1.jpg', title: 'House Party', description: 'Intimate celebration' },
    { id: 18, category: 'party', image: '/images/gallery/party-2.jpg', title: 'Graduation Party', description: 'Achievement celebration' },
    { id: 19, category: 'party', image: '/images/gallery/party-3.jpg', title: 'Anniversary', description: 'Milestone moments' },
    { id: 20, category: 'party', image: '/images/gallery/party-4.jpg', title: 'Holiday Party', description: 'Festive fun' }
  ];

  const filteredItems = activeCategory === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-dark via-charcoal to-dark">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-8 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/30 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Page Title */}
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
              <span className="text-white">Event </span>
              <span 
                className="text-cyan-400 font-black"
                style={{
                  textShadow: `
                    0 0 10px #22d3ee,
                    0 0 20px #22d3ee,
                    0 0 40px #0ea5e9,
                    0 0 60px #0ea5e9
                  `
                }}
              >
                Gallery
              </span>
            </h1>
            <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto">
              Explore our portfolio of unforgettable events and celebrations
            </p>
            <div className="w-32 h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent mx-auto mt-6"></div>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`group relative px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'scale-105'
                    : 'hover:scale-105'
                }`}
              >
                {/* Glow effect */}
                <div className={`absolute inset-0 bg-gradient-to-r ${category.color} rounded-xl blur-md opacity-${activeCategory === category.id ? '75' : '0'} group-hover:opacity-75 transition-all duration-300`}></div>
                
                {/* Button content */}
                <div className={`relative bg-gradient-to-r ${
                  activeCategory === category.id 
                    ? category.color 
                    : 'from-white/5 to-white/5'
                } backdrop-blur-sm px-6 py-3 rounded-xl border ${
                  activeCategory === category.id
                    ? 'border-white/30'
                    : 'border-white/10'
                } flex items-center gap-2 transition-all duration-300`}>
                  <span className="text-2xl">{category.icon}</span>
                  <span className={`${
                    activeCategory === category.id ? 'text-white' : 'text-gray-300'
                  }`}>
                    {category.name}
                  </span>
                  
                  {/* Active indicator */}
                  {activeCategory === category.id && (
                    <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
                  )}
                </div>
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredItems.map((item, index) => (
              <div
                key={item.id}
                className="group relative"
                style={{
                  animation: `fadeInUp 0.5s ease-out ${index * 0.05}s both`
                }}
              >
                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                
                {/* Image card */}
                <div className="relative bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 overflow-hidden group-hover:border-cyan-500/50 transition-all duration-500 h-full">
                  {/* Image container */}
                  <div className="relative aspect-square overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    
                    {/* Overlay gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    {/* Category badge */}
                    <div className="absolute top-3 right-3">
                      <div className="bg-black/50 backdrop-blur-md px-3 py-1 rounded-full border border-white/20 flex items-center gap-1">
                        <span className="text-sm">
                          {categories.find(c => c.id === item.category)?.icon}
                        </span>
                      </div>
                    </div>

                    {/* Hover content */}
                    <div className="absolute inset-0 flex flex-col justify-end p-4 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                      <h3 className="text-white font-bold text-lg mb-1">
                        {item.title}
                      </h3>
                      <p className="text-cyan-400 text-sm flex items-center gap-1">
                        <span>📸</span>
                        {item.description}
                      </p>
                    </div>
                  </div>

                  {/* Bottom accent line */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              </div>
            ))}
          </div>

          {/* No results message */}
          {filteredItems.length === 0 && (
            <div className="text-center py-20">
              <div className="text-6xl mb-4">📷</div>
              <p className="text-gray-400 text-xl">No photos found in this category</p>
            </div>
          )}

          {/* Stats Section */}
          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: '🎉', value: '500+', label: 'Events Hosted' },
              { icon: '😊', value: '10,000+', label: 'Happy Guests' },
              { icon: '📸', value: '50,000+', label: 'Photos Captured' },
              { icon: '⭐', value: '5.0', label: 'Average Rating' }
            ].map((stat, index) => (
              <div key={index} className="group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                <div className="relative bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-white/10 group-hover:border-cyan-500/30 transition-all duration-300 text-center">
                  <div className="text-4xl mb-2">{stat.icon}</div>
                  <div className="text-3xl font-bold text-cyan-400 mb-1">{stat.value}</div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="mt-20 text-center">
            <div className="relative inline-block group">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/30 to-blue-500/30 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
              <div className="relative bg-white/5 backdrop-blur-md p-8 rounded-2xl border border-white/10">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  Ready to Create Your Own Memories?
                </h3>
                <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
                  Let us make your next event unforgettable with our premium entertainment services
                </p>

                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 px-8 py-4 rounded-xl font-semibold text-white overflow-hidden group hover:scale-105 transition-all duration-300 shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50"
                > 

                  <span>Book Your Event Now</span>
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}