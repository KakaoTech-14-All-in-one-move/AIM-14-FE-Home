// Path: src/constants/config.ts
// Global configuration and constants
export const CONFIG = {
  SITE_NAME: 'Pitching',
  SITE_DESCRIPTION: '발표를 하는 것에 대한 두려움을 없애주는 AI 기반 발표 연습 플랫폼',
  SITE_URL: (typeof process !== 'undefined' && process.env.REACT_APP_URL) || 'https://pitching.com',
  NAV_ITEMS: [
    { name: '소개', href: '#intro' },
    { name: '기능', href: '#features' },
    { name: '기술 스택', href: '#tech-stack' },
    { name: '시작하기', href: '#start' },
  ],
  SOCIAL_LINKS: [
    { name: 'GitHub', href: 'https://github.com/KakaoTech-14-All-in-one-move', icon: 'github' },
    { name: 'Twitter', href: 'https://twitter.com/itching', icon: 'twitter' },
  ],
} as const; 