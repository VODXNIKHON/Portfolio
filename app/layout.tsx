import type { Metadata } from "next";
import { Inter, Bebas_Neue } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const bebasNeue = Bebas_Neue({
  variable: "--font-bebas",
  weight: "400",
  subsets: ["latin"],
});

// Upgraded SEO Metadata for Google Search
export const metadata: Metadata = {
  title: "Soumya Ranjan Ghadai (Nikhil) | Creative Developer",
  description: "Portfolio of Nikhil - Specializing in high-impact video editing, custom Discord bots, community infrastructure, and frontend engineering.",
  keywords: [
    "Soumya Ranjan Ghadai",
    "Nikhil",
    "Creative Developer",
    "Video Editor",
    "Discord Bot Developer",
    "Community Manager",
    "GALAX SMP",
    "The ViGi",
    "Genshin Impact Edits",
    "Honkai Star Rail",
    "Wuthering Waves",
    "Graphite Portraits",
    "Next.js Developer"
  ],
  authors: [{ name: "Soumya Ranjan Ghadai" }],
  creator: "Soumya Ranjan Ghadai",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://portfolio-portfolio-d51c.vercel.app/", // CRITICAL: Swap this with your actual Vercel link
    title: "Soumya Ranjan Ghadai | Creative Developer",
    description: "Bridging design, engineering, and digital media.",
    siteName: "Nikhil Archive",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  // ADD THIS NEW SECTION HERE:
  verification: {
    google: "UdZk-SkPpD44YvJd", 
  },
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