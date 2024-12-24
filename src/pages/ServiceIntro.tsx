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
            PITCHING은 "모두가 편하게 소통하고, 자신있게 말하며 연결된 세상을 만들자." <br />
            이 모토를 가지고 만든 플랫폼입니다.<br />
            발표를 비하고 연습하는 과정에서 사용자의 발표 태도, 시선 처리, 음성 톤 등을 분석하여 <br />
            즉각적이고 실질적인 개선 포인트를 제공합니다.<br />
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
                  { title: 'Negative', desc: '발표 실패에 대한 부정적인 경험 반복' },
                  { title: 'Confidence', desc: '발표 공포증으로 인한 자신감 저하' },
                  { title: 'Achivement', desc: '상호작용 부족으로 인한 소통의 어려움' },
                  { title: 'Convenience', desc: '대중에게 연결을 할때 불안, 장애를 일으키는 증상' },
                  { title: 'FOPS (대중 연설 공포증)', desc: '대중에게 연결을 할때 불안, 장애를 일으키는 증상' },
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
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="aspect-square bg-yellow-300 rounded-full flex flex-col items-center justify-center p-8 text-center"
              >
                <div className="absolute -top-4 bg-yellow-300 px-6 py-2 rounded-full">
                  <span className="text-gray-800 font-bold text-lg"># 우리의 해결책</span>
                </div>
                <h3 className="text-4xl font-bold text-gray-800 mb-8">소통, 자신감, 연결</h3>
                <p className="text-2xl text-gray-700 leading-relaxed">
                  "모두가 편하게 소통하고,<br />
                  자신있게 말하며<br />
                  연결된 세상을 만들자."
                </p>
                <div className="absolute -bottom-4 bg-yellow-300 px-6 py-2 rounded-full">
                  <span className="text-gray-800 font-bold text-lg"># SOLUTION</span>
                </div>
              </motion.div>
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
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                title: '화상통화',
                features: ['실시간 화상 연결', '표정/제스처 공유', '친밀한 발표 연습'],
                icon: '🎥'
              },
              {
                title: '음성통화',
                features: ['부담 없는 대화', '자연스러운 연습', '음성 중심 피드백'],
                icon: '🎤'
              },
              {
                title: '채팅',
                features: ['실시간 소통', '즉각적 피드백', '시공간 제약 없음'],
                icon: '💬'
              },
              {
                title: 'AI 발표 피드백',
                features: ['시선/표정/제스처 분석', '음성 톤/속도 분석', '실시간 개선점 제시'],
                icon: '🤖'
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
                    <li key={i} className="text-gray-600 dark:text-gray-300 flex items-center text-sm">
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
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">발표 특화 플랫폼</h3>
                  <p className="text-gray-600 dark:text-gray-300">Discord와 유사한 플랫폼에서 발표 피드백을 결합한 올인원 플랫폼</p>
                </div>
                <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">통합 플드백 시스템</h3>
                  <p className="text-gray-600 dark:text-gray-300">협업성 + 발표 피드백 + 커뮤니케이션 기능 통합</p>
                </div>
                <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">AI 기술 활용</h3>
                  <p className="text-gray-600 dark:text-gray-300">AI 분석을 통한 전문적인 발표 피드백 제공</p>
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
                  { title: '발표 능력 향상', desc: '발표에 대한 종합적인 피드백' },
                  { title: '자신감 증가', desc: '반복 연습과 개선 포인트 제공' },
                  { title: '커뮤니케이션 강화', desc: '비언어 요소 개선 및 효과적인 소통방법 제시' },
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

      {/* 개발팀 목표 섹션 */}
      <section className="py-20 bg-gray-50 dark:bg-[#2b2d31]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Pitching의 Vision</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 mt-4">
              모두가 편하게 소통하고 자신 있게 말할 수 있는 환경을 제공하여<br />
              사용자들이 발표 불안을 극복하고 자신감을 키울 수 있도록 돕자.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                number: "01",
                title: "현대인의 발표 & 소통\n능력 향상",
                description: "현대인의 발표 & 소통 능력 향상에 도움이 될 수 있는 AI 발표 피드백 솔루션을 제공",
                icon: "🎯"
              },
              {
                number: "02",
                title: "소통 & 협업에 도움",
                description: "원활한 커뮤니케이션을 위한 채팅, 화상 & 음성통화 기능 제공",
                icon: "🤝"
              },
              {
                number: "03",
                title: "도전과 배움, 그리고 성장",
                description: "개발팀의 새로운 기술적 Challenge & 성취를 통해 지속가능한 성장 추구",
                icon: "🚀"
              }
            ].map((goal, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow"
              >
                <div className="flex items-center mb-4">
                  <span className="text-2xl font-bold text-yellow-400 mr-3">{goal.number}</span>
                  <div className="text-3xl">{goal.icon}</div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 whitespace-pre-line">
                  {goal.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {goal.description}
                </p>
              </motion.div>
            ))}
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
              Pitching으로 세상과 연결되고 소통해보세요. 바로 경험해보면서 느껴보세요!
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