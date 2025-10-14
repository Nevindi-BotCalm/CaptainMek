import { useState, useEffect, useRef } from "react";
import { useTranslation } from 'react-i18next';
import GlobeIcon from "./icons/GlobeIcon";
import ChevronDownIcon from "./icons/ChevronDownIcon";

const LanguageSelector = () => {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const languages = [
    { key: 'english', code: 'en' },
    { key: 'spanish', code: 'es' },
    { key: 'french', code: 'fr' },
    { key: 'german', code: 'de' },
    { key: 'chinese', code: 'zh' }
  ];







  const translatePage = (languageObj) => {
    i18n.changeLanguage(languageObj.code);
    localStorage.setItem('selectedLanguage', languageObj.code);
    console.log(`Site language changed to: ${languageObj.code}`);
  };

  const handleLanguageSelect = (languageObj) => {
    setIsOpen(false);
    translatePage(languageObj);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  // Load saved language on component mount
  useEffect(() => {
    const savedLanguage = localStorage.getItem('selectedLanguage');
    if (savedLanguage && savedLanguage !== 'en') {
      i18n.changeLanguage(savedLanguage);
    }
  }, [i18n]);

  // Get current language display name
  const getCurrentLanguage = () => {
    const currentLang = languages.find(lang => lang.code === i18n.language) || languages[0];
    return t(`languages.${currentLang.key}`);
  };

  return (
    <div className="relative" ref={dropdownRef}>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center gap-2 bg-[#FEE5A9] text-[#1E293B] px-4 py-2 rounded-lg font-medium hover:bg-[#E5CE9F] transition-all duration-300 hover:scale-105"
        >
          <GlobeIcon width={20} height={20} color="#1E293B" />
          <span>{getCurrentLanguage()}</span>
          <ChevronDownIcon width={16} height={16} color="#1E293B" />
        </button>

        {isOpen && (
          <div className="absolute top-full right-0 mt-2 bg-white rounded-lg shadow-xl py-2 min-w-[150px] z-50 animate-fadeIn">
            {languages.map((language) => (
              <button
                key={language.key}
                onClick={() => handleLanguageSelect(language)}
                className={`w-full text-left px-4 py-2 hover:bg-gray-100 transition-colors ${
                  i18n.language === language.code ? "bg-gray-50 font-medium" : ""
                }`}
              >
                <span className="text-gray-800">{t(`languages.${language.key}`)}</span>
              </button>
            ))}
          </div>
        )}
    </div>
  );
};

export default LanguageSelector;
