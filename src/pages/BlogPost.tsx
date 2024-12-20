import React, { useEffect } from 'react';
import { FC } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import styled from '@emotion/styled';
import { blogPostsData } from '../data/blogData.ts';

const MarkdownStyle = styled.div`
  font-size: 1.125rem;
  line-height: 1.75;
  color: #1f2937; /* 라이트 모드 기본 색상 */

  /* 다크 모드일 때 색상 적용 */
  .dark & {
    color: #e5e7eb;
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: 700;
    margin: 2rem 0 1rem;
    color: #1f2937;
    .dark & {
      color: #e5e7eb;
    }
  }

  h1 { 
    font-size: 2.25rem;
    margin-bottom: 2rem;
  }
  
  h2 { 
    font-size: 1.875rem;
    margin-top: 2.5rem;
  }
  
  h3 { 
    font-size: 1.5rem;
    margin-top: 2rem;
  }

  p {
    margin-bottom: 1.5rem;
    line-height: 1.8;
    color: #1f2937;
    .dark & {
      color: #ffffff;
    }
  }

  ul, ol {
    margin: 1rem 0;
    padding-left: 2rem;
    color: #1f2937;
    .dark & {
      color: #e5e7eb;
    }
  }

  li {
    margin: 0.5rem 0;
    color: #1f2937;
    .dark & {
      color: #e5e7eb;
    }
  }

  blockquote {
    border-left: 4px solid #e5e7eb;
    padding-left: 1rem;
    margin: 1.5rem 0;
    color: #6b7280;
    font-style: italic;
    .dark & {
      border-left-color: #4b5563;
      color: #9ca3af;
    }
  }

  code {
    background-color: #f3f4f6;
    padding: 0.2rem 0.4rem;
    border-radius: 0.25rem;
    font-family: monospace;
    color: #1f2937;
    .dark & {
      background-color: #374151;
      color: #ffffff;
    }
  }

  a {
    color: #3b82f6;
    text-decoration: none;
    .dark & {
      color: #fee500;
    }
    
    &:hover {
      text-decoration: underline;
    }
  }

  img {
    max-width: 100%;
    height: auto;
    border-radius: 0.5rem;
    margin: 1.5rem 0;
  }

  table {
    width: 100%;
    border-collapse: collapse;
    margin: 1.5rem 0;
    
    th, td {
      border: 1px solid #e5e7eb;
      padding: 0.75rem;
      color: #1f2937;
      .dark & {
        border-color: #374151;
        color: #e5e7eb;
      }
    }

    th {
      background-color: #f3f4f6;
      .dark & {
        background-color: #374151;
      }
    }
  }
`;

const CodeBlock = styled.div`
  margin: 1.5rem 0;
  background-color: ${props => props.theme.mode === 'dark' ? '#000000' : '#1f2937'};
  border-radius: 0.5rem;
  overflow: hidden;
  border: none !important;

  * {
    color: #ffffff !important;
  }
`;

const BlogPost: FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const post = slug ? blogPostsData[slug] : null;

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, [slug]);

  const categoryColors = {
    '발표 팁': 'bg-blue-100 text-blue-800 dark:bg-blue-800 dark:text-blue-100',
    '성공 사례': 'bg-green-100 text-green-800 dark:bg-green-800 dark:text-green-100',
    '업데이트': 'bg-yellow-100 text-yellow-800 dark:bg-yellow-800 dark:text-yellow-100',
    '뉴스': 'bg-purple-100 text-purple-800 dark:bg-purple-800 dark:text-purple-100'
  };

  if (!post) {
    return (
      <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-[#2b2d31]">
        <div className="flex-grow pt-20 pb-16 text-center">
          <h1 className="text-2xl text-gray-900 dark:text-white">포스트를 찾을 수 없습니다.</h1>
          <button 
            onClick={() => navigate('/blog')}
            className="mt-4 text-yellow-500 hover:text-yellow-600"
          >
            돌아가기
          </button>
        </div>
        <footer className="bg-white dark:bg-gray-800 py-6">
          {/* Footer content */}
        </footer>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-[#2b2d31] relative overflow-hidden">
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

      <div className="flex-grow pt-16 pb-8">
        <div className="relative z-10 text-center mt-24 mb-24">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-extrabold text-gray-900 dark:text-white sm:text-5xl"
          >
            소식
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 text-xl text-gray-600 dark:text-gray-300"
          >
            Pitching에서 제공하는 소식입니다
          </motion.p>
        </div>

        <motion.article 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
            <div className="p-8">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${categoryColors[post.category]}`}>
                    {post.category}
                  </span>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    Episode.{post.episodeNumber}
                  </span>
                </div>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  {post.date}
                </span>
              </div>
              
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                {post.title}
              </h1>

              <div className="flex flex-wrap gap-2 mb-6">
                {post.tags.map((tag, index) => (
                  <span 
                    key={index}
                    className="text-sm text-gray-600 dark:text-gray-400"
                  >
                    #{tag}
                  </span>
                ))}
              </div>

              {post.thumbnail && (
                <div className="mb-8">
                  <img 
                    src={post.thumbnail} 
                    alt={post.title}
                    className="w-full h-64 object-cover rounded-lg"
                  />
                </div>
              )}
              
              <MarkdownStyle>
                <ReactMarkdown
                  remarkPlugins={[remarkGfm]}
                  components={{
                    code({ node, inline, className, children, ...props }) {
                      const match = /language-(\w+)/.exec(className || '');
                      return !inline && match ? (
                        <CodeBlock>
                          <SyntaxHighlighter
                            style={dark}
                            language={match[1]}
                            PreTag="div"
                            customStyle={{
                              background: '#000000',
                              padding: '1.5rem',
                              margin: 0,
                              borderRadius: '0.5rem',
                              border: 'none',
                            }}
                            {...props}
                          >
                            {String(children).replace(/\n$/, '')}
                          </SyntaxHighlighter>
                        </CodeBlock>
                      ) : (
                        <code className="bg-gray-800 text-gray-100" {...props}>
                          {children}
                        </code>
                      );
                    }
                  }}
                >
                  {post.content}
                </ReactMarkdown>
              </MarkdownStyle>

              <div className="mt-8 pt-4 border-t border-gray-200 dark:border-gray-700">
                <Link
                  to="/blog"
                  className="text-yellow-500 hover:text-yellow-600 dark:hover:text-yellow-400 font-medium"
                >
                  ← 블로그로 돌아가기
                </Link>
              </div>
            </div>
          </div>
        </motion.article>
      </div>
    </div>
  );
};

export default BlogPost;