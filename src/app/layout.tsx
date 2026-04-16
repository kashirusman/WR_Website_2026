import type { Metadata } from "next";
import { Inter, DM_Sans, Cormorant_Garamond, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
  weight: ["300", "400", "500"],
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  display: "swap",
  weight: ["300", "400", "600", "700"],
  style: ["normal", "italic"],
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
  weight: ["400", "700"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "White Rice Impact - 20 Years of Behavior Change",
  description:
    "Celebrating 20 years of social and behavioral change work with UNICEF and global partners - transforming lives through evidence-based behavior change at scale.",
  keywords: [
    "behavior change",
    "UNICEF",
    "social impact",
    "SBC",
    "last mile",
    "ECD",
    "PlayLabs",
    "White Rice Impact",
  ],
  openGraph: {
    title: "White Rice Impact - 20 Years of Behavior Change",
    description:
      "20 years of evidence-based behavior change work with UNICEF and global partners.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${dmSans.variable} ${cormorant.variable} ${playfair.variable}`}>
      <body className="antialiased" suppressHydrationWarning>{children}</body>
    </html>
  );
}
