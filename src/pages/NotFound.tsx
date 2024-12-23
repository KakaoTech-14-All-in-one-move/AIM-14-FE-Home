import React from 'react';
import { FC } from 'react';
import { useNavigate } from 'react-router-dom';

const NotFound: FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          404
        </h1>
        <p className="text-gray-600 dark:text-gray-300 mb-8">
          페이지를 찾을 수 없습니다.
        </p>
        <button
          onClick={() => navigate('/')}
          className="text-yellow-500 hover:text-yellow-600 font-medium"
        >
          홈으로 돌아가기
        </button>
      </div>
    </div>
  );
};

export default NotFound; 