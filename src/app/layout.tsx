import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/components/ThemeProvider";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://nok-website.vercel.app"),
  title: "NOK Inc | Sustainable Energy Solutions",
  description: "At NOK Inc, we help homes, businesses, and communities take control of their energy and mobility with solar systems, smart batteries, electric transport, and modern cooling solutions.",
  keywords: ["NOK Inc", "Sustainable Energy", "Solar Power", "Smart Batteries", "Electric Transport", "Cooling Solutions", "Energy Transition"],
  openGraph: {
    title: "NOK Inc | Sustainable Energy Solutions",
    description: "At NOK Inc, we help homes, businesses, and communities take control of their energy and mobility with solar systems, smart batteries, electric transport, and modern cooling solutions.",
    url: "https://nok-website.vercel.app",
    siteName: "NOK Inc",
    images: [
      {
        url: "/Windmill2.jpg",
        width: 1200,
        height: 630,
        alt: "NOK Inc - Sustainable Energy Solutions",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "NOK Inc | Sustainable Energy Solutions",
    description: "At NOK Inc, we help homes, businesses, and communities take control of their energy and mobility with solar systems, smart batteries, electric transport, and modern cooling solutions.",
    images: ["/Windmill2.jpg"],
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
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="page-container">
            <Header />
            <main className="main-content">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
