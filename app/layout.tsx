import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "@fontsource/dm-sans"; // Defaults to weight 400

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Bakery App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} overflow-x-hidden`}>{children}</body>
    </html>
  );
}
