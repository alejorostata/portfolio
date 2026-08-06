import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SkipLink } from "@/components/SkipLink";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Alejo Rostata | Software Engineering Team Lead & Full-Stack Architect",
  description: "Official portfolio of Alejo Rostata — Seasoned Software Engineering Team Lead & Full-Stack Architect with 10+ years experience in Java, Next.js, Vue.js, Flutter, Docker & AWS.",
  keywords: [
    "Alejo Rostata",
    "Software Engineering Team Lead",
    "Full-Stack Developer",
    "Java Spring Boot",
    "Next.js",
    "Vue.js",
    "Flutter",
    "React Native",
    "System Architect",
    "ACM-ICPC",
    "Naga City Philippines"
  ],
  authors: [{ name: "Alejo Rostata" }],
  creator: "Alejo Rostata",
  openGraph: {
    title: "Alejo Rostata | Software Engineering Team Lead & Full-Stack Architect",
    description: "Seasoned Software Engineer with nearly a decade of experience leading, architecture, and building scalable full-stack web, desktop & mobile applications.",
    url: "https://github.com/alejorostata/portfolio",
    siteName: "Alejo Rostata Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Alejo Rostata | Lead Software Engineer",
    description: "Software Engineering Team Lead & Full-Stack Architect specializing in Java, Next.js, Vue.js, Flutter, and DevOps.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased dark`}
    >
      <body className="min-h-full flex flex-col bg-slate-950 text-slate-100 selection:bg-emerald-500/30 selection:text-white">
        <SkipLink />
        {children}
      </body>
    </html>
  );
}
