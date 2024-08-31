import clsx from 'clsx';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Stay Ahead of Security Risks - SafeHeaders',
  description: `Scan your website to ensure it's secure. This tool checks for essential security headers every modern site should have, identifies missing headers, and provides easy-to-follow instructions to fix them.`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={clsx(inter.className, 'bg-zinc-950 text-white')}>{children}</body>
    </html>
  );
}
