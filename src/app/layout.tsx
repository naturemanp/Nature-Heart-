import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nature Heart",
  description:
    "Every Connection Begins with Nature Heart. Discover friendships, communities, and meaningful connections.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
  }
