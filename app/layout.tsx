import "../style/globals.css";
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Muhammad Hassan Yahya - Full Stack Web Developer',
  description: 'Portfolio of Muhammad Hassan Yahya, an innovative Full Stack Web Developer specializing in React.js, Node.js, and modern web technologies.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
