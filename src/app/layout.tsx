import type { Metadata } from "next";
import { Inter, Great_Vibes, Dancing_Script } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const greatVibes = Great_Vibes({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-great-vibes",
});

const dancingScript = Dancing_Script({
  subsets: ["latin"],
  variable: "--font-dancing",
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Will You Be My Valentine? 💜",
  description:
    "A special Valentine's Day surprise filled with love and beautiful memories.",
  keywords: ["valentine", "love", "surprise"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${greatVibes.variable} ${dancingScript.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
