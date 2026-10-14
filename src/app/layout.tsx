import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  themeColor: "#0b0f17",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Abhimanyu Sur | SDE & Cross-Platform Mobile Developer (Flutter & Dart)",
  description:
    "Portfolio of Abhimanyu Sur, an aspiring Software Development Engineer and Cross-Platform Mobile Developer based in Kolkata, India. Specialized in Flutter, Riverpod, Dart, Firebase, and Python DSA.",
  keywords: [
    "Abhimanyu Sur",
    "Flutter Developer",
    "Dart Developer",
    "Software Development Engineer",
    "Riverpod",
    "Mobile App Developer Kolkata",
    "Python DSA",
    "Tata Imagination Challenge",
    "NXTAnalytica",
    "B3NET Technologies",
    "Ping It App",
  ],
  authors: [{ name: "Abhimanyu Sur", url: "https://github.com/abhi-manyu-10" }],
  creator: "Abhimanyu Sur",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://abhimanyusur.dev",
    title: "Abhimanyu Sur | SDE & Cross-Platform Mobile Developer",
    description:
      "Crafting high-performance cross-platform mobile apps with Flutter & Riverpod and building robust algorithmic software systems.",
    siteName: "Abhimanyu Sur Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Abhimanyu Sur | SDE & Cross-Platform Mobile Developer",
    description:
      "High-performance mobile architectures, Riverpod state management, and algorithmic software engineering.",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#0b0f17] text-slate-100 selection:bg-emerald-500/30 selection:text-emerald-200">
        {children}
      </body>
    </html>
  );
}
