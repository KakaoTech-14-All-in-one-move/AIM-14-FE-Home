import React from 'react';
import { Link } from 'react-router-dom';
import backgroundVideo from '../../assets/videos/background.mp4';

const Hero = () => {
  // 버튼 관련 상수
  const BUTTON_HEIGHT = "h-[84px]";  
  const BUTTON_PADDING = "px-16 py-7";  
  const BUTTON_TEXT_SIZE = "text-xl";  
  
  // 색상 관련 상수
  const BG_COLOR = "bg-white dark:bg-[#2b2d31]";
  const SECTION_BG = "bg-gray-100/95 dark:bg-[#1e2023]";
  const BUTTON_STYLE = `${SECTION_BG} text-gray-900 dark:text-[#fee500]`;
  const BUTTON_HOVER = "hover:bg-gray-200/95 dark:hover:bg-[#2b2d31]";

  return (
    <div className={`w-full ${BG_COLOR}`}> 
      <div className="pt-24 pb-12">
        <div className="max-w-[1280px] mx-auto px-8">
          <div className={`relative rounded-[2rem] overflow-hidden ${SECTION_BG}`}
            style={{ height: 'calc((100vh - 30rem) * 0.67)' }}>
            
            {/* 배경 비디오 */}
            <video 
              className="absolute inset-0 w-full h-full object-cover z-0"
              autoPlay
              muted
              loop
              playsInline
            >
              <source src={backgroundVideo} type="video/mp4" />
            </video>

            {/* 배경 오버레이 - 불투명도 조절 가능 */}
            <div className="absolute inset-0 bg-black opacity-30 z-0" />
            
            {/* 우측 상단 버튼 */}
            <div className="absolute top-0 right-0 z-30">
              <Link
                to="/blog"
                className={`${BUTTON_STYLE} ${BUTTON_HOVER} ${BUTTON_PADDING} 
                  rounded-bl-[2rem] rounded-tr-[2rem]
                  flex items-center gap-3 shadow-lg ${BUTTON_HEIGHT}
                  transition-colors duration-200`}>
                <span className={`${BUTTON_TEXT_SIZE} font-medium`}>Pitching 소식 모아보기</span>
                <span className="text-2xl">▼</span>
              </Link>
            </div>

            {/* 메인 텍스트 */}
            <div className="absolute inset-0 flex flex-col justify-center z-10 px-8">
              <div className="space-y-4">
                <h1 className="text-5xl font-bold text-white leading-tight">
                  누구나 편하게 소통할 수 있게,
                </h1>
                <h2 className="text-5xl font-bold leading-tight">
                  <span className="text-[#fee500]">자신있게, Pitching.</span>
                </h2>
              </div>
            </div>

            {/* 더 알아보기 버튼 */}
            <div className="absolute bottom-0 left-0 z-20">
              <Link
                to="/more"
                className={`group inline-flex items-center ${BUTTON_STYLE} ${BUTTON_HOVER} ${BUTTON_PADDING} 
                  rounded-tr-[2rem] rounded-bl-[2rem] ${BUTTON_HEIGHT} 
                  transition-colors duration-200`}
              >
                <span className={`${BUTTON_TEXT_SIZE} font-medium`}>더 알아보기</span>
                <svg 
                  className="ml-3 w-7 h-7 transition-transform group-hover:translate-x-1" 
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path 
                    fillRule="evenodd" 
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" 
                    clipRule="evenodd" 
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
