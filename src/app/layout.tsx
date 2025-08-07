import type { Metadata } from 'next';
import './globals.css';

import { Gothic_A1 } from 'next/font/google';

const gothicA1 = Gothic_A1({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-gothic-a1',
});

export const metadata: Metadata = {
  title: '이윤경 포트폴리오',
  description: '이윤경 포트폴리오입니다.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='ko'>
      <body className={`${gothicA1.variable} antialiased`}>{children}</body>
    </html>
  );
}
