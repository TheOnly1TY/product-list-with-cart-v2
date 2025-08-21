import type { Metadata } from "next";
import { Red_Hat_Text } from "next/font/google";
import "./globals.css";

import { ProductProvider } from "@/app/_context/ProductContext";

const redHat = Red_Hat_Text({
  variable: "--font-red-hat-text",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Product List",
  description: "Browse products and manage your cart in this app.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${redHat.className} antialiased`}>
        <ProductProvider>{children}</ProductProvider>
      </body>
    </html>
  );
}
