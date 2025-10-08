import React, { useState, useEffect, useRef } from 'react';
import GlobeIcon from './icons/GlobeIcon';
import ChevronDownIcon from './icons/ChevronDownIcon';

const LanguageSelector = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState('English');
  const dropdownRef = useRef(null);

  const languages = ['English', 'Spanish', 'French', 'German', 'Chinese'];

  const handleLanguageSelect = (language) => {
    setSelectedLanguage(language);
    setIsOpen(false);
  };


  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
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

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 bg-[#FEE5A9] text-[#1E293B] px-4 py-2 rounded-lg font-medium hover:bg-[#E5CE9F] transition-colors"
      >
        <GlobeIcon width={20} height={20} color="#1E293B" />
        <span>{selectedLanguage}</span>
        <ChevronDownIcon width={16} height={16} color="#1E293B" />
      </button>

      {isOpen && (
        <div className="absolute top-full right-0 mt-2 bg-white rounded-lg shadow-lg py-2 min-w-[150px] z-50">
          {languages.map((language) => (
            <button
              key={language}
              onClick={() => handleLanguageSelect(language)}
              className={`w-full text-left px-4 py-2 hover:bg-gray-100 transition-colors ${
                selectedLanguage === language ? 'bg-gray-50 font-medium' : ''
              }`}
            >
              <span className="text-gray-800">{language}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSelector;