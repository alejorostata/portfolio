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
  title: "Alejo Rostata | Full Stack Software Engineer & Team Lead",
  description: "Official portfolio of Alejo Rostata — Seasoned Full Stack Software Engineer & Team Lead with 10+ years experience in Java, Next.js, Vue.js, Flutter, Supabase & C#.",
  keywords: [
    "Alejo Rostata",
    "Software Engineer & Team Lead",
    "Full-Stack Developer",
    "Java Spring Boot",
    "Next.js",
    "Vue.js",
    "Flutter",
    "React Native",
    "Supabase",
    "ACM-ICPC",
    "Naga City Philippines"
  ],
  authors: [{ name: "Alejo Rostata" }],
  creator: "Alejo Rostata",
  openGraph: {
    title: "Alejo Rostata | Full Stack Software Engineer & Team Lead",
    description: "Seasoned Software Engineer with nearly a decade of experience leading, architecture, and building scalable full-stack web, desktop & mobile applications.",
    url: "https://github.com/alejorostata/portfolio",
    siteName: "Alejo Rostata Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Alejo Rostata | Full Stack Software Engineer & Team Lead",
    description: "Full Stack Software Engineer & Team Lead specializing in Java, Next.js, Vue.js, Flutter, Supabase, C#, and AI tools.",
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
      <body className="min-h-full flex flex-col bg-slate-950 text-slate-100 selection:bg-indigo-500/30 selection:text-white">
        <SkipLink />
        {children}
      </body>
    </html>
  );
}
