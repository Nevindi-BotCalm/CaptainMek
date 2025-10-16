

const ChevronDownIcon = ({ width = 16, height = 16, color = 'currentColor' }) => {
  return (
    <svg 
      width={width} 
      height={height} 
      viewBox="0 0 24 24" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className="transition-transform duration-300 hover:rotate-[360deg]"
    >
      <path 
        d="M6 9L12 15L18 9" 
        stroke={color} 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default ChevronDownIcon;