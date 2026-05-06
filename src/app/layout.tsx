import type { Metadata } from "next";
import { Syne, Space_Mono, Outfit } from "next/font/google";
import "./globals.css";
import CustomCursor from "@/components/CustomCursor";
import { ThemeProvider } from "@/components/ThemeProvider";

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  weight: ["400", "500", "600", "700", "800"],
});

const spaceMono = Space_Mono({
  subsets: ["latin"],
  variable: "--font-space-mono",
  weight: ["400", "700"],
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export const metadata: Metadata = {
  title: "Prajwal | Full Stack & AI Developer",
  description:
    "Personal portfolio of Prajwal - Full Stack Developer & AI/ML Engineer specializing in MERN stack, Next.js, and Machine Learning.",
  keywords: [
    "Prajwal",
    "Full Stack Developer",
    "AI Developer",
    "MERN Stack",
    "Next.js",
    "Machine Learning",
    "Portfolio",
  ],
  authors: [{ name: "Prajwal" }],
  openGraph: {
    title: "Prajwal | Full Stack & AI Developer",
    description:
      "Personal portfolio of Prajwal - Full Stack Developer & AI/ML Engineer.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Prajwal | Full Stack & AI Developer",
    description:
      "Personal portfolio of Prajwal - Full Stack Developer & AI/ML Engineer.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className={`${syne.variable} ${spaceMono.variable} ${outfit.variable} font-sans antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} disableTransitionOnChange>
          {/* CSS Noise Overlay */}
          <div className="fixed inset-0 z-[9999] pointer-events-none opacity-[0.03] mix-blend-overlay dark:invert-0 invert" style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg viewBox=\"0 0 200 200\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cfilter id=\"noiseFilter\"%3E%3CfeTurbulence type=\"fractalNoise\" baseFrequency=\"0.65\" numOctaves=\"3\" stitchTiles=\"stitch\"/%3E%3C/filter%3E%3Crect width=\"100%25\" height=\"100%25\" filter=\"url(%23noiseFilter)\"/%3E%3C/svg%3E')" }}></div>
          <CustomCursor />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
