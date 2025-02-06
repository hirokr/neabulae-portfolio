import type { Metadata } from "next";
import { JetBrains_Mono, Space_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footers from "@/components/Footers";

const mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["100","200","300","400","500","600","700","800"],
  display: "swap",
  variable: "--jetbrains-mono",
})

const space = Space_Mono({
  subsets: ["latin"],
  weight: ["400","700"],
  display: "swap",
  variable: "--space-mono",
})

export const metadata: Metadata = {
  title: "Doctors",
  description: "Created by hirokrr || nebulae-soft",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${mono.variable} ${space.variable} justify-center flex flex-col items-center `}>
        <Header/>
        {children}
        <Footers/>
        </body>
    </html>
  );
}
