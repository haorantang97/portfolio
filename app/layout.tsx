import type { Metadata } from "next";
import { Source_Serif_4, Inter } from "next/font/google";
import { BackButton } from "@/components/BackButton";
import { LocaleSwitch } from "@/components/LocaleSwitch";
import "./globals.css";

const serif = Source_Serif_4({
  subsets: ["latin"],
  weight: ["400", "500"],
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
});

const sans = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Haoran Tang",
  description: "Independent. Between AI products, fashion, and image.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${serif.variable} ${sans.variable}`}>
      <body>
        {children}
        <BackButton />
        <LocaleSwitch />
      </body>
    </html>
  );
}
