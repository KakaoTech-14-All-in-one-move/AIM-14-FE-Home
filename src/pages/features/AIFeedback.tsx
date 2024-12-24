import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import Button from '../../components/common/Button.tsx';
import { FadeIn } from '../../components/common/Animation.tsx';
import AIAnalysisIcon from '../../assets/icons/AIAnalysisIcon.tsx';
import pronunFeedbackImage from '../../assets/images/pronun_feedback.png';
import videoFeedbackImage from '../../assets/images/video_feedback.png';
import presentationImage from '../../assets/images/presentation.png';

const AIFeedback = () => {
  // 페이지 진입 시 스크롤을 맨 위로 이동
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
                  <AIAnalysisIcon className="w-8 h-8 text-white" />
                </div>
              </div>
              <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white sm:text-5xl">
                AI 발표 피드백
              </h1>
              <p className="mt-4 text-xl text-gray-600 dark:text-gray-300">
                인공지능 기반의 실시간 발표 분석 및 피드백 서비스
              </p>
            </div>
          </div>
        </motion.section>

        {/* AI 피드백 이미지들 */}
        <section className="py-16 bg-gray-100/80 dark:bg-[#2b2d36]/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* 왼쪽: 발표 진행 페이지 */}
              <div className="md:flex md:items-center">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                    발표 진행 페이지
                  </h3>
                  <img 
                    src={presentationImage} 
                    alt="AI 발표 분석" 
                    className="w-full rounded-lg shadow-lg"
                  />
                </div>
              </div>

              {/* 오른쪽: 피드백 이미지들 */}
              <div className="space-y-8">
                {/* 영상 피드백 */}
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                    발표 영상 피드백
                  </h3>
                  <img 
                    src={videoFeedbackImage} 
                    alt="영상 피드백 분석" 
                    className="w-full rounded-lg shadow-lg"
                  />
                </div>

                {/* 발음 피드백 */}
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                    발표 음성 피드백
                  </h3>
                  <img 
                    src={pronunFeedbackImage} 
                    alt="발음 피드백 분석" 
                    className="w-full rounded-lg shadow-lg"
                  />
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
                        title: 'Computer Vision',
                        description: 'MediaPipe와 OpenCV를 활용한 실시간 제스처, 표정, 자세 분석 및 CV Detection 기술 적용'
                      },
                      {
                        title: '음성 인식 & 분석',
                        description: 'Whisper와 Librosa를 활용한 음성 인식, 발음 분석 및 TTS(Text-to-Speech) 기술 구현'
                      },
                      {
                        title: 'Framework',
                        description: 'Python, TensorFlow 기반의 AI 모델 학습 및 FastAPI를 통한 실시간 분석 서비스 제공'
                      },
                      {
                        title: '영상 처리 엔진',
                        description: 'OpenCV, FFmpeg을 활용한 실시간 영상 처리 및 피드백 시스템 구현'
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
                        title: 'AI 피드백',
                        description: '발표중 잘못된 행동, 제스처, 말하는 속도, 발음정확도 등을 분석하여 즉각적인 피드백을 제공합니다.'
                      },
                      {
                        title: '레포트 제공 (추후 추가 예정)',
                        description: '발표 후 상세한 분석 리포트를 제공하여 개선이 필요한 부분을 확인할 수 있습니다.'
                      },
                      {
                        title: '맞춤형 조언',
                        description: 'AI의 분석 데이터를 바탕으로 전문화된 발표 스킬 향상 조언을 제공합니다.'
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

export default AIFeedback; 