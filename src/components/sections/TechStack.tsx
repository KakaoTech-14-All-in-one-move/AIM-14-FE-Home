import React, { useMemo } from 'react';
import { FC } from 'react';
import { motion } from 'framer-motion';

interface Technology {
  name: string;
  description: string;
  icon: string;
  category: 'frontend' | 'backend' | 'ai' | 'infrastructure' | 'monitoring' | 'database' | 'collaboration';
}

const technologies: Technology[] = [
  // Frontend
  {
    name: 'React',
    description: '사용자 인터페이스 구축을 위한 JavaScript 라이브러리',
    icon: '⚛️',
    category: 'frontend'
  },
  {
    name: 'TypeScript',
    description: '정적 타입 지원을 통한 안정적인 개발',
    icon: '📘',
    category: 'frontend'
  },
  {
    name: 'Tailwind CSS',
    description: '유틸리티 기반의 CSS 프레임워크',
    icon: '🎨',
    category: 'frontend'
  },
  
  // Backend
  {
    name: 'Java',
    description: '강력한 서버 사이드 프로그래밍 언어',
    icon: '☕',
    category: 'backend'
  },
  {
    name: 'Spring Webflux',
    description: '반응형 웹 애플리케이션 개발 프레임워크',
    icon: '🌱',
    category: 'backend'
  },
  {
    name: 'WebSocket',
    description: '실시간 양방향 통신 프로토콜',
    icon: '🔌',
    category: 'backend'
  },
  {
    name: 'WebRTC',
    description: '실시간 음성 및 영상 통신',
    icon: '📡',
    category: 'backend'
  },

  // AI
  {
    name: 'Python',
    description: 'AI 모델 개발을 위한 주력 언어',
    icon: '🐍',
    category: 'ai'
  },
  {
    name: 'TensorFlow',
    description: '딥러닝 모델 개발 및 학습',
    icon: '🧠',
    category: 'ai'
  },
  {
    name: 'MediaPipe',
    description: 'Google AI Edge 솔루션',
    icon: '📊',
    category: 'ai'
  },
  {
    name: 'OpenAI',
    description: 'Vision, TTS, Whisper 활용',
    icon: '🤖',
    category: 'ai'
  },

  // Infrastructure
  {
    name: 'AWS',
    description: '클라우드 인프라 구축',
    icon: '☁️',
    category: 'infrastructure'
  },
  {
    name: 'Docker',
    description: '컨테이너 기반 개발 및 배포',
    icon: '🐳',
    category: 'infrastructure'
  },
  {
    name: 'Kubernetes',
    description: '컨테이너 오케스트레이션',
    icon: '⚓',
    category: 'infrastructure'
  },

  // Monitoring
  {
    name: 'Grafana',
    description: '메트릭 시각화 및 모니터링',
    icon: '📊',
    category: 'monitoring'
  },
  {
    name: 'Prometheus',
    description: '시계열 데이터베이스 및 모니터링',
    icon: '📈',
    category: 'monitoring'
  },

  // Database
  {
    name: 'PostgreSQL',
    description: '관계형 데이터베이스',
    icon: '🐘',
    category: 'database'
  },
  {
    name: 'Redis',
    description: '인메모리 데이터 스토어',
    icon: '⚡',
    category: 'database'
  },
  {
    name: 'DynamoDB',
    description: 'AWS 관리형 NoSQL 데이터베이스',
    icon: '🗄️',
    category: 'database'
  },

  // Collaboration
  {
    name: 'Git',
    description: '분산 버전 관리 시스템',
    icon: '📚',
    category: 'collaboration'
  },
  {
    name: 'GitHub',
    description: '코드 호스팅 및 협업 플랫폼',
    icon: '🐱',
    category: 'collaboration'
  },
  {
    name: 'Jira',
    description: '프로젝트 및 이슈 관리',
    icon: '📋',
    category: 'collaboration'
  }
];

const TechStack: FC = () => {
  const groupedTechnologies = useMemo(() => {
    return technologies.reduce((acc, tech) => {
      if (!acc[tech.category]) {
        acc[tech.category] = [];
      }
      acc[tech.category].push(tech);
      return acc;
    }, {} as Record<string, Technology[]>);
  }, []);

  const categoryNames = {
    frontend: '💻 Frontend',
    backend: '🖥️ Backend',
    ai: '🤖 AI (VLM & Pronun)',
    infrastructure: '☁️ Cloud (Infra)',
    monitoring: '📊 Cloud (Monitoring)',
    database: '📚 Database',
    collaboration: '👥 Collaboration'
  };

  // 페이지 진입 시 스크롤을 맨 위로 이동
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section id="tech-stack" className="relative min-h-screen py-20 bg-gray-50 dark:bg-[#2b2d31] overflow-hidden">
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

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center min-h-[20vh] text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-5xl font-bold text-gray-900 dark:text-white mb-4"
          >
            기술 스택
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl"
          >
            Pitching은 이러한 기술을 활용하여 개발되었어요.
          </motion.p>
        </div>

        <div className="space-y-16 mt-16">
          {Object.entries(groupedTechnologies).map(([category, techs], categoryIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 + categoryIndex * 0.1 }}
              className="relative"
            >
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
                {categoryNames[category as keyof typeof categoryNames]}
              </h3>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {techs.map((tech, index) => (
                  <motion.div
                    key={tech.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                    className="relative group"
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="relative p-6 bg-white dark:bg-gray-800/50 backdrop-blur-sm rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700">
                      <div className="flex items-center space-x-4">
                        <span className="text-4xl">{tech.icon}</span>
                        <div>
                          <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                            {tech.name}
                          </h3>
                          <span className="inline-block px-2 py-1 mt-2 text-xs font-medium text-gray-600 dark:text-gray-300 bg-gray-100 dark:bg-gray-700 rounded">
                            {tech.category}
                          </span>
                        </div>
                      </div>
                      <p className="mt-4 text-gray-600 dark:text-gray-300">
                        {tech.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;