"use client";
import React from "react";
import { translations } from "@/app/utils/translations";
import { useRouter, useSearchParams } from "next/navigation";
import LanguageDropdown from "../dropdowns/LanguageDropdown";

const Header = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const locale = searchParams.get("lang") as "en" | "pl" | "ua" | "rou";
  const t = translations[locale] || translations.ua;

  const changeLanguage = (lang: string) => {
    const newUrl = `?lang=${lang}`;
    router.push(newUrl, { scroll: false });
  };

  return (
    <header className="bg-[#FFD700] text-black py-4 shadow-lg">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <h1 className="text-3xl font-bold">{t.header.title}</h1>
        <LanguageDropdown
          currentLang={locale || "ua"}
          onChangeLang={changeLanguage}
        />
      </div>
    </header>
  );
};

export default Header;
