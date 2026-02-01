import type { Metadata } from "next";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import HeaderNav from "./components/HeaderNav";

export const metadata: Metadata = {
  title: "Alamo Ranch Firearms",
  description: "Firearms and suppressors transferred in full compliance.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <HeaderNav />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
