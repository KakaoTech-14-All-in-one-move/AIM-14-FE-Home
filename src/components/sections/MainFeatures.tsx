import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import {
  VideoCallIcon,
  ChatIcon,
  VoiceCallIcon,
  AIAnalysisIcon,
} from '../../assets/icons/index.tsx';

interface Service {
  title: string;
  path: string;
  apps: {
    icon: React.ReactNode;
    name: string;
    bg: string;
  }[];
}

const MainFeatures: FC = () => {
  const services: Service[] = [
    {
      title: '화상통화',
      path: '/features/video-call',
      apps: [
        { icon: <VideoCallIcon />, name: 'Video', bg: 'bg-[#fee500] dark:bg-yellow-500' },
        { icon: '+', name: '더보기', bg: 'bg-gray-400 dark:bg-gray-600' },
      ]
    },
    {
      title: '채팅',
      path: '/features/chat',
      apps: [
        { icon: <ChatIcon />, name: 'Chat', bg: 'bg-[#fee500] dark:bg-yellow-500' },
        { icon: '+', name: '더보기', bg: 'bg-gray-400 dark:bg-gray-600' },
      ]
    },
    {
      title: '음성통화',
      path: '/features/voice-call',
      apps: [
        { icon: <VoiceCallIcon />, name: 'Voice', bg: 'bg-[#fee500] dark:bg-yellow-500' },
        { icon: '+', name: '더보기', bg: 'bg-gray-400 dark:bg-gray-600' },
      ]
    },
    {
      title: 'AI 발표 피드백',
      path: '/features/ai-feedback',
      apps: [
        { icon: <AIAnalysisIcon />, name: 'AI', bg: 'bg-[#fee500] dark:bg-yellow-500' },
        { icon: '+', name: '더보기', bg: 'bg-gray-400 dark:bg-gray-600' },
      ]
    },
  ];

  return (
    <section className="py-12 bg-gray-50 dark:bg-[#2b2d36]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2 mb-8">
          <span className="bg-[#fee500] dark:bg-[#fee500] p-2 rounded-lg">
            <svg
              className="w-6 h-6 text-gray-900 dark:text-gray-900"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
              />
            </svg>
          </span>
          <h2 className="text-2xl font-bold dark:text-white">더 나은 소통, 연결을 위한 기능</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex justify-between items-center">
                <h3 className="text-xl font-bold dark:text-white">{service.title}</h3>
                <div className="flex gap-2">
                  {service.apps.map((app, appIndex) => (
                    appIndex === 1 ? (
                      <Link
                        key={appIndex}
                        to={service.path}
                        className={`${app.bg} w-12 h-12 rounded-2xl flex items-center justify-center text-white hover:opacity-90 transition-opacity`}
                      >
                        {app.icon}
                      </Link>
                    ) : (
                      <div
                        key={appIndex}
                        className={`${app.bg} w-12 h-12 rounded-2xl flex items-center justify-center text-white`}
                      >
                        {app.icon}
                      </div>
                    )
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MainFeatures;