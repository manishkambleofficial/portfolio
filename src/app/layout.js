import './globals.css';
import Header from '../components/Header';
import CustomCursor from '../common/CustomCursor';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Lexend } from 'next/font/google';

const lexend = Lexend({
  subsets: ['latin'],
  display: 'swap',
  weight: ['100','200','300','400','500','600','700','800','900'],
});

export const metadata = {
  title: 'Manish Kamble - Software Developer',
  description: 'Portfolio of Manish Kamble - Software Developer',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={lexend.className}>
      <body>
        <CustomCursor />
        <Header />
        {children}
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}