"use client";
import React from "react";

import { useSearchParams } from "next/navigation";
import { translations } from "@/app/utils/translations";

const BenefitsSection = () => {
  const searchParams = useSearchParams();
  const locale = searchParams.get("lang") as "en" | "pl" | "ua" | "rou";
  const t = translations[locale] || translations.ua;

  return (
    <section className="bg-[#FFD700] text-black py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          {t.benefitsAndSavings.title}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {t.benefitsAndSavings.items.map(
            (
              item: {
                title: string;
                description: string;
              },
              idx: number
            ) => (
              <div key={`benef&save-item-${idx}`}>
                <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                <p className="text-gray-800">{item.description}</p>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
