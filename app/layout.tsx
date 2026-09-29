import type { Metadata } from "next";
import Link from "next/link";
import Nav from "./Nav";
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

export const metadata: Metadata = {
  title: "Phu Nguyen",
  description: "Personal website and projects",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-[#1e1e1e] text-[#d4d4d4]">
        <header className="flex items-end justify-between border-b border-[#3c3c3c] bg-[#252526] pl-6">
          <h1 className="self-center py-3 font-mono text-lg font-bold text-white">
            <Link href="/" className="hover:text-[#569cd6]">
              <span className="text-[#569cd6]">&lt;</span>Phu Nguyen<span className="text-[#569cd6]"> /&gt;</span>
            </Link>
          </h1>
          <Nav />
        </header>
        {children}
      </body>
    </html>
  );
}


