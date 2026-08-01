import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Providers } from "@/components/Providers";

const inter = Inter({ subsets: ["latin"] });

const siteUrl = "https://www.ramzyrafla.com";
const basePath = process.env.PAGES_BASE_PATH ?? "";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Ramzy Rafla | Portfolio",
  description:
    "EPFL Electrical & Electronic Engineering student building applied ML systems — medical imaging, RAG, and technical delivery.",
  icons: {
    // Leading slash + basePath so GitHub Pages project deploys resolve correctly
    icon: [{ url: `${basePath}/rkr_favicon_dark.jpg`, type: "image/jpeg" }],
  },
  openGraph: {
    title: "Ramzy Rafla | Portfolio",
    description:
      "EPFL Electrical & Electronic Engineering student building applied ML systems — medical imaging, RAG, and technical delivery.",
    url: siteUrl,
    siteName: "Ramzy Rafla",
    images: [{ url: "/profile.jpg", width: 800, height: 1000, alt: "Ramzy Rafla" }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ramzy Rafla | Portfolio",
    description:
      "EPFL Electrical & Electronic Engineering student building applied ML systems.",
    images: ["/profile.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(inter.className, "antialiased text-foreground bg-background")}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
