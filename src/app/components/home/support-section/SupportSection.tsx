"use client";
import React from "react";

import { useSearchParams } from "next/navigation";
import { translations } from "@/app/utils/translations";

const SupportSection = () => {
  const searchParams = useSearchParams();
  const locale = searchParams.get("lang") as "en" | "pl" | "ua" | "rou";
  const t = translations[locale] || translations.ua;

  return (
    <section id="contact" className="bg-black text-white py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          {t.contactAndSupport.title}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">
              {t.contactAndSupport.socials.title}
            </h3>
            <p className="text-gray-300">
              {t.contactAndSupport.socials.description}
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">
              {t.contactAndSupport.contactForm.title}
            </h3>
            <form>
              <div className="mb-4">
                <label className="block text-sm font-bold mb-2" htmlFor="name">
                  {t.contactAndSupport.contactForm.name}
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="name"
                  type="text"
                  placeholder={t.contactAndSupport.contactForm.name}
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-bold mb-2" htmlFor="email">
                  {t.contactAndSupport.contactForm.email}
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="email"
                  type="email"
                  placeholder={t.contactAndSupport.contactForm.email}
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-sm font-bold mb-2"
                  htmlFor="message"
                >
                  {t.contactAndSupport.contactForm.message}
                </label>
                <textarea
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="message"
                  placeholder={t.contactAndSupport.contactForm.message}
                ></textarea>
              </div>
              <div className="flex items-center justify-between">
                <button
                  className="bg-[#FFD700] text-black px-6 py-3 rounded-full font-semibold hover:bg-[#FFC300] transition duration-300"
                  type="button"
                >
                  {t.contactAndSupport.sendBtn}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SupportSection;
