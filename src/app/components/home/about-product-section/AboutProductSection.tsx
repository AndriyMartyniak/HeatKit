"use client";
import React from "react";

import Image from "next/image";
import dynamic from "next/dynamic";
import { useSearchParams } from "next/navigation";
import { translations } from "@/app/utils/translations";

const BurnerModal = dynamic(
  () => import("@/components/3DModels/BurnerModal/BurnerModal"),
  {
    ssr: false,
    loading: () => <div className="loading-spinner">3D model loading...</div>,
  }
);

const AboutProductSection = () => {
  const searchParams = useSearchParams();
  const locale = searchParams.get("lang") as "en" | "pl" | "ua" | "rou";
  const t = translations[locale] || translations.ua;

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          {t.aboutProduct.title}
        </h2>

        <BurnerModal />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-20">
          <div>
            <h3 className="text-xl font-bold mb-4">
              {t.aboutProduct.burnerDetails.title}
            </h3>
            <p className="text-gray-700">
              {t.aboutProduct.burnerDetails.description}
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">
              {t.aboutProduct.workingPrinciple.title}
            </h3>
            <p className="text-gray-700">
              {t.aboutProduct.workingPrinciple.description}
            </p>
          </div>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="relative h-64">
            <Image
              src="/images/pellet-burner-1.jpg"
              alt="pellet-burner#1"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
          <div className="relative h-64">
            <Image
              src="/images/pellet-burner-2.jpg"
              alt="pellet-burner#2"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
          <div className="relative h-64">
            <Image
              src="/images/pellet-burner-3.jpg"
              alt="pellet-burner#3"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutProductSection;
