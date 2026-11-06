import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://makarji.com"),
  title: {
    default: "MAKAR JI | Tools Made With Tradition",
    template: "%s | MAKAR JI",
  },
  description:
    "Traditional Indian handmade iron tools manufacturer. Authentic village blacksmith crafted Paniki, Korana, Kuradi, Katuri, Daab, Kodal, Churi, Kulhadi, Hasua, Khurpi, Shovel, and Gaiti directly from the maker.",
  keywords: [
    "handmade iron tools",
    "traditional Indian blacksmith",
    "village iron tools",
    "Paniki baithi",
    "Korana scraper",
    "Kuradi axe",
    "Katuri cutter",
    "Daab cleaver",
    "Kodal phawra",
    "Kulhadi",
    "Hasua sickle",
    "Khurpi trowel",
    "Gaiti mattock",
    "Indian blacksmith manufacturer",
    "MAKAR JI",
  ],
  authors: [{ name: "MAKAR JI" }],
  creator: "MAKAR JI",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://makarji.com",
    title: "MAKAR JI | Tools Made With Tradition",
    description:
      "Authentic handmade iron tools by a traditional village blacksmith. Sourced directly from the artisan workshop for farmers, woodworkers, and hardware stockists.",
    siteName: "MAKAR JI",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          href="https://fonts.googleapis.com/css2?family=Cinzel:wght@500;600;700;800&family=Plus+Jakarta+Sans:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full flex flex-col font-sans bg-ivory text-main-text antialiased selection:bg-terracotta selection:text-white">
        {children}
      </body>
    </html>
  );
}
