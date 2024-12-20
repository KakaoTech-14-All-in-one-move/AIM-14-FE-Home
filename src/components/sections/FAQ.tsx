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
    question: "실시간으로 피드백을 받을 수 있나요?",
    answer: "네, 발표 중에도 실시간으로 음성, 제스처, 시선 처리 등에 대한 피드백을 받을 수 있습니다. 또한 발표 후에는 더 상세한 분석 리포트를 제공합니다."
  },
  {
    question: "어떤 기기에서 사용할 수 있나요?",
    answer: "웹캠과 마이크가 있는 모든 데스크톱 브라우저에서 사용 가능합니다. 모바일 버전도 곧 출시될 예정입니다."
  },
  {
    question: "개인정보는 안전한가요?",
    answer: "모든 데이터는 암호화되어 저장되며, 사용자의 동의 없이는 어떠한 정보도 외부에 공유되지 않습니다. AI 학습에 사용되는 데이터도 완전히 익명화됩니다."
  },
  {
    question: "무료로 사용할 수 있나요?",
    answer: "기본적인 기능은 무료로 제공됩니다. 더 전문적인 기능을 원하시는 경우 프리미엄 플랜을 이용하실 수 있습니다."
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