import image1 from "../assets/image1.webp";

const Footer = () => {
  return (
    <footer className="bg-[#0F172A] py-8">
      <div className="max-w-7xl mx-auto px-4 flex flex-col lg:flex-row justify-between items-center gap-8">
        {/* Logo */}
        <div className="flex items-center">
          <img src={image1} alt="Captain Mek Logo" className="h-12 w-auto" />
        </div>

        {/* Navigation Links */}
        <nav
          className="flex flex-col sm:flex-row gap-4 sm:gap-8 text-center lg:flex-col"
          style={{
            width: "108.08px",
            height: "160px",
            gap: "10px",
          }}
        >
          <a
            href="#faq"
            className="text-white hover:text-blue-400 transition-colors"
          >
            FAQ
          </a>
          <a
            href="#ecosystem"
            className="text-white hover:text-blue-400 transition-colors"
          >
            Ecosystem
          </a>
          <a
            href="#how-to-buy"
            className="text-white hover:text-blue-400 transition-colors"
          >
            How To Buy
          </a>
          <a
            href="#about"
            className="text-white hover:text-blue-400 transition-colors"
          >
            About
          </a>
          <a
            href="#battle-plan"
            className="text-white hover:text-blue-400 transition-colors"
          >
            Battle Plan
          </a>
        </nav>

        {/* Social Icons */}
        <div className="flex space-x-3">
          <a
            href="#"
            className="bg-yellow-400 p-2 rounded hover:bg-yellow-500 transition-colors"
          >
            <span className="text-black font-bold">📧</span>
          </a>
          <a
            href="#"
            className="bg-gray-600 p-2 rounded hover:bg-gray-700 transition-colors"
          >
            <span className="text-white font-bold">✕</span>
          </a>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-gray-400 mt-6 px-4 font-exo font-light italic text-[10px] leading-4 tracking-[0.4px] uppercase">
        CAPTAINMEK IS A MEME-BASED PROJECT FOR ENTERTAINMENT. $MEK IS A UTILITY
        MEME COIN. NOTHING HERE IS FINANCIAL ADVICE. ALWAYS DYOR. CRYPTO IS A
        SPORT — SPEND AND TRADE WISELY.
      </div>
    </footer>
  );
};

export default Footer;
