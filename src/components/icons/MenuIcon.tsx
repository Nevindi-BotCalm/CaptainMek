
import { cn } from '../../lib/utils';

interface MenuIconProps {
  width?: number;
  height?: number;
  color?: string;
  className?: string;
}

const MenuIcon: React.FC<MenuIconProps> = ({ width = 24, height = 24, color = 'currentColor', className }) => {
  return (
    <svg 
      width={width} 
      height={height} 
      viewBox="0 0 24 24" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={cn("transition-transform duration-300 hover:rotate-[360deg]", className)}
    >
      <path 
        d="M3 12H21M3 6H21M3 18H21" 
        stroke={color} 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default MenuIcon;