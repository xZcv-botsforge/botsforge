import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ReactElement } from "react";

const borel = localFont({
  src: "fonts/Borel.ttf",
  variable: "--font-borel"
});

const leaguespartan = localFont({
  src: "fonts/LeagueSpartan.ttf",
  variable: "--font-spartan"
});

const poppins = localFont({
  src: "fonts/Poppins.ttf",
  variable: "--font-poppins"
});

const quicksand = localFont({
  src: "fonts/Quicksand.ttf",
  variable: "--font-quicksand"
})

export const metadata: Metadata = {
  title: "botsforge.com",
  description: "Develop next gen-zBots.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>): ReactElement {
  return (
    <html lang="en" className="scroll-smooth bg-base-200">
      <body className={`${borel.variable} ${leaguespartan.variable} ${poppins.variable} ${quicksand.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
