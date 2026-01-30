import { useState, useRef, useEffect } from "react";
import { Globe, Check } from "lucide-react";
import { useLanguage, languageNames, type Language } from "@/contexts/LanguageContext";

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const languages: Language[] = [
    "en", "bn", "hi", "ar", "es", "fr", "de", "ja", "ko", "pt", "ru", "zh", "it", "tr", "vi", "th", "id", "nl", "pl", "uk"
  ];

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-lg bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.08)] hover:border-[#00eaff] hover:bg-[rgba(0,234,255,0.08)] transition-all duration-200 text-white font-semibold text-xs sm:text-sm"
        aria-label="Change language"
      >
        <Globe className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
        <span className="hidden sm:inline">{languageNames[language]}</span>
        <span className="sm:hidden uppercase text-[10px]">{language}</span>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-44 sm:w-52 bg-[rgba(5,7,19,0.98)] backdrop-blur-xl border border-[rgba(0,234,255,0.2)] rounded-lg shadow-2xl z-50 max-h-96 overflow-y-auto">
          <div className="p-1.5">
            {languages.map((lang) => (
              <button
                key={lang}
                onClick={() => {
                  setLanguage(lang);
                  setIsOpen(false);
                }}
                className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-left transition-all duration-200 ${
                  language === lang
                    ? "bg-gradient-to-r from-[rgba(0,234,255,0.15)] to-[rgba(138,61,255,0.15)] border border-[#00eaff] text-white"
                    : "text-[#a9b0ff] hover:bg-[rgba(255,255,255,0.04)] hover:text-white border border-transparent"
                }`}
              >
                <span className="font-semibold text-sm">{languageNames[lang]}</span>
                {language === lang && <Check className="w-3.5 h-3.5 text-[#00eaff]" />}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

