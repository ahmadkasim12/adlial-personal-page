import type { Metadata } from "next";
import { Geist, Geist_Mono, Anonymous_Pro } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const anonymousPro = Anonymous_Pro({
  weight: '400',
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Adlial's Personal Page",
  description: "Adlial's Personal Page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${anonymousPro.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
