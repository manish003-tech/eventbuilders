'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({ name: '', phone: '', eventType: '', eventDate: '' });
  const [submitted, setSubmitted] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add API call here (e.g., fetch to /api/contact)
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
    setFormData({ name: '', phone: '', eventType: '', eventDate: '' });
  };

  return (
    <section className="py-20 bg-gradient-to-br from-dark via-charcoal to-dark relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-2xl mx-auto px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            <span className="text-white">Book Your </span>
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
              Event
            </span>
          </h2>
          <p className="text-gray-400 text-lg mt-4">Let's make your event unforgettable</p>
          <div className="w-32 h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent mx-auto mt-6"></div>
        </div>

        {/* Form Container */}
        <div className="relative group">
          {/* Glow effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 via-blue-500/20 to-purple-500/20 rounded-3xl blur-xl opacity-50 group-hover:opacity-75 transition-all duration-500"></div>
          
          {/* Form Card */}
          <div className="relative bg-white/5 backdrop-blur-md p-8 md:p-12 rounded-3xl border border-white/10 shadow-2xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Name Field */}
              <div className="relative">
                <label className="block text-cyan-400 font-semibold mb-2 flex items-center gap-2">
                  <span className="text-xl">👤</span>
                  Your Name
                </label>
                <div className="relative">
                  <input 
                    type="text" 
                    name="name" 
                    value={formData.name} 
                    onChange={handleChange}
                    onFocus={() => setFocusedField('name')}
                    onBlur={() => setFocusedField(null)}
                    required 
                    placeholder="Enter your full name"
                    className="w-full p-4 bg-white/5 text-white rounded-xl border border-white/10 focus:border-cyan-500/50 focus:outline-none focus:ring-2 focus:ring-cyan-500/20 transition-all duration-300 placeholder-gray-500"
                  />
                  {focusedField === 'name' && (
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-500 to-blue-500"></div>
                  )}
                </div>
              </div>

              {/* Phone Field */}
              <div className="relative">
                <label className="block text-cyan-400 font-semibold mb-2 flex items-center gap-2">
                  <span className="text-xl">📞</span>
                  Phone Number
                </label>
                <div className="relative">
                  <input 
                    type="tel" 
                    name="phone" 
                    value={formData.phone} 
                    onChange={handleChange}
                    onFocus={() => setFocusedField('phone')}
                    onBlur={() => setFocusedField(null)}
                    required 
                    placeholder="+1 (123) 456-7890"
                    className="w-full p-4 bg-white/5 text-white rounded-xl border border-white/10 focus:border-cyan-500/50 focus:outline-none focus:ring-2 focus:ring-cyan-500/20 transition-all duration-300 placeholder-gray-500"
                  />
                  {focusedField === 'phone' && (
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-500 to-blue-500"></div>
                  )}
                </div>
              </div>

              {/* Event Type Field */}
              <div className="relative">
                <label className="block text-cyan-400 font-semibold mb-2 flex items-center gap-2">
                  <span className="text-xl">🎉</span>
                  Event Type
                </label>
                <div className="relative">
                  <select 
                    name="eventType" 
                    value={formData.eventType} 
                    onChange={handleChange}
                    onFocus={() => setFocusedField('eventType')}
                    onBlur={() => setFocusedField(null)}
                    required 
                    className="w-full p-4 bg-white/5 text-white rounded-xl border border-white/10 focus:border-cyan-500/50 focus:outline-none focus:ring-2 focus:ring-cyan-500/20 transition-all duration-300 appearance-none cursor-pointer"
                  >
                    <option value="" className="bg-charcoal">Select your event type</option>
                    <option value="birthday" className="bg-charcoal">🎂 Birthday Party</option>
                    <option value="wedding" className="bg-charcoal">💍 Wedding</option>
                    <option value="corporate" className="bg-charcoal">🏢 Corporate Event</option>
                    <option value="party" className="bg-charcoal">🎊 Private Party</option>
                    <option value="festival" className="bg-charcoal">🎪 Festival</option>
                    <option value="other" className="bg-charcoal">✨ Other</option>
                  </select>
                  {/* Custom dropdown arrow */}
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                    <svg className="w-5 h-5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                  {focusedField === 'eventType' && (
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-500 to-blue-500"></div>
                  )}
                </div>
              </div>

              {/* Event Date Field */}
              <div className="relative">
                <label className="block text-cyan-400 font-semibold mb-2 flex items-center gap-2">
                  <span className="text-xl">📅</span>
                  Event Date
                </label>
                <div className="relative">
                  <input 
                    type="date" 
                    name="eventDate" 
                    value={formData.eventDate} 
                    onChange={handleChange}
                    onFocus={() => setFocusedField('eventDate')}
                    onBlur={() => setFocusedField(null)}
                    required 
                    className="w-full p-4 bg-white/5 text-white rounded-xl border border-white/10 focus:border-cyan-500/50 focus:outline-none focus:ring-2 focus:ring-cyan-500/20 transition-all duration-300"
                  />
                  {focusedField === 'eventDate' && (
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-500 to-blue-500"></div>
                  )}
                </div>
              </div>

              {/* Submit Button */}
              <button 
                type="submit" 
                className="group relative w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-4 px-8 rounded-xl font-bold text-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/50 mt-8"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Submit Booking
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>

              {/* Success Message */}
              {submitted && (
                <div className="mt-6 p-4 bg-green-500/10 border border-green-500/30 rounded-xl backdrop-blur-sm animate-in fade-in slide-in-from-bottom-4 duration-500">
                  <div className="flex items-center gap-3 text-green-400">
                    <div className="w-10 h-10 bg-green-500/20 rounded-full flex items-center justify-center">
                      <span className="text-2xl">✓</span>
                    </div>
                    <div>
                      <p className="font-bold">Success!</p>
                      <p className="text-sm text-green-300">Thank you! We'll contact you soon to discuss your event.</p>
                    </div>
                  </div>
                </div>
              )}
            </form>

            {/* Bottom decorative line */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent rounded-b-3xl"></div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-8 text-center">
          <p className="text-gray-400 flex items-center justify-center gap-2">
            <span className="text-cyan-400">🔒</span>
            Your information is safe and secure
          </p>
        </div>
      </div>
    </section>
  );
}