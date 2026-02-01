import Image from 'next/image';

export default function WhyUs() {
  return (
    <section className="py-20 bg-gradient-to-br from-dark via-charcoal to-dark relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/3 left-1/3 w-80 h-80 bg-cyan-500/40 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/3 w-80 h-80 bg-blue-500/40 rounded-full blur-3xl animate-pulse delay-700"></div>
      </div>

      <div className="max-w-7xl mx-auto px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            <span className="text-white">Why Choose </span>
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
              ROLL.N.ROLL
            </span>
            <span className="text-secondary">?</span>
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent mx-auto mt-4"></div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 - Safe & Reliable */}
          <div className="group relative">
            {/* Glow effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
            
            {/* Card content */}
            <div className="relative bg-white/5 backdrop-blur-md p-8 rounded-2xl border border-white/10 hover:border-cyan-500/50 transition-all duration-500 text-center h-full group-hover:transform group-hover:scale-105">
              {/* Icon container with glow */}
              <div className="relative w-20 h-20 mx-auto mb-6">
                <div className="absolute inset-0 bg-cyan-500/30 rounded-full blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                <div className="relative w-full h-full bg-gradient-to-br from-cyan-400 to-blue-600 rounded-full flex items-center justify-center shadow-lg shadow-cyan-500/50">
                  <span className="text-4xl">🛡️</span>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-cyan-400 mb-4 group-hover:text-cyan-300 transition-colors duration-300">
                Safe & Reliable
              </h3>
              <p className="text-gray-300 leading-relaxed">
                We prioritize safety with insured staff and equipment for worry-free events.
              </p>

              {/* Bottom accent line */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          </div>

          {/* Card 2 - Experienced Team */}
          <div className="group relative">
            {/* Glow effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
            
            {/* Card content */}
            <div className="relative bg-white/5 backdrop-blur-md p-8 rounded-2xl border border-white/10 hover:border-blue-500/50 transition-all duration-500 text-center h-full group-hover:transform group-hover:scale-105">
              {/* Icon container with glow */}
              <div className="relative w-20 h-20 mx-auto mb-6">
                <div className="absolute inset-0 bg-blue-500/30 rounded-full blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                <div className="relative w-full h-full bg-gradient-to-br from-blue-400 to-purple-600 rounded-full flex items-center justify-center shadow-lg shadow-blue-500/50">
                  <span className="text-4xl">⭐</span>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-blue-400 mb-4 group-hover:text-blue-300 transition-colors duration-300">
                Experienced Team
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Years of expertise in event entertainment for seamless, professional execution.
              </p>

              {/* Bottom accent line */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          </div>

          {/* Card 3 - Customizable Packages */}
          <div className="group relative">
            {/* Glow effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
            
            {/* Card content */}
            <div className="relative bg-white/5 backdrop-blur-md p-8 rounded-2xl border border-white/10 hover:border-purple-500/50 transition-all duration-500 text-center h-full group-hover:transform group-hover:scale-105">
              {/* Icon container with glow */}
              <div className="relative w-20 h-20 mx-auto mb-6">
                <div className="absolute inset-0 bg-purple-500/30 rounded-full blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                <div className="relative w-full h-full bg-gradient-to-br from-purple-400 to-pink-600 rounded-full flex items-center justify-center shadow-lg shadow-purple-500/50">
                  <span className="text-4xl">🎨</span>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-purple-400 mb-4 group-hover:text-purple-300 transition-colors duration-300">
                Customizable Packages
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Tailor services to fit your event's theme, budget, and guest count.
              </p>

              {/* Bottom accent line */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          </div>
        </div>

        {/* Optional: Add a subtle bottom decoration */}
        <div className="mt-16 flex justify-center gap-2">
          <div className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse"></div>
          <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse delay-150"></div>
          <div className="w-2 h-2 rounded-full bg-purple-500 animate-pulse delay-300"></div>
        </div>
      </div>
    </section>
  );
}