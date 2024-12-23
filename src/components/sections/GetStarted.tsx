import React from 'react';
import figImage from '../../assets/images/fig.gif';

const GetStarted: React.FC = () => {
  const handleLogin = (): void => {
    window.location.href = '/login';
  };

  return (
    <div className="relative bg-gray-50 dark:bg-[#2b2d31] py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative flex items-center">
          <div className="max">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Let's make Confidence with Speaking!
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
              저희의 AI 기반 발표 피드백 서비스를 경험하고 싶으시면 가입해서 한번 체험해보세요!
            </p>
            <button
              onClick={handleLogin}
              className="inline-block px-8 py-4 bg-[#fee500] text-gray-900 font-medium rounded-full 
                hover:bg-yellow-400 transition-all duration-300 transform hover:scale-105"
            >
              한번 시작해보세요!
            </button>
          </div>
          
          <div className="hidden lg:block absolute right-[10%]">
            <div className="w-80 h-80 rounded-full bg-white border-8 border-[#fee500] 
              flex items-center justify-center shadow-lg overflow-hidden">
              <img 
                src={figImage} 
                alt="Fig character" 
                className="w-50 h-50 object-contain"
                style={{ transform: 'scale(0.9)' }}
              />
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-[#fee500] opacity-10"
            style={{
              width: `${Math.random() * 100 + 50}px`,
              height: `${Math.random() * 100 + 50}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `float ${Math.random() * 10 + 5}s infinite ease-in-out`,
              animationDelay: `${Math.random() * 5}s`
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default GetStarted;