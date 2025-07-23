/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import "./globals.css";
import "animate.css";
import { Author } from "next/dist/lib/metadata/types/metadata-types";

import { IBM_Plex_Mono } from "next/font/google";
import { Syne } from "next/font/google";
import Navigation from "./components/Navigation";

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-header",
});

const syne = Syne({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: "MyCah Pleasant Photography",
  description:
    "Photographer based in North Georgia, focusing on travel and wildlife. Available for events and portrait sessions.",
  authors: "MyCah Pleasant" as Author,
  keywords: [
    "photography",
    "prints",
    "North Georgia",
    "MyCah Pleasant",
    "landscapes",
    "wildlife",
    "travel",
    "for hire",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${ibmPlexMono.variable} ${syne.variable}`}>
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="64x64"
          href="/favicon-64x64.png"
        />
      </head>
      <body className={`antialiased bg-brand-navy text-brand-off-white `}>
        <div className="z-[-1] fixed inset-0 bg-[url('/dimension.png')] bg-repeat opacity-20 pointer-events-none" />
        <Navigation />
        <div className="z-10">{children}</div>
        <footer>
          <div className="mb-3 text-white text-sm text-center">
            <p>
              &copy; {new Date().getFullYear()} MyCah Pleasant. All rights
              reserved.
            </p>
            <p>Unauthorized use is not permitted.</p>
            <a href="/contact" className="underline">
              Contact me
            </a>{" "}
            for licensing information.
          </div>
        </footer>
      </body>
    </html>
  );
}
