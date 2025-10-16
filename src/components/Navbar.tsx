import { MouseEvent, useState } from 'react';
import { useTranslation } from 'react-i18next';
import image1 from '../assets/image1.webp';
import MenuIcon from './icons/MenuIcon';
import UserSettingsIcon from './icons/UserSettingsIcon';
import LanguageSelector from './LanguageSelector';
import MobileMenu from './MobileMenu';

const Navbar = () => {
  const { t } = useTranslation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: t('nav.about'), href: '#about' },
    { name: t('nav.ecosystem'), href: '#ecosystem' },
    { name: t('nav.howToBuy'), href: '#how-to-buy' },
    { name: t('nav.battlePlan'), href: '#battle-plan' },
    { name: t('nav.faq'), href: '#faq' },
  ];

  const handleSmoothScroll = (e: MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href) as HTMLElement;
    if (element) {
      let offset = 90;
      if (href === '#battle-plan') offset = 200;
      const elementPosition = element.offsetTop - offset;
      window.scrollTo({ top: elementPosition, behavior: 'smooth' });
    }
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 w-full max-w-[1920px] mx-auto h-[70px] md:h-[90px] flex items-center justify-between px-4 sm:px-6 lg:px-10 bg-[#0F172A] shadow-lg animate-fadeInUp">
        {/* Logo */}
        <div className="flex-shrink-0 animate-fadeInLeft">
          <a href="#home" onClick={(e) => handleSmoothScroll(e, '#home')} className="block cursor-pointer hover:scale-110 transition-transform duration-300">
            <img src={image1} alt="Captain Mek logo" className="h-10 sm:h-12 w-auto" />
          </a>
        </div>

        {/* Desktop Navigation */}
        <nav className=" hidden xl:flex items-center gap-6 xl:gap-8">
          <ul className="flex items-center gap-6 xl:gap-8 text-white">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  onClick={(e) => handleSmoothScroll(e, link.href)}
                  className="navitems hover:text-blue-400 transition-colors font-medium text-sm xl:text-base cursor-pointer"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>

      
        <div className="hidden xl:flex items-center gap-4">
          <LanguageSelector />
          
          <button className="flex items-center gap-2 bg-[#FEE5A9] hover:bg-[#E5CE9F] text-black font-bold py-2 px-6 rounded-lg transition-all duration-300 hover:scale-105 animate-pulseGlow">
            <UserSettingsIcon width={20} height={20} color="black" />
            <span>{t('nav.login')}</span>
          </button>
        </div>


        {/* Mobile Menu Buttons */}
        <div className="flex xl:hidden items-center gap-2 sm:gap-4">
          <button className="bg-[#FEE5A9] text-[#1E293B] font-bold py-2 px-3 sm:px-4 rounded-lg hover:bg-[#E5CE9F] transition-all duration-300 text-sm sm:text-base">
            {t('nav.login')}
          </button>
          
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-white p-1.5 sm:p-2 hover:bg-white/10 rounded-lg transition-all duration-300 w-10 h-10 flex items-center justify-center"
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          >
            <div className="transition-transform duration-300 ease-in-out">
              {isMobileMenuOpen ? (
                <span className="text-2xl font-light transform rotate-180 transition-transform duration-300">×</span>
              ) : (
                <MenuIcon width={24} height={24} color="white" className="sm:w-7 sm:h-7 transition-transform duration-300" />
              )}
            </div>
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <MobileMenu 
        isOpen={isMobileMenuOpen} 
        onClose={() => setIsMobileMenuOpen(false)} 
      />
    </>
  );
};

export default Navbar;