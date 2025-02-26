"use client";
import React from "react";

import { useSearchParams } from "next/navigation";
import { translations } from "@/app/utils/translations";

const FrequentlyQestionSection = () => {
  const searchParams = useSearchParams();
  const locale = searchParams.get("lang") as "en" | "pl" | "ua";
  const t = translations[locale] || translations.ua;

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">{t.faq.title}</h2>
        <div className="space-y-4">
          {t.faq.items.map(
            (
              item: {
                question: string;
                answer: string;
              },
              idx: number
            ) => (
              <div
                key={`faq-item-${idx}`}
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <h3 className="text-xl font-bold mb-2">{item.question}</h3>
                <p className="text-gray-700">{item.answer}</p>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default FrequentlyQestionSection;
