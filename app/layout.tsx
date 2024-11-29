import "./globals.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "minifest • Dec 14, 2024",
  description:
    "A cozy one-day festival in Berkeley celebrating prediction markets, blogging, economics, and more",
  openGraph: {
    title: "minifest • Dec 14, 2024",
    description:
      "A cozy one-day festival in Berkeley celebrating prediction markets, blogging, economics, and more",
    url: "https://minifest.is",
    siteName: "minifest",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
