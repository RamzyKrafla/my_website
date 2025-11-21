import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

import { Background } from "@/components/Background";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ramzy Rafla | Portfolio",
  description: "Electrical & Electronic Engineering Student at EPFL",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={cn(inter.className, "antialiased text-foreground")}>
        <Background />
        <div className="relative z-10">
          {children}
        </div>
      </body>
    </html>
  );
}
