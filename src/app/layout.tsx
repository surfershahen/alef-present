import type {Metadata} from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster"

export const metadata: Metadata = {
  title: 'דַּבֵּר בְּבִטְחָה - Speak Confidently',
  description: 'ورشة Alef العملية – تدريب عملي لتجاوب بثقة على أصعب الأسئلة – وتخرج بفيديو تعريفي احترافي!',
  openGraph: {
    title: 'דַּבֵּר בְּבִטְחָה - Speak Confidently',
    description: 'ورشة Alef العملية – تدريب عملي لتجاوب بثقة على أصعب الأسئلة – وتخرج بفيديو تعريفي احترافي!',
    images: ['/og-image.png'],
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Alegreya:ital,wght@0,400..900;1,400..900&family=Belleza&family=Tajawal:wght@200;300;400;500;700;800;900&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body bg-background text-foreground antialiased">
        {children}
        <Toaster />
      </body>
    </html>
  );
}
