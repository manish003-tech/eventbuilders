import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  return (
    <header className="fixed w-full z-50 top-0 px-4 py-3">
      {/* Glow effect container */}
      <div className="max-w-7xl mx-auto relative group">
        {/* Ambient glow */}
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-purple-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
        
        {/* Main nav container */}
        <nav className="relative flex justify-between items-center px-6 py-4 rounded-2xl bg-charcoal/80 backdrop-blur-md border border-white/10 shadow-2xl">
          
          {/* Logo Section */}
          <Link href="/" className="group/logo flex items-center gap-3">
            <div className="relative">
              {/* Logo glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-full blur-md opacity-50 group-hover/logo:opacity-100 transition-all duration-300"></div>
              
              {/* Logo image */}
              <div className="relative transition-transform duration-300 group-hover/logo:scale-110 group-hover/logo:rotate-6">
                <Image 
                  src="/images/logo.png" 
                  alt="ROLL.N.ROLL ENTERTAINMENT Logo" 
                  width={45} 
                  height={45}
                  className="drop-shadow-2xl relative z-10"
                />
              </div>
            </div>
            
            {/* Brand text (optional - remove if you only want logo) */}
            <span 
              className="hidden md:block text-xl font-black text-cyan-400 group-hover/logo:text-cyan-300 transition-colors duration-300"
              style={{
                textShadow: '0 0 20px #22d3ee'
              }}
            >
              ROLL.N.ROLL
            </span>
          </Link>

          {/* Navigation Links */}
          <ul className="flex items-center space-x-1 md:space-x-2">
            {[
              { name: 'Home', href: '/', icon: '🏠' },
              { name: 'Services', href: '/services', icon: '🎯' },
              { name: 'Gallery', href: '/gallery', icon: '📸' },
              { name: 'Contact', href: '/contact', icon: '📞' }
            ].map((item, index) => (
              <li key={index}>
                <Link 
                  href={item.href} 
                  className="group/link relative px-4 py-2 md:px-5 md:py-2.5 rounded-xl text-white font-medium hover:text-cyan-400 transition-all duration-300 flex items-center gap-2 overflow-hidden"
                >
                  {/* Background glow on hover */}
                  <span className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 opacity-0 group-hover/link:opacity-100 transition-opacity duration-300 rounded-xl"></span>
                  
                  {/* Icon (hidden on mobile for space) */}
                  <span className="hidden sm:inline text-sm group-hover/link:scale-110 transition-transform duration-300">
                    {item.icon}
                  </span>
                  
                  {/* Link text */}
                  <span className="relative z-10 text-sm md:text-base">
                    {item.name}
                  </span>
                  
                  {/* Animated underline */}
                  <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 group-hover/link:w-3/4 transition-all duration-300 rounded-full"></span>
                  
                  {/* Corner accent dot */}
                  <span className="absolute top-1 right-1 w-1 h-1 bg-cyan-400 rounded-full opacity-0 group-hover/link:opacity-100 transition-opacity duration-300"></span>
                </Link>
              </li>
            ))}
          </ul>

          {/* CTA Button (Optional - add if needed) */}
          <Link 
            href="/contact"
            className="hidden lg:flex items-center gap-2 relative bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-2.5 rounded-xl font-semibold text-white overflow-hidden group/cta hover:scale-105 transition-all duration-300 shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50"
          >
            <span className="relative z-10">Book Now</span>
            <svg className="w-4 h-4 relative z-10 group-hover/cta:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-500 opacity-0 group-hover/cta:opacity-100 transition-opacity duration-300"></div>
          </Link>

          {/* Bottom glow line */}
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent"></div>
        </nav>
      </div>
    </header>
  );
}