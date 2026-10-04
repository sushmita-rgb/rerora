import './globals.css';
import { Plus_Jakarta_Sans, Outfit } from 'next/font/google';

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-main',
  display: 'swap',
});

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-heading',
  display: 'swap',
});

export const metadata = {
  title: 'Rorera — Discover Your Path in Technology (For Beginners)',
  description: 'Rorera is an organization helping tech beginners discover technology paths, participate in workshops, and explore their curiosity.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${jakarta.variable} ${outfit.variable}`}>
      <body>
        {children}
      </body>
    </html>
  );
}

