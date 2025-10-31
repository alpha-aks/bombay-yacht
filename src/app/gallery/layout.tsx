import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Gallery | Bombay Yacht',
  description: 'Explore our luxury yacht gallery featuring stunning images of our fleet and destinations.',
  openGraph: {
    title: 'Gallery | Bombay Yacht',
    description: 'Explore our luxury yacht gallery featuring stunning images of our fleet and destinations.',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1520975908058-7f4d44a9f8d5?q=80&w=1600&auto=format&fit=crop',
        width: 1200,
        height: 630,
        alt: 'Bombay Yacht Gallery',
      },
    ],
  },
};

export default function GalleryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
