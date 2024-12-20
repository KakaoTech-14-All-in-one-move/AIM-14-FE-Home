import React from 'react';

const VideoCallIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
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
        d="M19 8H5C3.89543 8 3 8.89543 3 10V22C3 23.1046 3.89543 24 5 24H19C20.1046 24 21 23.1046 21 22V10C21 8.89543 20.1046 8 19 8Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M29 11L21 16L29 21V11Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default VideoCallIcon; 