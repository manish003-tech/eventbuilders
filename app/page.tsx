// app/page.tsx (Homepage)
import type { Metadata } from 'next';
import Hero from '../components/Hero';
import ServiceCard from '../components/ServiceCard';
import WhyChooseUs from '../components/WhyUs';
import Testimonial from '../components/Testimonial';
import CTASection from '../components/CTASection';
import FadeIn from '../components/FadeIn';
// import Footer from '@/components/Footer';


export const metadata: Metadata = {
  title: 'ROLL.N.ROLL ENTERTAINMENT - Event Games & Photo Booths for Unforgettable Parties',
  description: 'Transform your events with carnival games, board games, photo booths, and family entertainment. Perfect for birthdays, weddings, corporate events, and parties. Book now for fun, safe, customizable experiences.',
};

export default function HomePage() {
  const services = [
    {
      title: 'Carnival & Board Games',
      description: 'Interactive carnival and board games for all ages.',
      image: '/images/service1.jpg',
      bestFor: 'Birthdays, Weddings',
      includes: 'Setup, Staff, Prizes',
    },
    {
      title: '18+ Party Games',
      description: 'Fun games for adult parties.',
      image: '/images/service2.jpg',
      bestFor: 'Private Parties',
      includes: 'Themed Games',
    },
    {
      title: 'Kids & Family Games',
      description: 'Safe games for children and families.',
      image: '/images/service3.jpg',
      bestFor: 'Family Events',
      includes: 'Supervision',
    },
    {
      title: 'Corporate Entertainment',
      description: 'Team-building games for businesses.',
      image: '/images/service4.jpg',
      bestFor: 'Corporate Events',
      includes: 'Custom Themes',
    },
    {
      title: 'Photo Booth',
      description: 'Memory booths with props and prints.',
      image: '/images/service5.jpg',
      bestFor: 'Weddings, Parties',
      includes: 'Digital Photos',
    },
  ];

  const testimonials = [
    {
      quote: 'Amazing carnival games made our wedding unforgettable!',
      name: 'Jane D.',
      image: '/images/testimonial1.jpg',
    },
    {
      quote: 'The photo booth was a hit at our corporate event.',
      name: 'John S.',
      image: '/images/testimonial1.jpg',
    },
  ];

  return (
    <>
      <Hero />
      <FadeIn>
        <section className="p-8 bg-charcoal">
          <h2 className="text-3xl font-bold text-secondary text-center mb-8">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                title={service.title}
                description={service.description}
                image={service.image}
                bestFor={service.bestFor}
                includes={service.includes}
              />
            ))}
          </div>
        </section>
      </FadeIn>
      <FadeIn>
        <WhyChooseUs />
      </FadeIn>
      <FadeIn>
        <section className="p-8 bg-dark">
          <h2 className="text-3xl font-bold text-secondary text-center mb-8">What Our Clients Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Testimonial
                key={index}
                quote={testimonial.quote}
                name={testimonial.name}
                image={testimonial.image}
              />
            ))}
          </div>

        </section>

      </FadeIn>
         {/* Stats Section */}
         <div className='flex  justify-center'>
           <div className=" mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 ">
            {[
              { icon: '🎉', value: '50+', label: 'Events Hosted' },
              { icon: '😊', value: '1000+', label: 'Happy Guests' },
              { icon: '📸', value: '5000+', label: 'Photos Captured' },
              { icon: '⭐', value: '4.9', label: 'Average Rating' }
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
         </div>
      <CTASection />
      
    </>
  );
}