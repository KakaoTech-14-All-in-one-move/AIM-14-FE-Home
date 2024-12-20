import React from 'react';
import styled from '@emotion/styled';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

const MarkDownStyle = styled.div`
  font-size: 1rem;
  line-height: 2.5rem;

  /* 코드 블럭 스타일링 */
  pre {
    background-color: #1f2937;
    color: #e5e7eb;
    padding: 1rem;
    border-radius: 0.5rem;
    overflow-x: auto;
    margin: 1.5rem 0;
  }

  code {
    background-color: #1f2937;
    color: #e5e7eb;
    padding: 0.2rem 0.4rem;
    border-radius: 0.25rem;
    font-family: monospace;
  }

  /* 표 스타일링 */
  table {
    width: 100%;
    border-collapse: collapse;
    margin: 1rem 0;
  }

  th, td {
    border: 1px solid #e5e7eb;
    padding: 0.5rem;
    text-align: left;
  }

  th {
    background-color: #f3f4f6;
  }
`;

function MarkdownRenderer({ content }: { content: string }) {
  return (
    <MarkDownStyle>
      <ReactMarkdown remarkPlugins={[remarkGfm]}>
        {content}
      </ReactMarkdown>
    </MarkDownStyle>
  );
}

export default MarkdownRenderer;
