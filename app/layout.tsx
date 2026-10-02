import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Navbar from "@/component/Navbar";
import AnimatedBackground from "@/component/AnimatedBackground";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mohamed — Personal Portfolio",
  description: "The personal portfolio of Mohamed.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} min-h-screen bg-[#030303] text-white antialiased`}
      >
        <AnimatedBackground />

        <Navbar />

        <main className="relative z-10">
          {children}
        </main>
      </body>
    </html>
  );
}