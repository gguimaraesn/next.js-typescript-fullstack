import "./globals.css";
import Navbar from "@/components/Navbar";
import { JetBrains_Mono } from "next/font/google";
import type { Metadata } from "next";

const jetBrainsMono = JetBrains_Mono({ subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
  title: "Next.js Project",
  description: "A Next.js project with TailwindCSS and Typescript",
  keywords: "Next.js, TailwindCSS, Typescript",
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={jetBrainsMono.className}>
        <Navbar />
        <main className="max-w-3xl mx-auto py-10">{children}</main>
      </body>
    </html>
  );
}
