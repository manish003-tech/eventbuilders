import Image from 'next/image';
import Link from 'next/link';

interface ServiceCardProps {
  title: string;
  description: string;
  image: string;
  bestFor: string;
  includes: string;
}

export default function ServiceCard({ title, description, image, bestFor, includes }: ServiceCardProps) {
  return (
    <div className="bg-charcoal p-6 rounded-lg text-center">
      <Image src={image} alt={title} width={300} height={200} className="rounded mb-4" />
      <h3 className="text-xl font-bold text-secondary mb-2">{title}</h3>
      <p className="mb-4">{description}</p>
      <p className="text-sm"><strong>Best for:</strong> {bestFor}</p>
      <p className="text-sm mb-4"><strong>Includes:</strong> {includes}</p>
      <Link href="/contact" className="bg-primary text-white px-4 py-2 rounded hover:bg-red-700 transition">Book Now</Link>
    </div>
  );
}