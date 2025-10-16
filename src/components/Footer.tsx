
import React from 'react';
import { useTranslation } from 'react-i18next';
import image1 from '../assets/image1.webp';
import { FaTelegramPlane } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const Footer: React.FC = () => {
  const { t } = useTranslation();

  const handleSmoothScroll = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    href: string
  ): void => {
    e.preventDefault();
    const element = document.querySelector(href) as HTMLElement | null;
    if (element) {
      const offset = href === '#battle-plan' ? 200 : 90;
      const elementPosition = element.offsetTop - offset;
      window.scrollTo({ top: elementPosition, behavior: 'smooth' });
    }
  };

  return (
    <footer className="h-full w-full bg-[#0F172A] py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-10 lg:flex-row lg:gap-12">
          {/* Logo */}
          <div className="flex items-center">
            <img
              src={image1}
              alt="Captain Mek Logo"
              className="h-14 w-auto md:h-16"
            />
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-col gap-4 text-left sm:flex-row sm:gap-6 lg:flex-col lg:gap-3">
            {['about', 'ecosystem', 'howToBuy', 'battlePlan', 'faq'].map(
              (key) => (
                <a
                  key={key}
                  href={`#${key === 'howToBuy' ? 'how-to-buy' : key === 'battlePlan' ? 'battle-plan' : key}`}
                  onClick={(e) =>
                    handleSmoothScroll(
                      e,
                      `#${key === 'howToBuy' ? 'how-to-buy' : key === 'battlePlan' ? 'battle-plan' : key}`
                    )
                  }
                  className="cursor-pointer text-base font-medium text-white transition-colors duration-300 hover:text-[#FEE5A9]"
                >
                  {t(`nav.${key}`)}
                </a>
              )
            )}
          </nav>

          {/* Social Icons */}
          <div className="flex gap-4">
            <a
              href="https://t.me/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg bg-[#FEE5A9] p-3 transition-all duration-300 hover:scale-110 hover:bg-[#E5CE9F]"
              aria-label="Telegram"
            >
              <FaTelegramPlane className="text-2xl text-black" />
            </a>

            <a
              href="https://twitter.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg bg-[#FEE5A9] p-3 transition-all duration-300 hover:scale-110 hover:bg-[#E5CE9F]"
              aria-label="Twitter"
            >
              <FaXTwitter className="text-2xl text-black" />
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-align-center mx-auto max-w-4xl px-4 text-center text-[10px] leading-relaxed tracking-wide text-gray-400 uppercase sm:text-[11px] italic flex flex-col gap-1 mt-10">
  <div>{t('CaptainMek is a meme-based project for entertainment. $MEK is a utility memecoin. Nothing here is financial advice. Always DYOR.')}</div>
  <div>{t('Crypto is risky — stake and trade wisely')}</div>
</div>      
</div>
    </footer>
  );
}; 

export default Footer;
