import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import Button from '../../components/common/Button.tsx';
import { FadeIn } from '../../components/common/Animation.tsx';
import ChatIcon from '../../assets/icons/ChatIcon.tsx';

const Chat = () => {
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
                  <ChatIcon className="w-8 h-8 text-white" />
                </div>
              </div>
              <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white sm:text-5xl">
                실시간 채팅
              </h1>
              <p className="mt-4 text-xl text-gray-600 dark:text-gray-300">
                Socket.IO 기반의 실시간 채팅 서비스
              </p>
            </div>
          </div>
        </motion.section>

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
                        title: 'Socket.IO',
                        description: '양방향 실시간 이벤트 기반 통신을 제공하여 즉각적인 메시지 전달이 가능합니다.'
                      },
                      {
                        title: 'Redis Pub/Sub',
                        description: '분산 환경에서도 안정적인 메시지 전달을 보장하는 메시지 브로커 시스템을 사용합니다.'
                      },
                      {
                        title: 'MongoDB',
                        description: '채팅 기록을 효율적으로 저장하고 조회할 수 있는 NoSQL 데이터베이스를 활용합니다.'
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
                <div className="space-y-6">
                  <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                    주요 기능
                  </h2>
                  <div className="space-y-4">
                    {[
                      {
                        title: '1:1 채팅',
                        description: '개인 간 프라이빗 채팅으로 효율적인 1:1 커뮤니케이션이 가능합니다.'
                      },
                      {
                        title: '그룹 채팅',
                        description: '다수의 사용자가 참여할 수 있는 그룹 채팅방을 제공합니다.'
                      },
                      {
                        title: '파일 공유',
                        description: '이미지, 문서 등 다양한 파일을 손쉽게 공유할 수 있습니다.'
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
                지금 바로 시작하세요!
              </h2>
              <Button
                variant="primary"
                size="lg"
                onClick={() => window.open('https://pitching.site', '_blank', 'noopener,noreferrer')}
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

export default Chat; 