import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "My Next App",
  description: "Generated by create next app",
};
  
  export default function RootLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <html lang="en">
        <body >
          <header className="bg-red-400 p-4">
            <p>Header Component from root layout</p>
          </header>
          {children}
          <footer className="bg-neutral-600 p-4">
            <p>This is footer from root layout.</p>
          </footer>
          </body>
      </html>
    )
  }
  