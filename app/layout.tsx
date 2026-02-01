import type { Metadata } from 'next';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/globals.css';
import WhatsAppButton from '@/components/WhatsAppButton';

export const metadata: Metadata = {
  title: 'ROLL.N.ROLL ENTERTAINMENT - Event Games & Photo Booths',
  description: 'Transform your events with carnival games, board games, photo booths, and family entertainment. Perfect for birthdays, weddings, corporate events, and parties.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main className="pt-16">{children}</main> {/* Offset for fixed header */}
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
