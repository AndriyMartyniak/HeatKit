"use client";
import React from "react";

import { useSearchParams } from "next/navigation";
import { translations } from "@/app/utils/translations";

const Footer = () => {
  const searchParams = useSearchParams();
  const locale = searchParams.get("lang") as "en" | "pl" | "ua" | "rou";
  const t = translations[locale] || translations.ua;

  return (
    <footer className="bg-gray-900 text-white py-6">
      <div className="container mx-auto px-4 text-center">
        <p>{t.footer.text}</p>
      </div>
    </footer>
  );
};

export default Footer;
