import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar/navbar";
import clsx from "clsx";
import localFont from 'next/font/local'


const inter = Inter({ subsets: ["latin"] });

// const rabbitmerge = localFont({
//   src: [
//     {
//       path: "../fonts/Rabbit-Merge-Regular.woff2",
//       weight: "200",
//       style: "normal",
//     },
//     {
//       path: "../fonts/Rabbit-Merge-Regular.woff2",
//       weight: "300",
//       style: "normal",
//     },
//     {
//       path: "../fonts/Rabbit-Merge-Regular.woff2",
//       weight: "400",
//       style: "normal",
//     },
//     {
//       path: "../fonts/Rabbit-Merge-Regular.woff2",
//       weight: "700",
//       style: "normal",
//     },
//   ],
// })

// const rabbitmerge = localFont({
//   // src: "../fonts/Rabbit-Merge-Regular.woff2",
//   src: "../fonts/Grotesk-Noto-Thin.woff2"
// });

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
          <div className="mb-[50px]">
            <Navbar />
          </div>
          {children}
        </div>
      </body>
    </html>
  );
}
