import React, { FC, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { blogPosts } from '../../data/blogData.ts';

const BlogSlider: FC = () => {
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const visibleItems = 4;

  const categoryColors = {
    '에세이': 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300',
    '사용자 후기': 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300',
    '업데이트': 'bg-[#fee500] text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300',
    '뉴스': 'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300'
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => 
      prev === blogPosts.length - visibleItems ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => 
      prev === 0 ? blogPosts.length - visibleItems : prev - 1
    );
  };

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isAutoPlaying) {
      interval = setInterval(nextSlide, 3000);
    }
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  return (
    <section className="py-12 bg-gray-50 dark:bg-[#2d2d36]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center mb-8">
          <span className="bg-[#fee500] dark:bg-[#fee500] p-2 rounded-lg mr-2">
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
          <h2 className="text-2xl font-bold dark:text-white">Pitching이 달려오면서 전하는 소식</h2>
        </div>

        <div className="relative">
          <button
            onClick={prevSlide}
            className="absolute -left-12 top-1/2 -translate-y-1/2 p-2 bg-white dark:bg-gray-800 rounded-full shadow-lg z-10 hover:bg-gray-50 dark:hover:bg-gray-700"
          >
            <svg className="w-6 h-6 text-gray-900 dark:text-gray-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={nextSlide}
            className="absolute -right-12 top-1/2 -translate-y-1/2 p-2 bg-white dark:bg-gray-800 rounded-full shadow-lg z-10 hover:bg-gray-50 dark:hover:bg-gray-700"
          >
            <svg className="w-6 h-6 text-gray-900 dark:text-gray-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          <div className="overflow-hidden pb-4">
            <motion.div 
              className="flex gap-6"
              animate={{ x: `-${currentIndex * (100 / visibleItems)}%` }}
              transition={{ duration: 0.5 }}
            >
              {blogPosts.map((post, index) => (
                <motion.div
                  key={index}
                  className="flex-none w-[calc(25%-1.2rem)] bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 cursor-pointer"
                  onClick={() => navigate(`/blog/${post.slug}`)}
                  onMouseEnter={() => setIsAutoPlaying(false)}
                  onMouseLeave={() => setIsAutoPlaying(true)}
                >
                  <div className="relative w-full h-40 overflow-hidden rounded-t-lg">
                    <img
                      src={post.thumbnail}
                      alt={post.title}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.currentTarget.src = '/images/default-thumbnail.jpg';
                      }}
                    />
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${categoryColors[post.category]}`}>
                        {post.category}
                      </span>
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        조회수 {post.views}
                      </span>
                    </div>
                    <h3 className="font-bold mb-3 dark:text-white">
                      {post.title}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {post.tags.map((tag, tagIndex) => (
                        <span key={tagIndex} className="text-sm text-gray-600 dark:text-gray-400">
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          <div className="flex justify-center mt-10 gap-2">
            {Array.from({ length: Math.ceil(blogPosts.length / visibleItems) }).map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx * visibleItems)}
                className={`w-2 h-2 rounded-full ${
                  Math.floor(currentIndex / visibleItems) === idx 
                    ? 'bg-[#fee500] dark:bg-yellow-500' 
                    : 'bg-gray-300 dark:bg-gray-700'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSlider;