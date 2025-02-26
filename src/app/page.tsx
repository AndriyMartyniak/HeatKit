"use client";

import { Suspense } from "react";

import Head from "next/head";
import { useSearchParams } from "next/navigation";

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

export default function Home() {
  const searchParams = useSearchParams();
  const locale = searchParams.get("lang") as "en" | "pl" | "ua";
  const t = translations[locale] || translations.ua;

  return (
    <Suspense>
      <Head>
        <title>{t.title}</title>

        <meta name="description" content={t.description} />
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
