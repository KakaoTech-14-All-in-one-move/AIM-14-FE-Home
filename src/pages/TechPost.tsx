import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import styled from '@emotion/styled';
import { findPostById } from '../data/techPosts.ts';

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

  h2 { font-size: 1.875rem; }
  h3 { font-size: 1.5rem; }

  p {
    margin-bottom: 1.5rem;
    line-height: 1.8;
    color: #1f2937;
    .dark & {
      color: #ffffff;
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
  }
`;

const CodeBlock = styled.div`
  margin: 1.5rem 0;
  background-color: #1f2937;
  border-radius: 0.5rem;
  overflow: hidden;
  border: none;
`;

const ReturnButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  padding: 0.75rem 1.5rem;
  margin-top: 1rem;
  background-color: #fee500;
  color: #1f2937;
  border-radius: 0.5rem;
  font-weight: 500;
  transition: all 0.2s;
  float: right;
  
  &:hover {
    background-color: #ffd700;
    transform: translateY(-2px);
  }

  svg {
    width: 1.25rem;
    height: 1.25rem;
    margin-right: 0.5rem;
  }
`;

const TechPost: React.FC = () => {
  const { postId } = useParams<{ postId: string }>();
  const navigate = useNavigate();
  const post = findPostById(postId || '');

  useEffect(() => {
    if (!post) {
      navigate('/tech');
      return;
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [post, navigate]);

  if (!post) return null;

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-[#2b2d31]">
      <main className="flex-1 py-8">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-xl overflow-hidden relative"
          >
            <div className="w-full h-96 relative">
              <img
                src={post.imageUrl}
                alt={post.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40"></div>
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <div className="flex items-center space-x-4 mb-4">
                  <span className="px-3 py-1 bg-[#fee500] text-gray-900 rounded-full text-sm">
                    {post.category}
                  </span>
                  <span className="text-white text-sm">{post.date}</span>
                  <span className="text-white text-sm">{post.readTime} 읽기</span>
                </div>
                <h1 className="text-4xl font-bold text-white mb-4">{post.title}</h1>
                <p className="text-lg text-gray-200">{post.description}</p>
              </div>
            </div>

            <div className="p-8">
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
                              background: '#1f2937',
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
                        <code {...props}>{children}</code>
                      );
                    }
                  }}
                >
                  {post.content}
                </ReactMarkdown>
              </MarkdownStyle>

              <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-[#fee500] rounded-full flex items-center justify-center">
                        <span className="text-gray-900 font-bold">
                          {post.author[0]}
                        </span>
                      </div>
                    </div>
                    <div className="ml-4">
                      <p className="text-lg font-semibold text-gray-900 dark:text-white">
                        {post.author}
                      </p>
                      <p className="text-gray-600 dark:text-gray-300">
                        Pitching Develop Team.
                      </p>
                    </div>
                  </div>
                  <ReturnButton to="/tech">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 19l-7-7 7-7"
                      />
                    </svg>
                    목록으로 돌아가기
                  </ReturnButton>
                </div>
              </div>
            </div>
          </motion.article>
        </div>
      </main>
    </div>
  );
};

export default TechPost;
