import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Nightshift Systems | Practical Software for Operators",
    template: "%s | Nightshift Systems"
  },
  description:
    "Nightshift Systems builds FleetTrack Pro and practical software for small operators, vehicle fleets, and operational businesses.",
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
    title: "Nightshift Systems | Practical Software for Operators",
    description:
      "Nightshift Systems builds FleetTrack Pro and practical software for small operators, vehicle fleets, and operational businesses.",
    url: "https://nightshiftsystems.com.au",
    siteName: "Nightshift Systems",
    images: [
      {
        url: "/images/fleettrack/dashboard.jpeg",
        width: 946,
        height: 2049,
        alt: "FleetTrack Pro dashboard screenshot"
      }
    ],
    locale: "en_AU",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Nightshift Systems | Practical Software for Operators",
    description:
      "Nightshift Systems builds FleetTrack Pro and practical software for small operators, vehicle fleets, and operational businesses.",
    images: ["/images/fleettrack/dashboard.jpeg"]
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
