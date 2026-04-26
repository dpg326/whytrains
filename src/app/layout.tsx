import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "WhyTrains",
  description: "A data-driven case for train-first policy",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
