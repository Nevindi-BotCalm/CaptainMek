import React from 'react';

const GlobeIcon = ({ width = 20, height = 20, color = 'currentColor' }) => {
  return (
    <svg 
      width={width} 
      height={height} 
      viewBox="0 0 24 24" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className="transition-transform duration-300 hover:rotate-[360deg]"
    >
      <circle 
        cx="12" 
        cy="12" 
        r="10" 
        stroke={color} 
        strokeWidth="2"
      />
      <path 
        d="M2 12H22M12 2C14.5 4.5 16 8 16 12C16 16 14.5 19.5 12 22M12 2C9.5 4.5 8 8 8 12C8 16 9.5 19.5 12 22" 
        stroke={color} 
        strokeWidth="2" 
        strokeLinecap="round"
      />
    </svg>
  );
};

export default GlobeIcon;