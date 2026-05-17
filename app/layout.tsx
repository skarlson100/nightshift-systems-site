import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nightshift Systems | Software & Automation Systems",
  description:
    "Australian software and automation studio building custom apps, SaaS products, fleet systems, and operational tools.",
  metadataBase: new URL("https://nightshiftsystems.com.au"),
  openGraph: {
    title: "Nightshift Systems | Software & Automation Systems",
    description:
      "Australian software and automation studio building custom apps, SaaS products, fleet systems, and operational tools.",
    url: "https://nightshiftsystems.com.au",
    siteName: "Nightshift Systems",
    locale: "en_AU",
    type: "website"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-AU">
      <body>{children}</body>
    </html>
  );
}
