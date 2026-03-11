import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: "Luminous Gems | Premium Sri Lankan Gemstones",
  description: "Discover the finest ethically sourced Sri Lankan gemstones. From Royal Blue Sapphires to ethereal Moonstones, experience luxury and heritage.",
  keywords: "gemstones, Sri Lanka, sapphires, moonstones, rubies, topaz, luxury jewelry, ethically sourced",
  openGraph: {
    title: "Luminous Gems | Premium Sri Lankan Gemstones",
    description: "Discover the finest ethically sourced Sri Lankan gemstones.",
    type: "website",
    locale: "en_LK",
    siteName: "Luminous Gems",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${playfair.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
