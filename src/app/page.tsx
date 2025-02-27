"use client";

import { Suspense } from "react";

import Head from "next/head";

import HeroSection from "./components/home/hero-section/HeroSection";
import AdvantagesSection from "./components/home/advantages-section/AdvantagesSection";
import ReviewSection from "./components/home/review-section/ReviewSection";
import AboutProductSection from "./components/home/about-product-section/AboutProductSection";
import HowItWorkSection from "./components/home/how-it-work-section/HowItWorkSection";
import FrequentlyQestionSection from "./components/home/frequently-question-section/FrequentlyQestionSection";
import BenefitsSection from "./components/home/benefits-section/BenefitsSection";
import DeliverySection from "./components/home/delivery-section/DeliverySection";
import SupportSection from "./components/home/support-section/SupportSection";
import { translations } from "./utils/translations";
import { useSearchParams } from "next/navigation";

export default function Home() {
  const searchParams = useSearchParams();
  const locale = (searchParams.get("lang") as "en" | "pl" | "ua") || "ua";
  const t = translations[locale] || translations.ua;

  return (
    <Suspense>
      <Head>
        <title>{t.title || "HeatKit - Pellet Burner Solutions"}</title>
        <meta
          name="description"
          content={
            t.description ||
            "Sale of pellet burner in disassembled form. Save up to 50%!"
          }
        />
        <meta
          name="keywords"
          content="пелетний пальник, економія на опаленні, HeatKit, енергетична зброя, пелети для опалення, купити пальник, самостійне збирання, екологічне опалення, енергоефективність, опалення будинку, пелетний котел, тепло для дому, дешеве опалення, якісні матеріали, теплова зброя, pellet burner, heating savings, energy weapon, pellet heating, buy burner, DIY assembly, eco-friendly heating, energy efficiency, home heating, pellet boiler, home warmth, cheap heating, high-quality materials, thermal weapon, palnik na pelety, oszczędność na ogrzewaniu, broń energetyczna, ogrzewanie pelletem, kup palnik, samodzielny montaż, ekologiczne ogrzewanie, efektywność energetyczna, ogrzewanie domu, kocioł na pelety, ciepło dla domu, tanie ogrzewanie, wysokiej jakości materiały, broń termiczna"
        />
        <link
          rel="alternate"
          href="https://heat-kit.vercel.app/?lang=en"
          hrefLang="en"
        />
        <link
          rel="alternate"
          href="https://heat-kit.vercel.app/?lang=pl"
          hrefLang="pl"
        />
        <link
          rel="alternate"
          href="https://heat-kit.vercel.app/?lang=ua"
          hrefLang="uk"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <HeroSection />
      <AdvantagesSection />
      <ReviewSection />
      <AboutProductSection />
      <HowItWorkSection />
      <FrequentlyQestionSection />
      <BenefitsSection />
      <DeliverySection />
      <SupportSection />
    </Suspense>
  );
}
