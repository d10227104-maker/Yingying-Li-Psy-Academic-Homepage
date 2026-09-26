import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";
import "katex/dist/katex.min.css";
import { Providers } from "@/components/providers";
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter"
});

export const metadata: Metadata = {
  title: "Yingying Li | Psychology & Intervention Research",
  description:
    "Yingying Li: psychological counselor and researcher in Leuven, Belgium. Intervention studies, longitudinal research, self-concept, self-esteem, and psychotherapy process and outcomes.",
  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg"
  },
  openGraph: {
    title: "Yingying Li | Psychology & Intervention Research",
    description:
      "Yingying Li: psychological counselor and researcher in Leuven, Belgium. Intervention studies, longitudinal research, self-concept, self-esteem, and psychotherapy process and outcomes.",
    siteName: "Yingying Li | Psychology & Intervention Research",
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Yingying Li | Psychology & Intervention Research",
    description:
      "Yingying Li: psychological counselor and researcher in Leuven, Belgium. Intervention studies, longitudinal research, self-concept, self-esteem, and psychotherapy process and outcomes."
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans`}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
