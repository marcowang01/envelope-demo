import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import clsx from "clsx";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Envelope",
  description: "AI-first email",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={clsx(inter.className)}>
        <div className="py-[50px] min-h-screen flex flex-col w-[1200px] mx-auto">
          <Navbar />
          {children}
        </div>
      </body>
    </html>
  );
}
