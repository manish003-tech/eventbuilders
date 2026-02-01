import Image from 'next/image';

interface TestimonialProps {
  quote: string;
  name: string;
  image?: string;
}

export default function Testimonial({ quote, name, image }: TestimonialProps) {
  return (
    <div className="group relative h-full">
      {/* Glow effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 via-blue-500/20 to-purple-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
      
      {/* Card content */}
      <div className="relative bg-white/5 backdrop-blur-md p-8 rounded-2xl border border-white/10 hover:border-cyan-500/50 transition-all duration-500 h-full flex flex-col">
        
        {/* Top decorative quote mark */}
        <div className="absolute top-4 left-4 text-6xl text-cyan-500/20 font-serif leading-none">"</div>
        
        {/* Profile Image */}
        {image && (
          <div className="relative w-24 h-24 mx-auto mb-6 mt-4">
            {/* Glow ring */}
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-full blur-md group-hover:blur-lg transition-all duration-500"></div>
            {/* Image container */}
            <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white/10 group-hover:border-cyan-500/50 transition-all duration-500 shadow-xl">
              <Image 
                src={image} 
                alt={name} 
                width={100} 
                height={100} 
                className="object-cover"
              />
            </div>
            {/* Corner accent */}
            <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-full flex items-center justify-center shadow-lg shadow-cyan-500/50">
              <span className="text-xs">✓</span>
            </div>
          </div>
        )}

        {/* Quote text */}
        <div className="flex-grow flex items-center mb-6">
          <p className="text-gray-200 text-lg leading-relaxed italic relative z-10 text-center">
            "{quote}"
          </p>
        </div>

        {/* Divider line */}
        <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-cyan-500 to-transparent mx-auto mb-4 group-hover:w-24 transition-all duration-500"></div>

        {/* Name and role */}
        <div className="text-center">
          <p className="font-bold text-xl bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent group-hover:from-cyan-300 group-hover:to-blue-300 transition-all duration-300">
            {name}
          </p>
        </div>

        {/* Bottom accent line */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent rounded-b-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

        {/* Corner decorations */}
        <div className="absolute top-3 right-3 w-2 h-2 bg-cyan-500/50 rounded-full animate-pulse"></div>
        <div className="absolute bottom-3 left-3 w-2 h-2 bg-blue-500/50 rounded-full animate-pulse delay-300"></div>
      </div>
    </div>
  );
}