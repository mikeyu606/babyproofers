import type { Metadata } from 'next';
import './globals.css';

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
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
