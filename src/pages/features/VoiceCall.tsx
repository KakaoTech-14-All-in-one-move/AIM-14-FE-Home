import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import Button from '../../components/common/Button.tsx';
import { FadeIn } from '../../components/common/Animation.tsx';
import VoiceCallIcon from '../../assets/icons/VoiceCallIcon.tsx';

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
                        title: 'WebRTC Audio',
                        description: '브라우저 기반의 실시간 음성 통신으로 지연 없는 고품질 통화를 제공합니다.'
                      },
                      {
                        title: 'Opus Codec',
                        description: '최적화된 오디오 코덱으로 낮은 대역폭에서도 고품질 음성을 전달합니다.'
                      },
                      {
                        title: 'Echo Cancellation',
                        description: '고급 에코 제거 알고리즘으로 깨끗한 음성 품질을 보장합니다.'
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
                        title: '노이즈 캔슬링',
                        description: '주변 소음을 효과적으로 제거하여 선명한 음성을 전달이 가능합니다.'
                      },
                      {
                        title: '다자간 통화',
                        description: '최대 8명까지 동시 음성 통화가 가능한 그룹 통화를 지원합니다.'
                      },
                      {
                        title: '자동 음량 조절',
                        description: '상황에 따라 자동으로 음량을 조절하여 최적의 통화 환경을 제공합니다.'
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

export default VoiceCall; 