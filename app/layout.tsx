import Footer from '@/components/Footer';
import './globals.css';
import { Quicksand } from 'next/font/google';
import { Metadata } from 'next';

const quicksand = Quicksand({ subsets: ['latin'], weight: ['400', '700'] });

export const metadata: Metadata = {
  title: {
    template: 'Domu Finance - %s',
    default: 'Domu Finance - Bridge The Real Estate Gap With Crypto',
  },
  description:
    'Investing in real estate development has never been easier with Domu Finance. Birdge the cryptocurrency and real estate gap - earn up to 15% APR.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={quicksand.className}>
        {children}
        <Footer />
      </body>
    </html>
  );
}
