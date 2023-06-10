import './globals.css';
import { Inter } from 'next/font/google';
import Navbar from '@/components/navbar';
import Navbar2 from '@/components/nav2';

export const metadata = {
  title: 'zainiee online store',
  description:
    'A simple Next.js app with Vercel Postgres as the database and Drizzle as the ORM',
};

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.variable}>
        <Navbar/>
        <Navbar2/>
        {children}
        </body>
    </html>
  );
}
