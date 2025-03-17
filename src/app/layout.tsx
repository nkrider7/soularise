import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import localFont from 'next/font/local'
import "./globals.css";

const sink = localFont({
  src: [
    {
      path: '../../public/fonts/sink.otf',
      weight: '400'
    },
    {
      path: '../../public/fonts/sink.otf',
      weight: '700'
    }
  ],
  variable: '--font-sink',
})
const guzan = localFont({
  src: [
    {
      path: '../../public/fonts/guzan.otf',
      weight: '400'
    },
    {
      path: '../../public/fonts/guzan.otf',
      weight: '700'
    }
  ],
  variable: '--font-guzan',
})

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "BrooCode - Web & App Development Agency",
  description: "Broo Code is a cutting-edge web and app development agency specializing in modern website solutions, mobile applications, and custom software development. We bring ideas to life with innovative technology and seamless user experiences.",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${sink.variable} ${guzan.variable} ${inter.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
