import { Inter } from 'next/font/google';
import { Providers } from './providers';
import './globals.css';
import ChatbaseScript from '@/components/ChatbaseScript';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Bombay Yacht - Luxury Yacht Charters',
  description: 'Experience the ultimate luxury yacht charter experience with Bombay Yacht',
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} min-h-screen flex flex-col`}>
        <Providers>
          <Navbar />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
          <ChatbaseScript />
        </Providers>
      </body>
    </html>
  )
}
