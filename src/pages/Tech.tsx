import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { techPosts } from '../data/techPosts.ts';

const Tech: React.FC = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-[#2b2d31]">
      <main className="flex-1 flex items-center justify-center py-32">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* 배경 애니메이션 */}
          <div className="fixed top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-yellow-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
            <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
          </div>

          <div className="relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto mb-16"
            >
              <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white sm:text-5xl mb-6">
                Tech Blog
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300">
                Pitching의 기술 이야기를 공유합니다
              </p>
            </motion.div>

            {/* 카테고리 필터 */}
            <div className="flex justify-center space-x-4 mb-12">
              {['All', 'Frontend', 'Backend', 'AI/ML', 'Infrastructure'].map((category) => (
                <button
                  key={category}
                  className="px-4 py-2 rounded-full bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-[#fee500] hover:text-gray-900 transition-colors"
                >
                  {category}
                </button>
              ))}
            </div>

            {/* 블로그 포스트 목록 */}
            <div className="space-y-12 mb-12">
              {techPosts.map((post, index) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex flex-col md:flex-row bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="md:w-1/3">
                    <img
                      src={post.imageUrl}
                      alt={post.title}
                      className="w-full h-64 object-cover"
                    />
                  </div>
                  <div className="flex-1 p-8">
                    <div className="flex items-center space-x-4 mb-4">
                      <span className="px-3 py-1 bg-[#fee500] text-gray-900 rounded-full text-sm">
                        {post.category}
                      </span>
                      <span className="text-gray-500 dark:text-gray-400 text-sm">
                        {post.date}
                      </span>
                      <span className="text-gray-500 dark:text-gray-400 text-sm">
                        {post.readTime} 읽기
                      </span>
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                      <Link to={`/tech/${post.id}`} className="hover:text-[#fee500]">
                        {post.title}
                      </Link>
                    </h2>
                    <p className="text-gray-600 dark:text-gray-300 mb-6">
                      {post.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-500 dark:text-gray-400">
                        By {post.author}
                      </span>
                      <Link
                        to={`/tech/${post.id}`}
                        className="text-[#fee500] hover:text-yellow-400 flex items-center"
                      >
                        자세히 보기
                        <svg
                          className="w-4 h-4 ml-2"
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
                      </Link>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Tech; 