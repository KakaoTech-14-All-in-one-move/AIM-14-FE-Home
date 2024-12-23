import React, { useMemo } from 'react';
import { FC } from 'react';
import { motion } from 'framer-motion';
import { 
  FaReact,
  FaPython,
  FaJava,
  FaDocker,
  FaGithub,
  FaLinux,
  FaDiscord,
  FaGitAlt,
  FaSlack
} from 'react-icons/fa';

import { 
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiSpring,
  SiWebrtc,
  SiRedis,
  SiRabbitmq,
  SiPostgresql,
  SiAmazondynamodb,
  SiTensorflow,
  SiOpenai,
  SiOpencv,
  SiFastapi,
  SiNginx,
  SiJenkins,
  SiTerraform,
  SiPrometheus,
  SiGrafana,
  SiDiscord,
  SiNotion,
  SiJira,
  SiSlack,
  SiVite,
  SiZustand,
  SiWebsocket,
  SiAmazons3,
  SiSwagger,
  SiJsonwebtokens,
  SiAuth0,
  SiMediapipe,
  SiFfmpeg,
  SiAnsible,
  SiGit,
  SiAmazonwebservices
} from 'react-icons/si';

import { BiNetworkChart } from 'react-icons/bi';

interface Technology {
  name: string;
  description: string;
  icon: JSX.Element;
  category: 'frontend' | 'backend' | 'ai' | 'infrastructure' | 'monitoring' | 'database' | 'collaboration';
}

const technologies: Technology[] = [
  // Frontend
  {
    name: 'React + Vite',
    description: '홈페이지 및 서비스 UI 개발 도구',
    icon: <div className="flex gap-2">
      <FaReact className="text-[#61DAFB] text-3xl" />
      <SiVite className="text-[#646CFF] text-3xl" />
    </div>,
    category: 'frontend'
  },
  {
    name: 'TypeScript',
    description: '타입 안정성을 갖춘 JavaScript 수퍼셋',
    icon: <SiTypescript className="text-[#3178C6] text-3xl" />,
    category: 'frontend'
  },
  {
    name: 'Tailwind CSS',
    description: '유틸리티 우선 CSS 프레임워크',
    icon: <SiTailwindcss className="text-[#06B6D4] text-3xl" />,
    category: 'frontend'
  },
  {
    name: 'Zustand',
    description: '간단하고 빠른 상태 관리 라이브러리',
    icon: <span className="text-3xl">🐻</span>,
    category: 'frontend'
  },
  
  // Backend
  {
    name: 'Java',
    description: '강력한 서버 사이드 프로그래밍 언어',
    icon: <FaJava className="text-[#007396] text-3xl" />,
    category: 'backend'
  },
  {
    name: 'Spring WebFlux',
    description: '반응형 웹 애플리케이션 프레임워크',
    icon: <SiSpring className="text-[#6DB33F] text-3xl" />,
    category: 'backend'
  },
  {
    name: 'WebSocket',
    description: '실시간 양방향 통신 프로토콜',
    icon: <BiNetworkChart className="text-[#010101] text-3xl" />,
    category: 'backend'
  },
  {
    name: 'WebRTC',
    description: '실시간 음성/영상 통신 기반',
    icon: <SiWebrtc className="text-[#333333] text-3xl" />,
    category: 'backend'
  },
  {
    name: 'RabbitMQ',
    description: '메시지 브로커 시스템',
    icon: <SiRabbitmq className="text-[#FF6600] text-3xl" />,
    category: 'backend'
  },
  {
    name: 'Amazon S3',
    description: '확장 가능한 객체 스토리지 서비스',
    icon: <SiAmazons3 className="text-[#569A31] text-3xl" />,
    category: 'backend'
  },
  {
    name: 'Swagger',
    description: 'API 문서화 및 테스트 도구',
    icon: <SiSwagger className="text-[#85EA2D] text-3xl" />,
    category: 'backend'
  },
  {
    name: 'JWT',
    description: '안전한 정보 전송을 위한 토큰 기반 인증',
    icon: <SiJsonwebtokens className="text-[#000000] text-3xl" />,
    category: 'backend'
  },
  {
    name: 'OAuth 2.0',
    description: '사용자 인증 및 권한 부여 프로토콜',
    icon: <SiAuth0 className="text-[#EB5424] text-3xl" />,
    category: 'backend'
  },

  // Database
  {
    name: 'PostgreSQL',
    description: '강력한 관계형 데이터베이스',
    icon: <SiPostgresql className="text-[#336791] text-3xl" />,
    category: 'database'
  },
  {
    name: 'Amazon DynamoDB',
    description: '완전 관리형 NoSQL 데이터베이스',
    icon: <SiAmazondynamodb className="text-[#4053D6] text-3xl" />,
    category: 'database'
  },
  {
    name: 'Redis',
    description: '고성능 인메모리 데이터 저장소',
    icon: <SiRedis className="text-[#DC382D] text-3xl" />,
    category: 'database'
  },

  // AI
  {
    name: 'Python',
    description: 'AI 모델 개발을 위한 주력 언어',
    icon: <FaPython className="text-[#3776AB] text-3xl" />,
    category: 'ai'
  },
  {
    name: 'TensorFlow',
    description: '딥러닝 모델 개발 및 학습',
    icon: <SiTensorflow className="text-[#FF6F00] text-3xl" />,
    category: 'ai'
  },
  {
    name: 'MediaPipe',
    description: 'Google AI Edge 솔루션',
    icon: <SiMediapipe className="text-[#00A3BF] text-3xl" />,
    category: 'ai'
  },
  {
    name: 'OpenAI',
    description: 'Vision, TTS, Whisper 활용',
    icon: '🤖',
    category: 'ai'
  },
  {
    name: 'OpenCV',
    description: '컴퓨터 비전 라이브러리',
    icon: <SiOpencv className="text-[#5C3EE8] text-3xl" />,
    category: 'ai'
  },
  {
    name: 'FFmpeg',
    description: '멀티미디어 처리 프레임워크',
    icon: <SiFfmpeg className="text-[#007808] text-3xl" />,
    category: 'ai'
  },
  {
    name: 'FastAPI',
    description: '고성능 Python API 프레임워크',
    icon: <SiFastapi className="text-[#009688] text-3xl" />,
    category: 'ai'
  },

  // Cloud (Infrastructure & Monitoring)
  {
    name: 'Linux',
    description: '서버 운영체제',
    icon: <FaLinux className="text-[#FCC624] text-3xl" />,
    category: 'infrastructure'
  },
  {
    name: 'AWS',
    description: '클라우드 인프라 구축',
    icon: <SiAmazonwebservices className="text-[#FF9900] text-3xl" />,
    category: 'infrastructure'
  },
  {
    name: 'Docker',
    description: '컨테이너 기반 개발 및 배포',
    icon: <FaDocker className="text-[#2496ED] text-3xl" />,
    category: 'infrastructure'
  },
  {
    name: 'Nginx',
    description: '웹 서버 및 리버스 프록시',
    icon: <SiNginx className="text-[#009639] text-3xl" />,
    category: 'infrastructure'
  },
  {
    name: 'Jenkins',
    description: 'CI/CD 자동화',
    icon: <SiJenkins className="text-[#D24939] text-3xl" />,
    category: 'infrastructure'
  },
  {
    name: 'Terraform',
    description: 'IaC 인프라 자동화',
    icon: <SiTerraform className="text-[#7B42BC] text-3xl" />,
    category: 'infrastructure'
  },
  {
    name: 'Prometheus',
    description: '시계열 데이터베이스 �� 모니터링',
    icon: <SiPrometheus className="text-[#E6522C] text-3xl" />,
    category: 'infrastructure'
  },
  {
    name: 'Grafana',
    description: '메트릭 시각화 및 모니터링',
    icon: <SiGrafana className="text-[#F46800] text-3xl" />,
    category: 'infrastructure'
  },
  {
    name: 'Ansible',
    description: '인프라 자동화 및 구성 관리',
    icon: <SiAnsible className="text-[#EE0000] text-3xl" />,
    category: 'infrastructure'
  },

  // Collaboration
  {
    name: 'Git',
    description: '분산 버전 관리 시스템',
    icon: <FaGithub className="text-[#F05032] text-3xl" />,
    category: 'collaboration'
  },
  {
    name: 'GitHub',
    description: '코드 호스팅 및 협업 플랫폼',
    icon: <FaGithub className="text-[#181717] text-3xl" />,
    category: 'collaboration'
  },
  {
    name: 'GitLens',
    description: 'Git 코드 이력 및 변경사항 추적',
    icon: <SiGit className="text-[#F05032] text-3xl" />,
    category: 'collaboration'
  },
  {
    name: 'Git Flow',
    description: '브랜치 전략 및 워크플로우',
    icon: <FaGitAlt className="text-[#F05032] text-3xl" />,
    category: 'collaboration'
  },
  {
    name: 'Discord',
    description: '실시간 커뮤니케이션 플랫폼',
    icon: <FaDiscord className="text-[#5865F2] text-3xl" />,
    category: 'collaboration'
  },
  {
    name: 'Notion',
    description: '문서 작성 및 지식 관리',
    icon: <SiNotion className="text-[#000000] text-3xl" />,
    category: 'collaboration'
  },
  {
    name: 'Jira',
    description: '프로젝트 및 이슈 관리',
    icon: <SiJira className="text-[#0052CC] text-3xl" />,
    category: 'collaboration'
  },
  {
    name: 'Slack',
    description: '팀 커뮤니케이션 플랫폼',
    icon: <FaSlack className="text-[#4A154B] text-3xl" />,
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
    database: '📚 Database',
    ai: '🤖 AI (VLM & Pronun)',
    infrastructure: '☁️ Cloud (Infra & Monitoring)',
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
            Pitching 개발��은 이러한 기술 & 도구들을 활용하여 개발 및 협업을 진행해요.
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