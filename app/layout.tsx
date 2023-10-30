import type { Metadata } from "next";
import { Lobster } from "next/font/google";
import "./globals.css";

const font = Lobster({ subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
  title: "Meme generator",
  description: "Memeeeeee",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={font.className}>{children}</body>
    </html>
  );
}
