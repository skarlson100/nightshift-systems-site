import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nightshift Systems | FleetTrack Pro & Operational Software",
  description:
    "Australian operational software company behind FleetTrack Pro and selected internal software systems.",
  metadataBase: new URL("https://nightshiftsystems.com.au"),
  openGraph: {
    title: "Nightshift Systems | FleetTrack Pro & Operational Software",
    description:
      "Australian operational software company behind FleetTrack Pro and selected internal software systems.",
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
