import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import Button from '../components/common/Button.tsx';
import { FadeIn } from '../components/common/Animation.tsx';

const ServiceIntro = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-gray-50 dark:bg-[#2b2d31]">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mt-48 mb-48"
          >
            <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-6">
              SPEAK EASY, PITCHING!
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-loose">
            PITCHING은 "모두가 편하게 소통하고, 자신있게 말하며 연결된 세상을 만들자." 라는 모토를 가지고 만든 플랫폼입니다.<br />
            발표를 준비하고 연습하는 과정에서 사용자의 발표 태도, 시선 처리, 음성 톤 등을 분석하여 즉각적이고 실질적인 개선 포인트를 제공합니다.<br />
또한 채팅, 화상 & 음성통화 기능을 통해 현대인의 발표 능력 향상과 원활한 커뮤니케이션을 지원합니다.
            </p>
          </motion.div>
        </div>
        
        {/* 배경 장식 */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-yellow-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        </div>
      </div>

      {/* 문제 인식 섹션 */}
      <section className="py-20 bg-gray-50 dark:bg-[#2b2d31]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
          >
            <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">문제 인식</h2>
              <div className="space-y-4">
                {[
                  { title: '발표 불안', desc: '사회적 압박감, 발표 실수에 대한 두려움' },
                  { title: '시간 관리 부족', desc: '흐름 유지 실패로 인한 전달력 저하' },
                  { title: '소통의 어려움', desc: '비대면 상황에서의 청중 반응 파악 어려움' },
                  { title: '자신감 부족', desc: '부정적 경험이 발표 능력 저하로 이어짐' }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 }}
                    className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg"
                  >
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{item.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300">{item.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
            <div className="relative">
              {/* 이미지나 일러스트레이션 추가 */}
              <div className="aspect-square bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full opacity-20"></div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 주요 기능 섹션 */}
      <section className="py-20 bg-gray-50 dark:bg-[#2b2d31]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">주요 기능</h2>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: '발표 피드백',
                features: ['시선 처리', '얼굴 표정', '음성 피드백 제공', '영상 다운로드'],
                icon: '🎯'
              },
              {
                title: '음성 피드백',
                features: ['음성 속도', '발음 정확도', '표준어 여부 분석'],
                icon: '🎤'
              },
              {
                title: '화상회의 & 채팅',
                features: ['실시간 AI 분석', '즉각적 피드백', '팀 커뮤니케이션'],
                icon: '💻'
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">{feature.title}</h3>
                <ul className="space-y-2">
                  {feature.features.map((item, i) => (
                    <li key={i} className="text-gray-600 dark:text-gray-300 flex items-center">
                      <svg className="w-4 h-4 mr-2 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 차별화 전략 & 기대효과 섹션 */}
      <section className="py-20 bg-gray-50 dark:bg-[#2b2d31]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">차별화 전략</h2>
              <div className="space-y-4">
                <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">AI 도구</h3>
                  <p className="text-gray-600 dark:text-gray-300">Azure AI Studio, OpenAI(Whisper), Video-LLava 등</p>
                </div>
                <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">통합 플랫폼</h3>
                  <p className="text-gray-600 dark:text-gray-300">발표 피드백 + 화상 회의 기능 제공</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">기대 효과</h2>
              <div className="space-y-4">
                {[
                  { title: '발표 능력 향상', desc: '종합적이고 즉각적인 피드백' },
                  { title: '자신감 증가', desc: '반복 연습과 개선 포인트 제공' },
                  { title: '커뮤니케이션 강화', desc: '비언어적 요소 개선 및 효과적인 소통' },
                  { title: '협업 증대', desc: '화상회의, 채팅으로 팀워크 강화' }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow"
                  >
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{item.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300">{item.desc}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 시작하기 섹션 */}
      <section className="py-16 bg-gray-50/80 dark:bg-[#2b2d31]/80">
        <div className="max-w-7xl mx-auto">
          <div className="border-t border-gray-200 dark:border-gray-700 mb-16"></div>
          
          <div className="px-4 sm:px-6 lg:px-8 text-center">
            <FadeIn>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
                지금 바로 시작하세요!
              </h2>
              <Button
                variant="primary"
                size="lg"
                onClick={() => window.location.href = '/login'}
                className="text-black"
              >
                시작하기
              </Button>
            </FadeIn>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServiceIntro; 