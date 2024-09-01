import { Background } from "@/components/background/feature-background";
import { Footer } from "@/components/footer/feature-footer";
import { Navigation } from "@/components/navigation/feature-navigation";
import clsx from "clsx";
import { GeistMono } from "geist/font/mono";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Safe Headers - Stay Ahead of Security Risks",
  description: `Scan your website to ensure it's secure. This tool checks for essential security headers every modern site should have, identifies missing headers, and provides easy-to-follow instructions to fix them.`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={clsx(
          inter.className,
          GeistMono.variable,
          "bg-zinc-950 text-white",
        )}
      >
        <Navigation />
        <div className="px-5 sm:px-12 md:px-24 lg:px-48 xl:px-64 2xl:px-80">
          {children}
        </div>
        <Background />
        <Footer />
      </body>
    </html>
  );
}
