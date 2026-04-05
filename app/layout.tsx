import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "OddBotix",
  description:
    "Experimental robotics venture focused on abnormal locomotion, motion intelligence, and adaptive machine systems.",
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
