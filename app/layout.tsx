import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CAPTAINO",
  description:
    "CAPTAINO - 精品时尚购物平台，提供优质男装、女装、皮具、手表等时尚单品",
  generator: "CAPTAINO",
  icons: {
    icon: [
      {
        url: "/6b6cf1d6bb7b344fef1a43b6846ad835.png",
        sizes: "any",
        type: "image/png",
      },
    ],
    shortcut: "/6b6cf1d6bb7b344fef1a43b6846ad835.png",
    apple: "/6b6cf1d6bb7b344fef1a43b6846ad835.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
