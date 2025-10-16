// import { useState, useEffect, useRef } from 'react';
// import { useTranslation } from 'react-i18next';
// import GlobeIcon from './icons/GlobeIcon';
// import ChevronDownIcon from './icons/ChevronDownIcon';

// const LanguageSelector = () => {
//   const { t, i18n } = useTranslation();
//   const [isOpen, setIsOpen] = useState(false);
//   const dropdownRef = useRef(null);

//   const languages = [
//     { key: 'english', code: 'en' },
//     { key: 'spanish', code: 'es' },
//     { key: 'french', code: 'fr' },
//     { key: 'german', code: 'de' },
//     { key: 'chinese', code: 'zh' },
//   ];

//   interface Language {
//     key: string;
//     code: string;
//   }

//   const translatePage = (languageObj: Language) => {
//     i18n.changeLanguage(languageObj.code);
//     localStorage.setItem('selectedLanguage', languageObj.code);
//     console.log(`Site language changed to: ${languageObj.code}`);
//   };

//   const handleLanguageSelect = (languageObj) => {
//     setIsOpen(false);
//     translatePage(languageObj);
//   };

//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
//         setIsOpen(false);
//       }
//     };

//     if (isOpen) {
//       document.addEventListener('mousedown', handleClickOutside);
//     }

//     return () => {
//       document.removeEventListener('mousedown', handleClickOutside);
//     };
//   }, [isOpen]);

//   // Load saved language on component mount
//   useEffect(() => {
//     const savedLanguage = localStorage.getItem('selectedLanguage');
//     if (savedLanguage && savedLanguage !== 'en') {
//       i18n.changeLanguage(savedLanguage);
//     }
//   }, [i18n]);

//   // Get current language display name
//   const getCurrentLanguage = () => {
//     const currentLang =
//       languages.find((lang) => lang.code === i18n.language) || languages[0];
//     return t(`languages.${currentLang.key}`);
//   };

//   return (
//     <div className="relative" ref={dropdownRef}>
//       <button
//         onClick={() => setIsOpen(!isOpen)}
//         className="flex items-center gap-2 rounded-lg bg-[#FEE5A9] px-4 py-2 font-medium text-[#1E293B] transition-all duration-300 hover:scale-105 hover:bg-[#E5CE9F]"
//       >
//         <GlobeIcon width={20} height={20} color="#1E293B" />
//         <span>{getCurrentLanguage()}</span>
//         <ChevronDownIcon width={16} height={16} color="#1E293B" />
//       </button>

//       {isOpen && (
//         <div className="animate-fadeIn absolute top-full right-0 z-50 mt-2 min-w-[150px] rounded-lg bg-white py-2 shadow-xl">
//           {languages.map((language) => (
//             <button
//               key={language.key}
//               onClick={() => handleLanguageSelect(language)}
//               className={`w-full px-4 py-2 text-left transition-colors hover:bg-gray-100 ${
//                 i18n.language === language.code ? 'bg-gray-50 font-medium' : ''
//               }`}
//             >
//               <span className="text-gray-800">
//                 {t(`languages.${language.key}`)}
//               </span>
//             </button>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default LanguageSelector;
import React, { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import GlobeIcon from './icons/GlobeIcon';
import ChevronDownIcon from './icons/ChevronDownIcon';

interface Language {
  key: string;
  code: string;
}

const LanguageSelector: React.FC = () => {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  const languages: Language[] = [
    { key: 'english', code: 'en' },
    { key: 'spanish', code: 'es' },
    { key: 'french', code: 'fr' },
    { key: 'german', code: 'de' },
    { key: 'chinese', code: 'zh' },
  ];

  const translatePage = (languageObj: Language): void => {
    i18n.changeLanguage(languageObj.code);
    localStorage.setItem('selectedLanguage', languageObj.code);
    console.log(`Site language changed to: ${languageObj.code}`);
  };

  const handleLanguageSelect = (languageObj: Language): void => {
    setIsOpen(false);
    translatePage(languageObj);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent): void => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
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
  const getCurrentLanguage = (): string => {
    const currentLang =
      languages.find((lang) => lang.code === i18n.language) || languages[0];
    return t(`languages.${currentLang.key}`);
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 rounded-lg bg-[#FEE5A9] px-4 py-2 font-medium text-[#1E293B] transition-all duration-300 hover:scale-105 hover:bg-[#E5CE9F]"
      >
        <GlobeIcon width={20} height={20} color="#1E293B" />
        <span>{getCurrentLanguage()}</span>
        <ChevronDownIcon width={16} height={16} color="#1E293B" />
      </button>

      {isOpen && (
        <div className="animate-fadeIn absolute top-full right-0 z-50 mt-2 min-w-[150px] rounded-lg bg-white py-2 shadow-xl">
          {languages.map((language) => (
            <button
              key={language.key}
              onClick={() => handleLanguageSelect(language)}
              className={`w-full px-4 py-2 text-left transition-colors hover:bg-gray-100 ${
                i18n.language === language.code ? 'bg-gray-50 font-medium' : ''
              }`}
            >
              <span className="text-gray-800">
                {t(`languages.${language.key}`)}
              </span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSelector;
