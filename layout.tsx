import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Singhs Smart Shield | West Midlands Security & Electrical Services",
  description:
    "Professional CCTV, alarm, electrical, access control, networking, intercom, and nurse call services across the West Midlands.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
