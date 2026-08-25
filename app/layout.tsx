import type { Metadata } from "next";
import { Inter, Bebas_Neue } from "next/font/google";
import "./globals.css";

// This is our clean UI font for normal text
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

// This is our massive, bold display font for headlines
const bebasNeue = Bebas_Neue({
  variable: "--font-bebas",
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "NIKHIL | Creative Developer",
  description: "Portfolio of Soumya Ranjan Ghadai (Nikhil) - Video Editor, Developer, & Community Manager.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${bebasNeue.variable} antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-screen bg-[#111111] text-white flex flex-col">
        {children}
      </body>
    </html>
  );
}