import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "White Rice Impact — 20 Years of Behavior Change",
  description:
    "Celebrating 20 years of social and behavioral change work with UNICEF and global partners — transforming lives through evidence-based behavior change at scale.",
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
    title: "White Rice Impact — 20 Years of Behavior Change",
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
    <html lang="en" className={inter.variable}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
