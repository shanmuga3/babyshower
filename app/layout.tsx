import type {Metadata} from 'next';
import Script from "next/script";
import './globals.css'; // Global styles

export const metadata: Metadata = {
  title: 'Baby Shower Invitation - Sakkimangalam | Sep 07, 2024',
  description: 'Warm and joyful baby shower invitation for Sep 07, 2024 at 10:00 AM with venue map, directions, and guest book.',
  openGraph: {
    title: 'Baby Shower Invitation - Sakkimangalam | Sep 07, 2024',
    description: 'Warm and joyful baby shower invitation for Sep 07, 2024 at 10:00 AM with venue map, directions, and guest book.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Baby Shower Invitation - Sakkimangalam | Sep 07, 2024',
    description: 'Warm and joyful baby shower invitation for Sep 07, 2024 at 10:00 AM with venue map, directions, and guest book.',
  },
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  const adsenseId = process.env.NEXT_PUBLIC_ADSENSE_ID;

  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&family=Poppins:wght@300;400;500;600;700&family=Pacifico&display=swap" rel="stylesheet" />
      </head>
      <body suppressHydrationWarning className="font-poppins bg-pink-50 text-slate-800 antialiased selection:bg-pink-200 selection:text-pink-900">
        {adsenseId && (
          <Script
            src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${adsenseId}`}
            crossOrigin="anonymous"
            strategy="afterInteractive"
          />
        )}
        {children}
      </body>
    </html>
  );
}
