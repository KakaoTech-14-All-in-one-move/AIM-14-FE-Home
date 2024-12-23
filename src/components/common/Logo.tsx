import React from 'react';
import { useTheme } from '../../contexts/ThemeContext';

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className = "h-8" }) => {
  const { isDarkMode } = useTheme();

  return (
    <svg
      className={className}
      viewBox="0 0 120 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* 로고 텍스트 */}
      <text
        x="5"
        y="22"
        className={`text-2xl font-bold ${
          isDarkMode ? 'fill-white' : 'fill-gray-900'
        }`}
        style={{ fontFamily: 'Arial, sans-serif' }}
      >
        Pitching
      </text>
      
      {/* 아이콘 */}
      <path
        d="M100 8C100 6.34315 101.343 5 103 5V5C104.657 5 106 6.34315 106 8V15C106 16.6569 104.657 18 103 18V18C101.343 18 100 16.6569 100 15V8Z"
        className="fill-[#fee500]"
      />
      <path
        d="M98 15.5C98 18.5376 100.462 21 103.5 21C106.538 21 109 18.5376 109 15.5"
        className={isDarkMode ? 'stroke-white' : 'stroke-gray-900'}
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M103.5 21V25"
        className={isDarkMode ? 'stroke-white' : 'stroke-gray-900'}
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default Logo; 