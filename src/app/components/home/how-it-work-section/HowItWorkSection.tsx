"use client";
import React from "react";

import { useSearchParams } from "next/navigation";
import { translations } from "@/app/utils/translations";

const HowItWorkSection = () => {
  const searchParams = useSearchParams();
  const locale = searchParams.get("lang") as "en" | "pl" | "ua" | "rou";
  const t = translations[locale] || translations.ua;

  return (
    <section className="bg-gray-100 py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          {t.howItWorks.title}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">
              {t.howItWorks.stepByStep.title}
            </h3>
            <p className="text-gray-700">
              {t.howItWorks.stepByStep.description}
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">
              {t.howItWorks.videoInstructions.title}
            </h3>
            <p className="text-gray-700">
              {t.howItWorks.videoInstructions.description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorkSection;
