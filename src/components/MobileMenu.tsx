interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileMenu = ({ isOpen, onClose }: MobileMenuProps) => {
  if (!isOpen) return null;

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Ecosystem', href: '#ecosystem' },
    { name: 'How To Buy', href: '#how-to-buy' },
    { name: 'Battle Plan', href: '#battle-plan' },
    { name: 'FAQ', href: '#faq' },
  ];

  const handleSmoothScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    const element = document.querySelector<HTMLElement>(href);
    if (element) {
      let offset = 90;
      if (href === '#battle-plan') offset = 200;
      const elementPosition = element.offsetTop - offset;
      window.scrollTo({ top: elementPosition, behavior: 'smooth' });
    }
    onClose();
  };

  return (
    <div className="animate-fadeIn fixed inset-0 z-40 h-screen w-full bg-[#0F172A]/95 backdrop-blur-sm lg:hidden">
      <div className="flex h-full translate-x-0 transform flex-col transition-transform duration-300 ease-out">
        <nav className="flex flex-1 flex-col items-center justify-center gap-6 px-4 pt-20 sm:gap-8">
          {navLinks.map((link, index) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleSmoothScroll(e, link.href)}
              className="translate-y-0 transform cursor-pointer text-xl font-medium text-white opacity-100 transition-all duration-300 hover:text-blue-400 sm:text-2xl"
              style={{
                animationDelay: `${index * 100}ms`,
                animation: 'slideInUp 0.6s ease-out forwards',
              }}
            >
              {link.name}
            </a>
          ))}

          <button
            className="mt-6 translate-y-0 transform rounded-lg bg-[#FEE5A9] px-8 py-3 text-base font-bold text-black opacity-100 transition-all duration-300 hover:scale-105 hover:bg-[#E5CE9F] sm:text-lg"
            style={{
              animationDelay: `${navLinks.length * 100}ms`,
              animation: 'slideInUp 0.6s ease-out forwards',
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
