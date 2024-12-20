import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Button from '../components/common/Button.tsx';
import { FadeIn } from '../components/common/Animation.tsx';
import VideoCallIcon from '../assets/icons/VideoCallIcon.tsx';
import VoiceCallIcon from '../assets/icons/VoiceCallIcon.tsx';
import ChatIcon from '../assets/icons/ChatIcon.tsx';
import AIAnalysisIcon from '../assets/icons/AIAnalysisIcon.tsx';

interface Feature {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  icon: React.ReactNode;
  path: string;
}

const features: Feature[] = [
  {
    id: 'video-call',
    title: '화상통화',
    description: '실시간 화상 통화를 통한 1:1 발표 연습',
    longDescription: '실시간 화상 통화로 멘토와 1:1 발표 연습을 진행하세요. 전문가의 즉각적인 피드백을 받으며 발표 실력을 향상시킬 수 있습니다.',
    icon: <VideoCallIcon />,
    path: '/features/video-call'
  },
  {
    id: 'voice-call',
    title: '음성통화',
    description: '음성 통화를 통한 발��� 연습',
    longDescription: '음성 통화로 발표 연습에 집중하세요. 목소리 톤, 발음, 속도 등 음성에 초점을 맞춘 피드백을 받을 수 있습니다.',
    icon: <VoiceCallIcon />,
    path: '/features/voice-call'
  },
  {
    id: 'chat',
    title: '채팅',
    description: '실시간 채팅을 통한 피드백',
    longDescription: '실시간 채팅으로 즉각적인 피드백을 주고받으세요. 발표 중이나 후에 상세한 피드백을 텍스트로 공유할 수 있습니다.',
    icon: <ChatIcon />,
    path: '/features/chat'
  },
  {
    id: 'ai-feedback',
    title: 'AI 발표 피드백',
    description: 'AI가 제공하는 실시간 발표 분석 및 피드백',
    longDescription: 'AI가 당신의 발표를 실시간으로 분석하고 개선점을 제안합니다. 자세, 목소리, 시선 등 다양한 측면에서 객관적인 피드백을 받아보세요.',
    icon: <AIAnalysisIcon />,
    path: '/features/ai-feedback'
  }
];

const Features: React.FC = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-[#2b2d31]">
      {/* 배경 장식 */}
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-yellow-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
      </div>

      <main className="relative z-10 flex-grow container mx-auto px-4 sm:px-6 lg:px-8">
        {/* 헤더 섹션 */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto mt-48 mb-48"
        >
          <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white sm:text-5xl mb-6">
            SPEAK EASY, PITCHING!
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 leading-loose">
            우리의 다양한 기능은 발표 연습을 보다 효과적으로 만들어 줍니다.<br />
            화상통화, 음성통화, 채팅, AI 피드백을 통해 실시간으로 피드백을 받고,<br />
            발표 능력을 향상시킬 수 있습니다.<br />
            각 기능은 발표자의 필요에 맞춰 설계되어 있으며,<br />
            전문가의 도움을 통해 자신감을 가지고 발표할 수 있도록 도와줍니다.
          </p>
        </motion.section>

        {/* 기능 카드 섹션 */}
        <section className="max-w-5xl mx-auto grid grid-cols-1 gap-8 sm:grid-cols-2 mb-20">
          {features.map((feature, index) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="relative group"
            >
              <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {feature.title}
                  </h3>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-[#fee500] rounded-lg flex items-center justify-center text-2xl">
                      {feature.icon}
                    </div>
                    <Link
                      to={feature.path}
                      className="w-12 h-12 bg-gray-700 hover:bg-gray-600 rounded-lg flex items-center justify-center transition-colors"
                    >
                      <span className="text-2xl text-white">+</span>
                    </Link>
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mt-2 leading-relaxed">
                  {feature.longDescription}
                </p>
                <div className="mt-4 flex items-center text-[#fee500] group-hover:text-yellow-400">
                  <Link to={feature.path} className="text-sm">더 알아보기</Link>
                  <svg
                    className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </div>
            </motion.div>
          ))}
        </section>
      </main>

      {/* 시작하기 섹션 */}
      <section className="relative z-10 py-16 bg-gray-50/80 dark:bg-[#2b2d31]/80">
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
                onClick={() => window.location.href = 'https://pitching.site/login'}
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

export default Features;