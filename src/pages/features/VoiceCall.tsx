import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import Button from '../../components/common/Button.tsx';
import { FadeIn } from '../../components/common/Animation.tsx';
import VoiceCallIcon from '../../assets/icons/VoiceCallIcon.tsx';
import voiceCallImage from '../../assets/images/voice_call.png';

const VoiceCall = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, []);

  return (
    <div className="pt-20 bg-gray-50 dark:bg-[#2b2d31] relative overflow-hidden">
      {/* 배경 애니메이션 */}
      <div className="absolute inset-0 w-full h-full">
        <div 
          className="absolute left-1/4 top-20 w-[500px] h-[500px] 
          bg-[#FFE999]/20 rounded-full mix-blend-normal filter blur-[80px] 
          animate-blob-slow"
        ></div>
        <div 
          className="absolute right-1/4 top-20 w-[500px] h-[500px] 
          bg-[#7C9FF5]/20 rounded-full mix-blend-normal filter blur-[80px] 
          animate-blob-slow animation-delay-2000"
        ></div>
      </div>

      <div className="relative z-10">
        {/* Hero Section */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative overflow-hidden py-16 sm:py-24"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="flex justify-center mb-6">
                <div className="bg-[#fee500] dark:bg-yellow-500 w-16 h-16 rounded-2xl flex items-center justify-center">
                  <VoiceCallIcon className="w-8 h-8 text-white" />
                </div>
              </div>
              <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white sm:text-5xl">
                음성 통화
              </h1>
              <p className="mt-4 text-xl text-gray-600 dark:text-gray-300">
                WebRTC 기반의 고품질 음성 통화 서비스
              </p>
            </div>
          </div>
        </motion.section>

        {/* 음성 통화 기능 소개 섹션 */}
        <section className="py-16 bg-gray-100/80 dark:bg-[#2b2d36]/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* 왼쪽: 음성 통화 이미지 */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                  음성 통화 예시 이미지
                </h3>
                <img 
                  src={voiceCallImage} 
                  alt="음성 통화 예시" 
                  className="w-full rounded-lg shadow-lg"
                />
              </div>

              {/* 오른쪽: 음성 통화 기능 설명 */}
              <div className="flex items-center h-full">
                <div className="bg-white dark:bg-[#374151] p-6 rounded-lg shadow-lg w-full">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
                    Voice Call (음성 통화)
                  </h3>
                  <ul className="space-y-4">
                    <li className="flex items-start space-x-3">
                      <span className="text-blue-500 dark:text-blue-400 font-bold">•</span>
                      <span className="text-gray-700 dark:text-blue-400">실시간 음성 통화가 가능합니다</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <span className="text-blue-500 dark:text-blue-400 font-bold">•</span>
                      <span className="text-gray-700 dark:text-blue-400">음성 채널 생성 및 관리가 가능합니다</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <span className="text-blue-500 dark:text-blue-400 font-bold">•</span>
                      <span className="text-gray-700 dark:text-blue-400">마이크 음소거 기능을 제공합니다</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 기술 스택 설명 */}
        <section className="py-16 bg-gray-100/80 dark:bg-[#2b2d36]/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <FadeIn>
                <div className="space-y-6">
                  <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                    핵심 기술
                  </h2>
                  <div className="space-y-4">
                    {[
                      {
                        title: 'WebRTC & Kurento',
                        description: 'WebRTC를 기반으로 한 실시간 P2P 통신과 Kurento 미디어 서버를 통해 고품질 음성 스트리밍 및 미디어 처리를 제공합니다.'
                      },
                      {
                        title: 'WebSocket',
                        description: '실시간 양방향 통신을 통해 시그널링 서버와의 즉각적인 연결 및 음성 스트림 상태 업데이트를 처리합니다.'
                      },
                      {
                        title: 'Redis',
                        description: '인메모리 캐싱을 통한 실시간 세션 관리, 통화 상태 관리 및 시그널링 서버 간 데이터 동기화를 제공합니다.'
                      },
                      {
                        title: 'PostgreSQL & DynamoDB',
                        description: 'PostgreSQL을 통해 관계형 데이터(사용자, 채널 정보) 관리와 DynamoDB를 통한 실시간 음성 통화 세션 데이터를 효율적으로 저장합니다.'
                      }
                    ].map((tech, index) => (
                      <div key={index} className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg">
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                          {tech.title}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300">
                          {tech.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </FadeIn>

              <FadeIn delay={0.2}>
                <div className="space-y-6 mt-12">
                  <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                    주요 기능
                  </h2>
                  <div className="space-y-4">
                    {[
                      {
                        title: '음성 채널',
                        description: '채널 생성, 채널명 변경, 채널 삭제 등 음성 통화를 위한 다양한 채널 관리 기능을 제공합니다.'
                      },
                      {
                        title: '음성 통화',
                        description: '스피커 음소거, 마이크 음소거, 연결 종료 등 음성 통화에 필요한 핵심 기능을 제공합니다.'
                      }
                    ].map((feature, index) => (
                      <div key={index} className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg">
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                          {feature.title}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300">
                          {feature.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* 시작하기 섹션 */}
        <section className="py-16 bg-gray-50/80 dark:bg-[#2b2d31]/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <FadeIn>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
                Pitching의 음성통화 기능을 지금 바로 경험해보세요!
              </h2>
              <Button
                variant="primary"
                size="lg"
                onClick={() => window.location.href = 'https://pitching.site/login'}
                className="text-black"
              >
                시작하기
              </Button>
            </FadeIn>
          </div>
        </section>
      </div>
    </div>
  );
};

export default VoiceCall; 