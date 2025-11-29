import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'NewsPulse - Latest Headlines & Breaking News from India',
  description:
    'Stay updated with the latest news, breaking stories, and in-depth coverage from India and around the world. NewsPulse brings you sports, technology, entertainment, business, and more.',
  keywords: 'news, breaking news, India news, sports, technology, entertainment',
  authors: [{ name: 'NewsPulse Team' }],
  openGraph: {
    title: 'NewsPulse - Latest Headlines & Breaking News',
    description: 'Your trusted source for breaking news and comprehensive coverage.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow bg-gray-100">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
