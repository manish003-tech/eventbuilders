import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="relative bg-gradient-to-br from-dark via-charcoal to-dark overflow-hidden">
            {/* Animated background elements */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-cyan-500/30 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute top-1/2 right-1/4 w-64 h-64 bg-blue-500/30 rounded-full blur-3xl animate-pulse delay-700"></div>
            </div>

            {/* Top border with gradient */}
            <div className="h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent"></div>

            <div className="max-w-7xl mx-auto px-8 py-16 relative z-10">
                {/* Main Footer Content */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">

                    {/* Brand Section */}
                    <div className="text-center md:text-left">
                        <h3 className="text-3xl font-bold mb-4">
                            <span
                                className="text-cyan-400 font-black"
                                style={{
                                    textShadow: `
                    0 0 10px #22d3ee,
                    0 0 20px #22d3ee,
                    0 0 30px #0ea5e9
                  `
                                }}
                            >
                                ROLL.N.ROLL
                            </span>
                        </h3>
                        <p className="text-gray-400 leading-relaxed">
                            Creating unforgettable event experiences with premium entertainment solutions.
                        </p>

                        {/* Social Icons
            <div className="flex gap-4 mt-6 justify-center md:justify-start">
              {[
                { icon: '📘', label: 'Facebook', color: 'from-blue-500 to-blue-600' },
                { icon: '📸', label: 'Instagram', color: 'from-pink-500 to-purple-600' },
                { icon: '🐦', label: 'Twitter', color: 'from-cyan-400 to-blue-500' }
              ].map((social, index) => (
                
                  key={index}
                  href="#"
                  className="group relative w-12 h-12"
                  aria-label={social.label}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${social.color} rounded-lg blur-md opacity-50 group-hover:opacity-100 transition-opacity duration-300`}></div>
                  <div className="relative w-full h-full bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 group-hover:border-cyan-500/50 flex items-center justify-center transition-all duration-300 group-hover:scale-110">
                    <span className="text-xl">{social.icon}</span>
                  </div>
                </a>
              ))}
            </div> */}
                    </div>

                    {/* Quick Links */}
                    <div className="text-center">
                        <h4 className="text-xl font-bold text-cyan-400 mb-6">Quick Links</h4>
                        <ul className="space-y-3">
                            {['Home', 'Services', 'Gallery', 'Contact'].map((link, index) => (
                                <li key={index}>
                                    <Link
                                        href={`/${link.toLowerCase()}`}
                                        className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 relative group inline-block"
                                    >
                                        {link}
                                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-500 group-hover:w-full transition-all duration-300"></span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="text-center md:text-right">
                        <h4 className="text-xl font-bold text-cyan-400 mb-6">Get In Touch</h4>
                        <div className="space-y-4">
                            {/* Phone */}
                            <div className="group">
                                <a
                                    href="9712750732"
                                    className="flex items-center justify-center md:justify-end gap-3 text-gray-400 hover:text-cyan-400 transition-colors duration-300"
                                >
                                    <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center shadow-lg shadow-cyan-500/30 group-hover:shadow-cyan-500/50 transition-all duration-300">
                                        <span className="text-xl">📞</span>
                                    </div>
                                    <span>97127 50732</span>
                                </a>
                            </div>

                            {/* Email */}
                            <div className="group">
                                <a
                                    href="mailto:info@rollnrollentertainment.com"
                                    className="flex items-center justify-center md:justify-end gap-3 text-gray-400 hover:text-cyan-400 transition-colors duration-300"
                                >
                                    <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center shadow-lg shadow-blue-500/30 group-hover:shadow-blue-500/50 transition-all duration-300">
                                        <span className="text-xl">✉️</span>
                                    </div>
                                    <span className="text-sm">rollnrollentertainment@gmail.com</span>
                                </a>
                            </div>

                            {/* Address */}
                            <div className="group">
                                <div className="flex items-center justify-center md:justify-end gap-3 text-gray-400">
                                    <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg flex items-center justify-center shadow-lg shadow-purple-500/30 group-hover:shadow-purple-500/50 transition-all duration-300">
                                        <span className="text-xl">📍</span>
                                    </div>
                                    <span className="text-sm">25-A - Chikuwadi, Surat, India </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Divider */}
                <div className="w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mb-8"></div>

                {/* Bottom Bar */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-gray-400 text-sm">
                    <p className="flex items-center gap-2">
                        <span className="text-cyan-400">©</span>
                        2023
                        <span
                            className="text-cyan-400 font-bold"
                            style={{
                                textShadow: '0 0 10px #22d3ee'
                            }}
                        >
                            ROLL.N.ROLL ENTERTAINMENT
                        </span>
                        . All rights reserved.
                    </p>

                    <div className="flex gap-6">
                        <Link href="/privacy" className="hover:text-cyan-400 transition-colors duration-300">
                            Privacy Policy
                        </Link>
                        <Link href="/terms" className="hover:text-cyan-400 transition-colors duration-300">
                            Terms of Service
                        </Link>
                    </div>
                </div>

                {/* Decorative dots */}
                <div className="flex justify-center gap-2 mt-8">
                    <div className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse"></div>
                    <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse delay-150"></div>
                    <div className="w-2 h-2 rounded-full bg-purple-500 animate-pulse delay-300"></div>
                </div>
            </div>
        </footer>
    );
}
