import { Suspense } from "react";
import type { Metadata } from "next";
import { Ubuntu } from "next/font/google";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import { SEO_KEYWORDS } from "./utils/seo-keywords";
import "./globals.css";

const ubuntuSans = Ubuntu({
  weight: ["400", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "HeatKit | Pellet Burner Solutions",
    template: "%s | HeatKit",
  },
  description:
    "Sale of pellet burners in disassembled form. Save up to 50% with HeatKit!",
  keywords: SEO_KEYWORDS,
  openGraph: {
    title: "HeatKit - Pellet Burner Solutions",
    description: "Sale of pellet burners in disassembled form. Save up to 50%!",
    url: "https://heat-kit.vercel.app/",
    images: ["/images/pellet-burner-1.jpg"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "HeatKit - Pellet Burner Solutions",
    description: "Sale of pellet burners in disassembled form. Save up to 50%!",
    images: ["/images/pellet-burner-1.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${ubuntuSans.className} antialiased`}>
        <div className="min-h-screen bg-gray-50">
          <Suspense>
            <Header />
            {children}
            <Footer />
          </Suspense>
        </div>
      </body>
    </html>
  );
}
