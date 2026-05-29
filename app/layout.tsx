import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Nightshift Systems | Software Systems for Operators",
    template: "%s | Nightshift Systems"
  },
  description:
    "Nightshift Systems is a focused Perth software studio building FleetTrack Pro and practical software tools for fleet, operations, and business workflows.",
  metadataBase: new URL("https://nightshiftsystems.com.au"),
  applicationName: "Nightshift Systems",
  alternates: {
    canonical: "/"
  },
  icons: {
    icon: "/icon.svg"
  },
  other: {
    "contact:email": "support@nightshiftsystems.com.au"
  },
  openGraph: {
    title: "Nightshift Systems | Software Systems for Operators",
    description:
      "A focused Perth software studio building FleetTrack Pro and practical tools for fleet, operations, and business workflows.",
    url: "https://nightshiftsystems.com.au",
    siteName: "Nightshift Systems",
    images: [
      {
        url: "/images/brand/nightshift-systems-logo-light.png",
        width: 2000,
        height: 2000,
        alt: "Nightshift Systems logo"
      }
    ],
    locale: "en_AU",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Nightshift Systems | Software Systems for Operators",
    description:
      "A focused Perth software studio building FleetTrack Pro and practical tools for fleet, operations, and business workflows.",
    images: ["/images/brand/nightshift-systems-logo-light.png"]
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
