import type { Metadata } from "next";
import { Poppins, Montserrat } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { siteConfig } from "@/content/site";

const poppins = Poppins({ 
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-poppins",
});

const montserrat = Montserrat({ 
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "rijschool",
    "rijlessen",
    "auto rijbewijs",
    "motor rijbewijs",
    "rijschool Nederland",
    "proefles",
    "CBR examen",
  ],
  authors: [{ name: siteConfig.name }],
  icons: {
    icon: "/images/myline-logo.png",
    shortcut: "/images/myline-logo.png",
    apple: "/images/myline-logo.png",
  },
  openGraph: {
    type: "website",
    locale: "nl_NL",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: "/images/myline-logo.png",
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: ["/images/myline-logo.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="nl">
      <body className={`${poppins.variable} ${montserrat.variable} min-h-screen flex flex-col font-sans`}>
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
