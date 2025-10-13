import image1 from "../assets/image1.webp";
import { FaTelegramPlane } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  const handleSmoothScroll = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const offset = href === "#battle-plan" ? 200 : 90;
      const elementPosition = element.offsetTop - offset;
      window.scrollTo({ top: elementPosition, behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-[#0F172A] py-12 md:py-16 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-10 lg:gap-12">
          {/* Logo */}
          <div className="flex items-center">
            <img
              src={image1}
              alt="Captain Mek Logo"
              className="h-14 md:h-16 w-auto"
            />
          </div>
          {/* Navigation Links */}
          <nav className="flex flex-col sm:flex-row lg:flex-col gap-4 sm:gap-6 lg:gap-3 text-center">
            <a
              href="#about"
              onClick={(e) => handleSmoothScroll(e, "#about")}
              className="text-white hover:text-[#FEE5A9] transition-colors duration-300 text-base font-medium cursor-pointer"
            >
              About
            </a>
            <a
              href="#ecosystem"
              onClick={(e) => handleSmoothScroll(e, "#ecosystem")}
              className="text-white hover:text-[#FEE5A9] transition-colors duration-300 text-base font-medium cursor-pointer"
            >
              Ecosystem
            </a>
            <a
              href="#how-to-buy"
              onClick={(e) => handleSmoothScroll(e, "#how-to-buy")}
              className="text-white hover:text-[#FEE5A9] transition-colors duration-300 text-base font-medium cursor-pointer"
            >
              How To Buy
            </a>
            <a
              href="#battle-plan"
              onClick={(e) => handleSmoothScroll(e, "#battle-plan")}
              className="text-white hover:text-[#FEE5A9] transition-colors duration-300 text-base font-medium cursor-pointer"
            >
              Battle Plan
            </a>
            <a
              href="#faq"
              onClick={(e) => handleSmoothScroll(e, "#faq")}
              className="text-white hover:text-[#FEE5A9] transition-colors duration-300 text-base font-medium cursor-pointer"
            >
              FAQ
            </a>
          </nav>
          
          <div className="flex gap-4">
            {/* Telegram */}
            <a
              href="https://t.me/yourchannel" // replace with your Telegram link
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#FEE5A9] p-3 rounded-lg hover:bg-[#E5CE9F] transition-all duration-300 hover:scale-110"
              aria-label="Telegram"
            >
              <FaTelegramPlane className="text-black text-2xl" />
            </a>

            {/* Twitter (X) */}
            <a
              href="https://twitter.com/yourhandle" // replace with your Twitter link
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#FEE5A9] p-3 rounded-lg hover:bg-[#E5CE9F] transition-all duration-300 hover:scale-110"
              aria-label="Twitter"
            >
              <FaXTwitter className="text-black text-2xl" />
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center text-gray-400 mt-10 px-4 text-[10px] sm:text-[11px] leading-relaxed tracking-wide uppercase max-w-4xl mx-auto">
          CAPTAINMEK IS A MEME-BASED PROJECT FOR ENTERTAINMENT. $MEK IS A
          UTILITY MEME COIN. NOTHING HERE IS FINANCIAL ADVICE. ALWAYS DYOR.
          CRYPTO IS A SPORT — SPEND AND TRADE WISELY.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
