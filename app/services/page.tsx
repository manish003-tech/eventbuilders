import React from 'react'
import ServiceCard from '@/components/ServiceCard';



const Page = () => {

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


  return (
    <div>
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
    </div>
  )
}

export default Page
