import type { Metadata } from 'next';
import { IBM_Plex_Sans, Playfair_Display } from 'next/font/google';
import './globals.css';

const plexSans = IBM_Plex_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-plex-sans',
  display: 'swap'
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['500', '600', '700'],
  variable: '--font-playfair',
  display: 'swap'
});

export const metadata: Metadata = {
  title: 'babyproofers | premium home safety',
  description: 'Professional home safety assessments and premium installation for Southern California families.'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${plexSans.variable} ${playfair.variable}`}>
      <body className={plexSans.className}>{children}</body>
    </html>
  );
}
