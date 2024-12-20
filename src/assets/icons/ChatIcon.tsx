import React from 'react';

const ChatIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M28 16C28 21.5228 22.6274 26 16 26C13.9229 26 11.9783 25.5279 10.2871 24.7002C9.48793 24.2973 8.60423 24.1795 7.72012 24.3735L4 25.3333L5.2439 22.1514C5.50636 21.3436 5.4485 20.4625 5.08411 19.7C4.38333 18.2854 4 16.6871 4 15C4 9.47715 9.37258 5 16 5C22.6274 5 28 9.47715 28 16Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default ChatIcon; 