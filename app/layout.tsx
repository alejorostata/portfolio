import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
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
  metadataBase: new URL("https://alejorostata.vercel.app"),
  title: "Alejo Rostata | Full Stack Software Engineer & Team Lead",
  description: "Official portfolio of Alejo Rostata — Seasoned Full Stack Software Engineer & Team Lead with ~10 years experience in Java, Next.js, Vue.js, Flutter, Supabase & React Native.",
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
    description: "Seasoned Software Engineer with nearly a decade of experience leading, architecting, and building scalable full-stack web, desktop & mobile applications.",
    url: "https://alejorostata.vercel.app",
    siteName: "Alejo Rostata Portfolio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Alejo Rostata — Full Stack Software Engineer & Team Lead",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Alejo Rostata | Full Stack Software Engineer & Team Lead",
    description: "Full Stack Software Engineer & Team Lead specializing in Java, Next.js, Vue.js, Flutter, Supabase, and React Native.",
    images: ["/og-image.jpg"],
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
      suppressHydrationWarning
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function() {
              try {
                var saved = localStorage.getItem('portfolio-theme');
                if (saved === 'light') {
                  document.documentElement.classList.remove('dark');
                  document.documentElement.classList.add('light');
                } else {
                  document.documentElement.classList.add('dark');
                  document.documentElement.classList.remove('light');
                }
                if (window.scrollY > 20) {
                  document.documentElement.classList.add('is-scrolled');
                }
              } catch(e) {}
            })();`,
          }}
        />
      </head>
      <body
        className="min-h-full flex flex-col bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-100 transition-colors duration-200"
        suppressHydrationWarning
      >
        <SkipLink />
        {children}
        {/* GoatCounter Analytics — privacy-friendly, no cookies, GDPR compliant */}
        <Script
          data-goatcounter="https://alejorostata.goatcounter.com/count"
          src="//gc.zgo.at/count.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
