import type { Metadata } from "next";
import { GeistSans as Geist, GeistMono as Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "OddBotix - Pioneering Movement Intelligence",
  description: "Venture‑backed robotics company developing adaptive locomotion architectures for unstructured environments",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} scroll-smooth h-full antialiased subpixel-antialiased`}
    >
      <body className="min-h-screen flex flex-col bg-background text-foreground transition-all antialiased subpixel-antialiased">
        {children}
      </body>
    </html>
  );
}
