import React from 'react';
import { FaGithub, FaBook } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="relative z-10 bg-gray-50 dark:bg-[#2b2d31] border-t border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Pitching 섹션 */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Pitching
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
            "모두가 자신 있게 소통하며 서로
            </p>
            <p className="text-gray-600 dark:text-gray-300">
             연결될 수 있는 세상을 만듭니다."
            </p>
          </div>

          {/* 제품 섹션 */}
          <div className="col-span-1">
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider mb-4">
              제품
            </h3>
            <ul className="space-y-3">
              <li>
                <Link to="/more" className="text-gray-600 dark:text-gray-400 hover:text-yellow-500 dark:hover:text-yellow-400 text-sm">
                  서비스 소개
                </Link>
              </li>
              <li>
                <Link to="/features" className="text-gray-600 dark:text-gray-400 hover:text-yellow-500 dark:hover:text-yellow-400 text-sm">
                  주요 기능
                </Link>
              </li>
              <li>
                <Link to="/tech-stack" className="text-gray-600 dark:text-gray-400 hover:text-yellow-500 dark:hover:text-yellow-400 text-sm">
                  기술 스택
                </Link>
              </li>
              <li>
                <Link to="/team" className="text-gray-600 dark:text-gray-400 hover:text-yellow-500 dark:hover:text-yellow-400 text-sm">
                  Team
                </Link>
              </li>
            </ul>
          </div>

          {/* 리소스 섹션 */}
          <div className="col-span-1">
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider mb-4">
              리소스
            </h3>
            <ul className="space-y-3">
              <li>
                <Link to="/blog" className="text-gray-600 dark:text-gray-400 hover:text-yellow-500 dark:hover:text-yellow-400 text-sm">
                  소식
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-gray-600 dark:text-gray-400 hover:text-yellow-500 dark:hover:text-yellow-400 text-sm">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/tech" className="text-gray-600 dark:text-gray-400 hover:text-yellow-500 dark:hover:text-yellow-400 text-sm">
                  Tech
                </Link>
              </li>
            </ul>
          </div>

          {/* 법적 정보 섹션 */}
          <div className="col-span-1">
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider mb-4">
              법적 정보
            </h3>
            <ul className="space-y-3">
              <li>
                <Link to="/privacy" className="text-gray-600 dark:text-gray-400 hover:text-yellow-500 dark:hover:text-yellow-400 text-sm">
                  개인정보처리방침
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-gray-600 dark:text-gray-400 hover:text-yellow-500 dark:hover:text-yellow-400 text-sm">
                  이용약관
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Contact Information & Social Links */}
        <div className="border-t border-gray-200 dark:border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
            {/* 왼쪽: 저작권 및 연락처 정보 */}
            <div className="flex flex-col space-y-1 text-sm text-gray-600 dark:text-gray-400">
              <div>© 2024 Kakaotech-Pitching. All rights reserved.</div>
              <div>Address: 660, Daewangpangyo-ro, Bundang-gu, Seongnam-si, Gyeonggi-do, 13493</div>
              <div className="text-xs text-gray-400 dark:text-gray-500">Pitching collaborates with Kakao Corp. </div>
              <div className="text-[10px] text-gray-400 dark:text-gray-500">This Page Designed by Toby.kim </div>
            </div>

            {/* 오른쪽: 소셜 링크와 관련 사이트 */}
            <div className="flex items-center space-x-6 mt-4 md:mt-0">
              <a
                href="https://github.com/KakaoTech-14-All-in-one-move"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                <FaGithub size={24} />
              </a>
              <a
                href="https://quaint-soprano-826.notion.site/KakaoTech-14-b3618b9330704121a2378edee6e98724"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                <FaBook size={24} />
              </a>

              {/* 관련 사이트 드롭다운 */}
              <div className="relative group">
                <button className="flex items-center space-x-1 text-gray-500 dark:text-gray-400 hover:text-[#fee500] dark:hover:text-[#fee500]">
                  <span className="text-sm">관련사이트</span>
                  <svg 
                    className="w-4 h-4 transition-transform group-hover:rotate-180" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                {/* 드롭다운 메뉴 */}
                <div className="absolute right-0 bottom-full mb-2 w-48 bg-white dark:bg-gray-800 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <div className="py-2">
                    <a 
                      href="https://www.kakaocorp.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:text-[#fee500] dark:hover:text-[#fee500]"
                    >
                      카카오
                    </a>
                    <a 
                      href="https://www.goorm.co/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:text-[#fee500] dark:hover:text-[#fee500]"
                    >
                      Goorm
                    </a>
                    <a 
                      href="https://ktb.goorm.io/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:text-[#fee500] dark:hover:text-[#fee500]"
                    >
                      카카오테크 부트캠프
                    </a>
                    <a 
                      href="https://developers.kakao.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:text-[#fee500] dark:hover:text-[#fee500]"
                    >
                      카카오 Developers
                    </a>
                    <a 
                      href="https://www.rapa.or.kr/ft/main.do"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:text-[#fee500] dark:hover:text-[#fee500]"
                    >
                      RAPA 한국전파지능협회
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;