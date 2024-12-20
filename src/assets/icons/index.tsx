import React from 'react';

export const MoreIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg 
      width="32" 
      height="32" 
      viewBox="0 0 32 32" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M16 10C17.1046 10 18 9.10457 18 8C18 6.89543 17.1046 6 16 6C14.8954 6 14 6.89543 14 8C14 9.10457 14.8954 10 16 10Z" fill="currentColor"/>
      <path d="M16 18C17.1046 18 18 17.1046 18 16C18 14.8954 17.1046 14 16 14C14.8954 14 14 14.8954 14 16C14 17.1046 14.8954 18 16 18Z" fill="currentColor"/>
      <path d="M16 26C17.1046 26 18 25.1046 18 24C18 22.8954 17.1046 22 16 22C14.8954 22 14 22.8954 14 24C14 25.1046 14.8954 26 16 26Z" fill="currentColor"/>
    </svg>
  );
};

export { default as VideoCallIcon } from './VideoCallIcon.tsx';
export { default as ScreenShareIcon } from './ScreenShareIcon.tsx';
export { default as ChatIcon } from './ChatIcon.tsx';
export { default as FileShareIcon } from './FileShareIcon.tsx';
export { default as VoiceCallIcon } from './VoiceCallIcon.tsx';
export { default as VoiceRecordIcon } from './VoiceRecordIcon.tsx';
export { default as AIAnalysisIcon } from './AIAnalysisIcon.tsx';
export { default as FeedbackIcon } from './FeedbackIcon.tsx'; 