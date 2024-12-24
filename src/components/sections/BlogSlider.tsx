import React, { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import Slider from 'react-slick';
import { blogPosts } from '../../data/blogData.ts';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// 커스텀 CSS 추가
const customStyles = `
  .slick-slider {
    padding-bottom: 45px;
  }
  
  .slick-dots {
    bottom: -35px;
  }

  /* 화이트 모드 */
  .slick-dots li button:before {
    color: #2d2d36;
  }
  .slick-dots li.slick-active button:before {
    color: #2d2d36;
  }
  .slick-prev:before, 
  .slick-next:before {
    color: #000; /* 검은색 */
    font-size: 24px;
  }

  /* 다크 모드 */
  .dark .slick-dots li button:before {
    color: #fee500;
  }
  .dark .slick-dots li.slick-active button:before {
    color: #fee500;
  }
  .dark .slick-prev:before, 
  .dark .slick-next:before {
    color: #fee500; /* 원하는 색상으로 변경 */
    font-size: 24px;
  }
`;

const BlogSlider: FC = () => {
  const navigate = useNavigate();

  const categoryColors = {
    '에세이': 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300',
    '사용자 후기': 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300',
    '업데이트': 'bg-[#fee500] text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300',
    '뉴스': 'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300'
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: '40px'
        }
      }
    ]
  };

  return (
    <section className="py-12 bg-gray-50 dark:bg-[#2d2d36]">
      {/* 커스텀 스타일 삽입 */}
      <style>{customStyles}</style>

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

        <Slider {...settings}>
          {blogPosts.map((post, index) => (
            <div key={index} className="px-1 sm:px-2 h-full pb-4">
              <div
                className="bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer h-[380px] flex flex-col"
                onClick={() => navigate(`/blog/${post.slug}`)}
              >
                <div className="relative aspect-[16/9] overflow-hidden rounded-t-lg flex-shrink-0">
                  <img
                    src={post.thumbnail}
                    alt={post.title}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.currentTarget.src = '/images/default-thumbnail.jpg';
                    }}
                  />
                </div>
                
                <div className="p-4 sm:p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${categoryColors[post.category]}`}>
                        {post.category}
                      </span>
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        조회수 {post.views}
                      </span>
                    </div>
                    <h3 className="font-bold mb-3 dark:text-white line-clamp-2">
                      {post.title}
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} className="text-sm text-gray-600 dark:text-gray-400">
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default BlogSlider;
