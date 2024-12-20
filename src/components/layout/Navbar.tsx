import React, { FC, useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '../../contexts/ThemeContext.tsx';
import { motion, AnimatePresence } from 'framer-motion';
import sun from '../../assets/images/sun.png';
import moon from '../../assets/images/moon.png';

interface NavItem {
  name: string;
  path: string;
}

const navItems: NavItem[] = [
  { name: '홈', path: '/' },
  { name: '서비스 소개', path: '/more' },
  { name: '기능', path: '/features' },
  { name: '소식', path: '/blog' },
  { name: 'Tech', path: '/Tech' },
  { name: 'FAQ', path: '/faq' }
];

const Navbar: FC = () => {
  const { isDarkMode, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigation = (path: string) => {
    setIsMobileMenuOpen(false);
    if (path.startsWith('/#')) {
      const element = document.getElementById(path.substring(2));
      element?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-50 dark:bg-[#2b2d31] shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex-shrink-0 text-xl font-bold text-gray-900 dark:text-white">
            Pitching
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => handleNavigation(item.path)}
                className={`relative px-3 py-2 text-sm font-medium transition-colors
                  ${location.pathname === item.path || (location.pathname === '/' && item.path === '/')
                    ? 'text-[#f59e0b]'
                    : 'text-gray-600 dark:text-gray-300 hover:text-[#fee500] dark:hover:text-[#fee500]'
                  }
                `}
              >
                {item.name}
                {(location.pathname === item.path || (location.pathname === '/' && item.path === '/')) && (
                  <motion.div
                    layoutId="activeSection"
                    style={{
                      position: 'absolute',
                      bottom: 0,
                      left: 0,
                      right: 0,
                      height: '2px',
                      backgroundColor: '#f59e0b'
                    }}
                    initial={false}
                  />
                )}
              </Link>
            ))}
          </div>

          {/* Right side buttons */}
          <div className="flex items-center space-x-4">
            <button
              onClick={toggleTheme}
              className="p-2 text-gray-300 hover:text-[#fee500]"
              aria-label="Toggle dark mode"
            >
              <img 
                src={isDarkMode ? sun : moon}
                alt="theme toggle"
                className="w-5 h-5"
              />
            </button>
            <a
              href="https://pitching.site"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#fee500] text-black px-4 py-2 rounded-md hover:bg-yellow-600 transition-colors"
            >
              시작하기
            </a>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-gray-600 dark:text-gray-300"
            >
              {isMobileMenuOpen ? '✕' : '☰'}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white dark:bg-[#2b2d31] shadow-lg"
          >
            <div className="px-4 py-2 space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => handleNavigation(item.path)}
                  className={`block w-full px-3 py-2 text-base font-medium text-left rounded-md
                    ${location.pathname === item.path
                      ? 'text-[#fee500] bg-yellow-50 dark:bg-gray-800'
                      : 'text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800'
                    }
                  `}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;