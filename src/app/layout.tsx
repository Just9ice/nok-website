import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
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
  title: "NOK Inc | Sustainable Energy Solutions",
  description: "At NOK Inc, we help homes, businesses, and communities take control of their energy and mobility with solar systems, smart batteries, electric transport, and modern cooling solutions.",
  keywords: ["NOK Inc", "Sustainable Energy", "Solar Power", "Smart Batteries", "Electric Transport", "Cooling Solutions", "Energy Transition"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <body>
        <div className="page-container">
          <Header />
          <main className="main-content">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
