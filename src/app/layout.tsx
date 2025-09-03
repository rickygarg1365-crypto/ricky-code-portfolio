import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Ricky & Code - Premium Web Development",
  description: "Partner with Ricky & Code to transform your vision into stunning, high-performance websites that captivate your audience and drive results.",
  keywords: "web development, web design, React, Next.js, UI/UX design, responsive design, Toronto, Canada",
  authors: [{ name: "Ricky & Code" }],
  creator: "Ricky & Code",
  openGraph: {
    title: "Ricky & Code - Premium Web Development",
    description: "Partner with Ricky & Code to transform your vision into stunning, high-performance websites that captivate your audience and drive results.",
    url: "https://rickyandcode.com",
    siteName: "Ricky & Code",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ricky & Code - Premium Web Development",
    description: "Partner with Ricky & Code to transform your vision into stunning, high-performance websites that captivate your audience and drive results.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
