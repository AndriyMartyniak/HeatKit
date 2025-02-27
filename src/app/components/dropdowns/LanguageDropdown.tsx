import React, { useState, useEffect, useRef } from "react";

const languages = [
  { code: "en", name: "English" },
  { code: "ua", name: "Українська" },
  { code: "pl", name: "Polski" },
  { code: "rou", name: "Română" },
];

const LanguageDropdown = ({
  currentLang,
  onChangeLang,
}: {
  currentLang: string;
  onChangeLang: (lang: string) => void;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const currentLanguageName =
    languages.find((lang) => lang.code === currentLang)?.name ||
    currentLang.toUpperCase();

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={toggleDropdown}
        className={`px-3 py-1 rounded-md text-black text-md font-medium flex items-center transition-colors duration-200 ${
          isOpen
            ? "bg-[#D1A700]"
            : "bg-[#E6C200] hover:bg-[#D1A700] focus:outline-none focus:ring-2 focus:ring-[#FFD700]"
        }`}
      >
        {currentLanguageName}
      </button>

      {isOpen && (
        <ul className="absolute z-20 right-0 mt-2 w-40 bg-white shadow-md rounded-md overflow-hidden">
          {languages.map((lang) => (
            <li
              key={lang.code}
              onClick={() => {
                onChangeLang(lang.code);
                setIsOpen(false);
              }}
              className="px-3 py-1 hover:bg-gray-100 cursor-pointer transition-colors duration-150 text-sm"
            >
              {lang.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default LanguageDropdown;
