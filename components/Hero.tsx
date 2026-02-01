import Link from 'next/link';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-dark via-charcoal to-dark relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-8 py-20 relative z-10">
        <div className="text-center mb-12">
          {/* Neon glow title */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6">
            <span className="text-white">Create Unforgettable Events with</span>
            <br />
            <span className="relative inline-block mt-4">
              <span className="text-cyan-400 font-black tracking-wider animate-pulse"
                style={{
                  textShadow: `
                    0 0 10px #22d3ee,
                    0 0 20px #22d3ee,
                    0 0 40px #22d3ee,
                    0 0 80px #0ea5e9,
                    0 0 120px #0ea5e9
                  `
                }}>
                ROLL.N.ROLL
              </span><br />
              <span className="text-white ml-4">ENTERTAINMENT</span>
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-8 leading-relaxed">
            From carnival games and photo booths to family-friendly fun, we deliver premium event entertainment for birthdays, weddings, corporate events, college festivals, and private parties.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link 
              href="/contact" 
              className="group relative bg-gradient-to-r from-primary to-red-600 text-white px-8 py-4 rounded-lg font-semibold overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-primary/50"
            >
              <span className="relative z-10">Book Your Event</span>
              <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Link>
            <Link 
              href="/contact" 
              className="group relative bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/50"
            >
              <span className="relative z-10">Get Free Quote</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Link>
          </div>
        </div>

        {/* Image and Features Grid */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image with glow effect */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
            <Image 
              src="/images/hero-bg.jpg" 
              alt="Carnival games and photo booth setup at an event" 
              width={600} 
              height={400} 
              className="rounded-2xl relative z-10 shadow-2xl border border-white/10"
            />
          </div>

          {/* Features List */}
          <div className="space-y-4">
            {[
              { icon: '🎉', text: 'Fun & Engaging for All Ages' },
              { icon: '🛡️', text: 'Safe & Professional Setup' },
              { icon: '🎨', text: 'Customizable to Your Event' },
              { icon: '⭐', text: 'High-Quality Equipment' },
              { icon: '📸', text: 'Memorable Moments Guaranteed' }
            ].map((item, index) => (
              <div 
                key={index}
                className="flex items-center gap-4 bg-white/5 backdrop-blur-sm p-4 rounded-lg border border-white/10 hover:bg-white/10 hover:border-cyan-500/50 transition-all duration-300 group"
              >
                <span className="text-3xl group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </span>
                <span className="text-lg text-gray-200 font-medium">
                  {item.text}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}