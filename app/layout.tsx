import type {Metadata} from 'next';
import { Poppins } from 'next/font/google';
import './globals.css'; // Global styles

const poppins = Poppins({ 
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'], 
  variable: '--font-sans' 
});

export const metadata: Metadata = {
  title: 'Participant Guide | ISSA Technical Seminar',
  description: 'Participant Guide for the ISSA Technical Seminar in Maldives.',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={`${poppins.variable} scroll-smooth`}>
      <body className="font-sans text-slate-800 antialiased bg-slate-50 selection:bg-teal-100 selection:text-teal-900" suppressHydrationWarning>{children}</body>
    </html>
  );
}
