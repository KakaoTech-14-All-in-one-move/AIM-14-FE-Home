import React, { FC, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "어떤 발표 상황에서 사용할 수 있나요?",
    answer: "비즈니스 프레젠테이션, 학술 발표, 면접 준비 등 다양한 상황에서 활용할 수 있습니다. AI가 각 상황에 맞는 맞춤형 피드백을 제공합니다."
  },
  {
    question: "어떠한 내용의 피드백을 받을 수 있나요?",
    answer: "영상 피드백은 시선처리, 얼굴 표정, 제스처, 자세, 감정스크립트 행동 & 음직임에 대한 5가지 항목에 대한 피드백을 제공하며, 음성 피드백은 목소리 유사도, 평균 발화기 속도, 평균 발음 정확도, 대본 유사도 이렇게 4가지 항목에 대한 피드백을 제공합니다."
  },
  {
    question: "어떤 기기에서 사용할 수 있나요?",
    answer: "웹캠과 마이크가 있는 모든 데스크톱 브라우저에서 사용 가능합니다."
  },
  {
    question: "개인정보는 안전한가요?",
    answer: "모든 데이터는 암호화되어 저장되며, 사용자의 동의 없이는 어떠한 정보도 외부에 공유되지 않습니다. AI 학습에 사용되는 데이터도 완전히 익명화됩니다."
  },
  {
    question: "무료로 사용할 수 있나요?",
    answer: "기본적인 기능은 무료로 제공됩니다."
  },
  {
    question: "피드백은 얼마나 빨리 받을 수 있나요?",
    answer: "영상 시간에 따라 피드백이 나오는 시간에 변동이 생길수 있습니다."
  },
  {
    question: "발표 연습 영상은 저장되나요?",
    answer: "아니요, 발표 영상에 데하여 다운로드는 지원히지만, 플랫폼에서 영상을 저장해서 보관하지는 않습니다."
  },
  {
    question: "다른 사람과 함께 연습할 수 있나요?",
    answer: "네, 실시간 화상 채팅을 통해 다른 사용자와 함께 발표 연습을 할 수 있으며, 서로에게 피드백을 주고받을 수 있습니다."
  },
  {
    question: "AI 피드백의 정확도는 어느 정도인가요?",
    answer: "AI 기술을 활용하여 최대한 높은 정확도의 피드백을 제공하기 위해 노력합니다, 지속적인 모델 업데이트를 통해 정확도를 계속 향상시키고 있습니다."
  },
  {
    question: "인터넷 연결이 불안정할 때도 사용할 수 있나요?",
    answer: "인터넷을 사용하지 않으면 사용할수 없습니다. 인터넷이 안정적인 환경에서 접속해 사용해주세요."
  }
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  useEffect(() => {
    // 이펙트 코드 작성
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-[#2b2d31]">
      <main className="flex-1 flex items-center justify-center py-8">
        <div className="w-full max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* 배경 애니메이션 */}
          <div className="fixed top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-yellow-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
            <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
          </div>

          <div className="relative z-10">
            <div className="text-center mb-12">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl"
              >
                자주 묻는 질문
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="mt-4 text-xl text-gray-600 dark:text-gray-300"
              >
                궁금하신 점을 확인해보세요
              </motion.p>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white dark:bg-gray-800 rounded-lg shadow-sm"
                >
                  <button
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                    className="w-full px-6 py-4 text-left focus:outline-none"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-lg font-medium text-gray-900 dark:text-white">
                        {faq.question}
                      </span>
                      <span className="ml-6 flex-shrink-0">
                        <motion.svg
                          animate={{ rotate: openIndex === index ? 180 : 0 }}
                          className="h-6 w-6 text-gray-500 dark:text-gray-400"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
                        </motion.svg>
                      </span>
                    </div>
                  </button>

                  <AnimatePresence>
                    {openIndex === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-4 text-gray-600 dark:text-gray-300">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-white dark:bg-gray-800 mt-auto">
        {/* Footer content */}
      </footer>
    </div>
  );
};

export default FAQ; 