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
    name: "Toby.kim (김대현)",
    role: "AI Engineer, Product Manager",
    description: "AI 기술로 모두가 자신감 있게 발표할 수 있는 세상을 만들어가는 PM 겸 AI 엔지니어입니다.",
    skills: ["PyTorch", "Computer Vision", "Multimodal", "LLM", "MLOPS", "Product Management"]
  },
  {
    name: "Teddy.kim (김영진)",
    role: "Full Stack Developer (Chatting, Login)",
    description: "누구나 편안하게 대화할 수 있는 플랫폼을 구축하는 백엔드 개발자입니다.",
    skills: ["Spring", "Java", "Redis", "RabbitMQ"]
  },
  {
    name: "Neo.lee (이정진)",
    role: "Full Stack Developer (Media Chat)",
    description: "기술의 경계를 넘어 모두가 가깝게 연결되는 미디어 통신의 새로운 길을 여는 개발자입니다.",
    skills: ["Spring", "Java", "Websocket", "WebRTC"]
  },
  {
    name: "Selina.lee (이소민)",
    role: "Cloud Engineer",
    description: "안정적이고 확장 가능한 인프라로 더 많은 사람들의 소통을 지원하는 Cloud 엔지니어입니다.",
    skills: ["Docker", "AWS", "CI/CD", "Jenkins", "Kubernetes"]
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
                Pitching 개발팀은 "모두가 자신 있게 소통하며 서로 연결될 수 있는 세상"을 만들기 위해 노력합니다.
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