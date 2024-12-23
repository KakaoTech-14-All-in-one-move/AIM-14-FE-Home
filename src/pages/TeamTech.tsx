import React, { useEffect } from 'react';
import { FC } from 'react';
import { motion } from 'framer-motion';

interface TeamMember {
  name: string;
  role: string;
  description: string;
  skills: string[];
}

const teamMembers: TeamMember[] = [
  {
    name: "김철수",
    role: "AI 엔지니어",
    description: "음성 인식 및 자연어 처리 전문가. 5년간의 머신러닝 모델 개발 경험을 보유하고 있습니다.",
    skills: ["TensorFlow", "PyTorch", "NLP", "Speech Recognition"]
  },
  {
    name: "이영희",
    role: "프론트엔드 개발자",
    description: "사용자 경험을 중시하는 UI/UX 전문가. React와 TypeScript를 활용한 웹 애플리케이션 개발을 담당합니다.",
    skills: ["React", "TypeScript", "Tailwind CSS", "Next.js"]
  },
  {
    name: "박지민",
    role: "백엔드 개발자",
    description: "클라우드 인프라 및 서버 아키텍처 전문가. 확장 가능한 시스템 설계와 구현을 담당합니다.",
    skills: ["Node.js", "Python", "AWS", "Docker"]
  },
  {
    name: "정민수",
    role: "UX 리서처",
    description: "사용자 연구 및 서비스 기획 전문가. 사용자 중심의 서비스 개선을 이끌어냅니다.",
    skills: ["User Research", "Prototyping", "Service Planning", "Data Analysis"]
  }
];

const TeamTech: FC = () => {
  // 페이지 진입 시 스크롤을 맨 위로 이동
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-[#2b2d31]">
      <main className="flex-1 flex items-center justify-center py-8">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="fixed top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-yellow-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
            <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
          </div>

          <div className="relative z-10">
            <div className="text-center mb-36">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-4xl font-extrabold text-gray-900 dark:text-white sm:text-5xl"
              >
                Team Tech
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="mt-4 text-xl text-gray-600 dark:text-gray-300"
              >
                혁신적인 발표 연습 서비스를 만드는 전문가들을 소개합니다
              </motion.p>
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-2">
              {teamMembers.map((member, index) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ 
                    duration: 0.5, 
                    delay: index * 0.1,
                    ease: "easeOut"
                  }}
                  className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="flex flex-col h-full">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                        {member.name}
                      </h3>
                      <p className="mt-1 text-sm font-medium text-yellow-500">
                        {member.role}
                      </p>
                      <p className="mt-3 text-base text-gray-600 dark:text-gray-300">
                        {member.description}
                      </p>
                    </div>
                    <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                      <div className="flex flex-wrap gap-2">
                        {member.skills.map((skill) => (
                          <motion.span
                            key={skill}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ 
                              duration: 0.3, 
                              delay: index * 0.1 + 0.2,
                              ease: "easeOut"
                            }}
                            className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800 dark:bg-yellow-800 dark:text-yellow-100"
                          >
                            {skill}
                          </motion.span>
                        ))}
                      </div>
                    </div>
                  </div>
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

export default TeamTech;