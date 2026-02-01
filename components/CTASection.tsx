import Link from 'next/link';

export default function CTASection() {
  return (
    <section className="p-8 bg-primary text-center">
      <h2 className="text-3xl font-bold mb-4">Ready to Make Your Event Unforgettable?</h2>
      <p className="mb-6">Contact us today for a free quote and booking.</p>
      <Link href="/contact" className="bg-secondary text-dark px-6 py-3 rounded hover:bg-yellow-400 transition">Get Started</Link>
    </section>
  );
}