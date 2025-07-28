import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import { Toaster } from "@/components/ui/sonner";
import { Navigation } from "@/components/navigation";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Mitchell White - AI Engineer & Product Builder",
  description: "Portfolio of Mitchell White - AI Engineer specializing in building innovative products with cutting-edge technology",
  keywords: ["AI Engineer", "Product Builder", "Portfolio", "Mitchell White"],
  authors: [{ name: "Mitchell White" }],
  openGraph: {
    title: "Mitchell White - AI Engineer & Product Builder",
    description: "Portfolio showcasing AI engineering and product development projects",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} font-sans antialiased`}
      >
        <Providers>
          <Navigation />
          {children}
          <Toaster />
        </Providers>
      </body>
    </html>
  );
}
