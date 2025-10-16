const MobileMenu = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Ecosystem", href: "#ecosystem" },
    { name: "How To Buy", href: "#how-to-buy" },
    { name: "Battle Plan", href: "#battle-plan" },
    { name: "FAQ", href: "#faq" },
  ];

  const handleSmoothScroll = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      let offset = 90;
      if (href === "#battle-plan") offset = 200;
      const elementPosition = element.offsetTop - offset;
      window.scrollTo({ top: elementPosition, behavior: "smooth" });
    }
    onClose();
  };

  return (
    <div className="h-screen w-full fixed inset-0 bg-[#0F172A]/95 backdrop-blur-sm z-40 lg:hidden animate-fadeIn">
      <div className="flex flex-col h-full transform translate-x-0 transition-transform duration-300 ease-out">
        <nav className="flex-1 flex flex-col items-center justify-center gap-6 sm:gap-8 px-4 pt-20">
          {navLinks.map((link, index) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleSmoothScroll(e, link.href)}
              className="text-white text-xl sm:text-2xl font-medium hover:text-blue-400 transition-all duration-300 cursor-pointer transform translate-y-0 opacity-100"
              style={{
                animationDelay: `${index * 100}ms`,
                animation: 'slideInUp 0.6s ease-out forwards'
              }}
            >
              {link.name}
            </a>
          ))}

          <button 
            className="bg-[#FEE5A9] hover:bg-[#E5CE9F] text-black font-bold py-3 px-8 rounded-lg mt-6 transition-all duration-300 hover:scale-105 text-base sm:text-lg transform translate-y-0 opacity-100"
            style={{
              animationDelay: `${navLinks.length * 100}ms`,
              animation: 'slideInUp 0.6s ease-out forwards'
            }}
          >
            Log In
          </button>
        </nav>
      </div>
    </div>
  );
};

export default MobileMenu;

// Add CSS animation keyframes
const style = document.createElement('style');
style.textContent = `
  @keyframes slideInUp {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;
if (!document.head.querySelector('style[data-mobile-menu]')) {
  style.setAttribute('data-mobile-menu', 'true');
  document.head.appendChild(style);
}
