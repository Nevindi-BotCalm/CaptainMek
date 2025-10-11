
const MobileMenu = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Ecosystem', href: '#ecosystem' },
    { name: 'How To Buy', href: '#how-to-buy' },
    { name: 'Battle Plan', href: '#battle-plan' },
    { name: 'FAQ', href: '#faq' },
  ];

  const handleSmoothScroll = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      let offset = 90;
      if (href === '#battle-plan') offset = 200;
      const elementPosition = element.offsetTop - offset;
      window.scrollTo({ top: elementPosition, behavior: 'smooth' });
    }
    onClose();
  };

  return (
    <div className="h-screen w-full fixed inset-0 bg-[#0F172A]/95 backdrop-blur-sm z-40 lg:hidden animate-fadeIn">
      <div className="flex flex-col h-full">
        <div className="flex justify-end p-4 sm:p-6">
          <button
            onClick={onClose}
            className="text-white text-3xl sm:text-4xl hover:text-gray-300 transition-colors w-10 h-10 flex items-center justify-center"
            aria-label="Close menu"
          >
            &times;
          </button>
        </div>

        <nav className="flex-1 flex flex-col items-center justify-center gap-6 sm:gap-8 px-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleSmoothScroll(e, link.href)}
              className="text-white text-xl sm:text-2xl font-medium hover:text-blue-400 transition-colors cursor-pointer"
            >
              {link.name}
            </a>
          ))}
          
          <button className="bg-[#FEE5A9] hover:bg-[#E5CE9F] text-black font-bold py-3 px-8 rounded-lg mt-6 transition-all duration-300 hover:scale-105 text-base sm:text-lg">
            Log In
          </button>
        </nav>
      </div>
    </div>
  );
};

export default MobileMenu;