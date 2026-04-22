import type {Metadata} from 'next';
import { Instrument_Serif, Barlow } from 'next/font/google';
import './globals.css';

const instrumentSerif = Instrument_Serif({
  weight: '400',
  style: 'italic',
  subsets: ['latin'],
  variable: '--font-instrument-serif',
});

const barlow = Barlow({
  weight: ['300', '400', '500', '600'],
  subsets: ['latin'],
  variable: '--font-barlow',
});

export const metadata: Metadata = {
  title: 'Elite AI Web Design for Coaches & Consultants | Luxury AI Studio',
  description: 'High-converting, AI-enhanced websites built exclusively for coaches, consultants, and course creators. Experience premium web design that turns visitors into paying clients.',
  keywords: ['AI web design', 'High-converting websites', 'Coaches web design', 'Consultant funnel builder', 'Premium landing pages', 'Course creator websites', 'AI-Enhanced Design', 'Luxury web agency'],
  authors: [{ name: 'NewAIHubber', url: 'https://www.newaihubber.com/' }],
  creator: 'NewAIHubber',
  publisher: 'NewAIHubber',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://www.newaihubber.com/'),
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: '/logo.png',
    shortcut: '/logo.png',
    apple: '/logo.png',
  },
  openGraph: {
    title: 'High-Converting AI Web Design for Coaches & Consultants',
    description: 'Transform your coaching business with premium, AI-powered web design. Built for conversions and high-speed performance.',
    url: 'https://www.newaihubber.com/',
    siteName: 'Luxury AI Studio by NewAIHubber',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'High-Converting AI Web Design',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Premium AI Web Design for Coaches & Consultants',
    description: 'Bespoke, high-converting websites built exclusively for course creators and consultants.',
    creator: '@newaihubber',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body className={`${instrumentSerif.variable} ${barlow.variable} bg-black font-body text-white antialiased`} suppressHydrationWarning>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Luxury AI Studio by NewAIHubber",
              "url": "https://www.newaihubber.com/",
              "logo": "https://www.newaihubber.com/logo.png",
              "sameAs": [
                "https://www.newaihubber.com/"
              ],
              "description": "Premium AI-powered web design agency for coaches and consultants."
            })
          }}
        />
        {children}
      </body>
    </html>
  );
}
