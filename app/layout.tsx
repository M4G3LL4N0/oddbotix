import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  themeColor: '#050816',
  width: 'device-width',
  initialScale: 1
}

export const metadata: Metadata = {
  title: "OddBotix",
  description: "Premium deep-tech robotics venture focused on abnormal locomotion and motion intelligence",
  openGraph: {
    title: "OddBotix",
    description: "Premium deep-tech robotics venture focused on abnormal locomotion and motion intelligence",
    url: "https://www.oddbotix.com",
    siteName: "OddBotix",
    images: [
      {
        url: "https://www.oddbotix.com/og-image.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "OddBotix",
    description: "Premium deep-tech robotics venture focused on abnormal locomotion and motion intelligence",
    images: ["https://www.oddbotix.com/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
