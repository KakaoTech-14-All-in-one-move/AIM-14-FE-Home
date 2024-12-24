import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import Button from '../../components/common/Button.tsx';
import { FadeIn } from '../../components/common/Animation.tsx';
import ChatIcon from '../../assets/icons/ChatIcon.tsx';
import chatImage from '../../assets/images/chatting.png';

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

        {/* 채팅 기능 소개 섹션 */}
        <section className="py-16 bg-gray-100/80 dark:bg-[#2b2d36]/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* 왼쪽: 채팅 이미지 */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                  채팅 예시 이미지
                </h3>
                <img 
                  src={chatImage} 
                  alt="실시간 채팅 예시" 
                  className="w-full rounded-lg shadow-lg"
                />
              </div>

              {/* 오른쪽: 채팅 기능 설명 */}
              <div className="flex items-center h-full">
                <div className="bg-white dark:bg-[#374151] p-6 rounded-lg shadow-lg w-full">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
                    Chatting (실시간 채팅)
                  </h3>
                  <ul className="space-y-4">
                    <li className="flex items-start space-x-3">
                      <span className="text-blue-500 dark:text-blue-400 font-bold">•</span>
                      <span className="text-gray-700 dark:text-blue-400">실시간으로 메시지를 주고받을 수 있습니다</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <span className="text-blue-500 dark:text-blue-400 font-bold">•</span>
                      <span className="text-gray-700 dark:text-blue-400">채팅방 생성 및 초대가 가능합니다</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <span className="text-blue-500 dark:text-blue-400 font-bold">•</span>
                      <span className="text-gray-700 dark:text-blue-400">채팅 내역이 저장되어 나중에도 확인할 수 있습니다</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <span className="text-blue-500 dark:text-blue-400 font-bold">•</span>
                      <span className="text-gray-700 dark:text-blue-400">메시지 검색 기능을 제공합니다</span>
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
                        title: 'WebSocket',
                        description: '실시간 양방향 통신을 통해 지연 없는 메시지 전송과 즉각적인 상태 업데이트를 제공합니다.'
                      },
                      {
                        title: 'RabbitMQ',
                        description: '메시지 큐 시스템을 통해 안정적인 메시지 전달과 부하 분산을 보장하며, 채팅 서버 간 효율적인 메시지 라우팅을 구현합니다.'
                      },
                      {
                        title: 'Redis',
                        description: '인메모리 데이터 스토리지를 활용한 실시간 채팅 상태 관리 및 세션 관리로 빠른 응답 속도를 제공합니다.'
                      },
                      {
                        title: '분산 아키텍처',
                        description: 'WebSocket, RabbitMQ, Redis를 결합한 확장 가능한 분산 채팅 시스템으로 다수 사용자의 실시간 통신을 안정적으로 지원합니다.'
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
                        title: '채팅 채널',
                        description: '채널 생성, 채널명 변경, 채널 삭제 등 다양한 채널 관리 기능을 제공하여 효율적인 그룹 커뮤니케이션이 가능합니다.'
                      },
                      {
                        title: '그룹 채팅',
                        description: '다수의 사용자가 참여하는 그룹 채팅방에서 실시간으로 메시지를 주고받으며 채팅 검색 기능을 제공합니다.'
                      },
                      {
                        title: '1대1 채팅',
                        description: '사용자 간 프라이빗한 1:1 대화를 나눌 수 있으며, 실시간 메시지 작성 및 전송이 가능합니다.'
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

export default Chat; 