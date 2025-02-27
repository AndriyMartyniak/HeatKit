"use client";
import React from "react";

import { useSearchParams } from "next/navigation";
import { translations } from "@/app/utils/translations";

const ReviewSection = () => {
  const searchParams = useSearchParams();
  const locale = searchParams.get("lang") as "en" | "pl" | "ua" | "rou";
  const t = translations[locale] || translations.ua;

  return (
    <section className="bg-gray-100 py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          {t.reviews.title}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {t.reviews.items.map(
            (item: { text: string; author: string }, idx: number) => (
              <div
                key={`review-item-${idx}`}
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <p className="text-gray-700">{item.text}</p>
                <p className="text-gray-900 font-bold mt-4">– {item.author}</p>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default ReviewSection;
