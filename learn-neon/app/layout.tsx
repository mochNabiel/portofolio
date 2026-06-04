import type { Metadata } from "next";
import {
  Anton,
  Caveat,
  JetBrains_Mono,
  Poppins,
} from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const jetbrains = JetBrains_Mono({
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-sans",
});

const anton = Anton({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-anton",
});

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
})

const marker = Caveat({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-marker",
})

export const metadata: Metadata = {
  title: "Nabiel - Fullstack Developer",
  description: "I'm a Fullstack Developer from Indonesia",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn(
        "h-full",
        "antialiased",
        anton.variable,
        "font-sans",
        jetbrains.variable,
        marker.variable,
        poppins.variable
      )}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
