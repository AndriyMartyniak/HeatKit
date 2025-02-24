"use client";

import { useRef } from "react";

import Head from "next/head";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import ukTranslations from "../../public/locales/uk.json";
import enTranslations from "../../public/locales/en.json";
import plTranslations from "../../public/locales/pl.json";
import BurnerModal from "@/components/3DModels/BurnerModal/BurnerModal";

const translations = {
  uk: ukTranslations,
  en: enTranslations,
  pl: plTranslations,
};

export default function Home() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const contactSectionRef = useRef<HTMLDivElement>(null);

  const scrollToContact = () => {
    contactSectionRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const locale = searchParams.get("lang") as "en" | "pl" | "uk";
  const t = translations[locale] || translations.uk;

  const changeLanguage = (lang: string) => {
    const newUrl = `?lang=${lang}`;
    router.push(newUrl, { scroll: false });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>{t.title}</title>

        <meta name="description" content={t.description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header */}
      <header className="bg-[#FFD700] text-black py-4 shadow-lg">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <h1 className="text-3xl font-bold">{t.header.title}</h1>
          <div className="flex gap-8">
            {["en", "uk", "pl"].map((lang) => (
              <p
                key={lang}
                className={`text-lg cursor-pointer ${
                  locale === lang ? "underline font-bold" : ""
                }`}
                onClick={() => changeLanguage(lang)}
              >
                {lang.toUpperCase()}
              </p>
            ))}
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-[#FFD700] text-black py-20 relative">
        {/* Контент секції */}
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl font-bold mb-4">{t.hero.title}</h2>
          <p className="text-xl mb-8">{t.hero.subtitle}</p>
          <a
            onClick={scrollToContact}
            className="bg-black cursor-pointer text-[#FFD700] px-6 py-3 rounded-full font-semibold hover:bg-gray-800 transition duration-300"
          >
            {t.hero.cta}
          </a>
        </div>

        {/* Фонове зображення з opacity */}
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src="/images/pellet-burner-1.jpg"
            alt="Пелетний пальник"
            layout="fill"
            objectFit="cover"
            className="opacity-25"
          />
        </div>
      </section>

      {/* Основні переваги продукту */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            {t.advantages.title}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {t.advantages.items.map(
              (item: { title: string; description: string }, idx: number) => (
                <div
                  key={`adv-item-${idx}`}
                  className="bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow duration-300"
                >
                  <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                  <p className="text-gray-700">{item.description}</p>
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {/* Відгуки покупців */}
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
                  <p className="text-gray-900 font-bold mt-4">
                    – {item.author}
                  </p>
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {/* Про продукт */}
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

      {/* Як це працює? */}
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

      {/* Часті запитання та відповіді */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            {t.faq.title}
          </h2>
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

      {/* Переваги та економія */}
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

      {/* Доставка та оплата */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            {t.deliveryAndPayment.title}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {t.deliveryAndPayment.items.map(
              (
                item: {
                  title: string;
                  description: string;
                },
                idx: number
              ) => (
                <div
                  key={`delivery&pay-item-${idx}`}
                  className="bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow duration-300"
                >
                  <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                  <p className="text-gray-700">{item.description}</p>
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {/* Контакти та підтримка */}
      <section
        id="contact"
        ref={contactSectionRef}
        className="bg-black text-white py-20"
      >
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
                  <label
                    className="block text-sm font-bold mb-2"
                    htmlFor="name"
                  >
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
                  <label
                    className="block text-sm font-bold mb-2"
                    htmlFor="email"
                  >
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

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-6">
        <div className="container mx-auto px-4 text-center">
          <p>{t.footer.text}</p>
        </div>
      </footer>
    </div>
  );
}
