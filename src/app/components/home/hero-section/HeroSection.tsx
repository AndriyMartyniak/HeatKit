"use client";
import React from "react";

import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { translations } from "@/app/utils/translations";

const HeroSection = () => {
  const searchParams = useSearchParams();
  const locale = searchParams.get("lang") as "en" | "pl" | "ua" | "rou";
  const t = translations[locale] || translations.ua;

  const scrollToSupport = () => {
    const supportSection = document.getElementById("contact");
    if (supportSection) {
      supportSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="bg-[#FFD700] text-black py-20 relative">
      <div className="container mx-auto px-4 text-center relative z-10">
        <h2 className="text-4xl font-bold mb-4">{t.hero.title}</h2>
        <p className="text-xl mb-8">{t.hero.subtitle}</p>
        <a
          onClick={scrollToSupport}
          className="bg-black cursor-pointer text-[#FFD700] px-6 py-3 rounded-full font-semibold hover:bg-gray-800 transition duration-300"
        >
          {t.hero.cta}
        </a>
      </div>

      <div className="absolute inset-0 overflow-hidden">
        <Image
          src="/images/pellet-burner-1.jpg"
          alt="pellet burner"
          layout="fill"
          objectFit="cover"
          className="opacity-25"
        />
      </div>
    </section>
  );
};

export default HeroSection;
