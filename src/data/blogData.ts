export interface BlogPost {
  slug: string;
  title: string;
  category: '발표 팁' | '성공 사례' | '업데이트' | '뉴스';
  date: string;
  description: string;
  readTime: string;
  tags: string[];
  views?: string;
  episodeNumber?: number;
  content?: string;
  thumbnail?: string;
}

const posts: BlogPost[] = [
  {
    slug: 'voice-techniques',
    title: '효과적인 발표를 위한 7가지 음성 테크닉',
    category: '발표 팁',
    date: '2024.03.15',
    description: '발표 시 청중을 사로잡는 음성 테크닉과 실전 연습 방법을 소개합니다.',
    readTime: '5분',
    tags: ['음성테크닉', '발표스킬', '실전팁'],
    views: '156',
    episodeNumber: 1,
    thumbnail: '/images/voice-techniques.jpg',
    content: `
# 효과적인 발표를 위한 7가지 음성 테크닉

## 1. 적절한 속도 조절
발표 속도는 청중이 내용을 이해하는 데 큰 영향을 미칩니다. 일반적으로 분당 120-150단어가 적절합니다.

## 2. 강약 조절하기
중요한 내용을 강조할 때는 목소리를 조금 더 크게, 부연 설명할 때는 조금 더 부드럽게 말하세요.

## 3. 적절한 휴식
문장과 문장 사이에 적절한 휴식을 주면 청중이 내용을 정리할 시간을 가질 수 있습니다.
    `
  },
  {
    slug: 'ai-feedback-success',
    title: 'AI 피드백으로 취업 발표 준비 성공 사례',
    category: '성공 사례',
    date: '2024.03.10',
    description: '신입 개발자 취업에 성공한 김OO님의 AI 발표 연습 활용 후기',
    readTime: '8분',
    tags: ['취업성공', 'AI피드백', '발표준비'],
    views: '89',
    episodeNumber: 2,
    thumbnail: '/images/ai-feedback.jpg',
    content: `
# AI 피드백으로 취업 발표 준비 성공 사례

## AI 발표 연습을 시작하게 된 계기
개발자 채용 과정에서 기술 발표는 필수였습니다. 혼자서는 객관적인 피드백을 받기 어려웠는데, AI 발표 연습 서비스를 알게 되었습니다.

## 주요 활용 방법
- 매일 30분씩 발표 연습
- AI 피드백을 통한 개선점 파악
- 반복적인 연습과 수정

## 성과
- 면접 발표 시간 완벽 준수
- 명확한 발음과 적절한 속도 유지
- 자신감 있는 태도로 발표 진행
    `
  },
  {
    slug: 'new-ai-voice-analysis',
    title: '새로운 AI 음성 분석 기능 업데이트',
    category: '업데이트',
    date: '2024.03.05',
    description: '더욱 정확하고 상세한 음성 분석이 가능한 새로운 AI 기능을 소개합니다.',
    readTime: '3분',
    tags: ['신기능', 'AI분석', '음성인식'],
    views: '245',
    episodeNumber: 3,
    thumbnail: '/images/ai-voice.jpg',
    content: `
# 새로운 AI 음성 분석 기능 업데이트

## 주요 업데이트 내용
1. 실시간 음성 분석 기능 강화
2. 더 정확한 발음 평가 시스템
3. 개인화된 피드백 제공

## 사용 방법
1. 발표 녹음하기
2. AI 분석 시작
3. 상세 피드백 확인
4. 개선점 연습

## 향후 계획
- 다국어 지원 확대
- 음성 패턴 분석 고도화
- 맞춤형 연습 프로그램 제공
    `
  },
  {
    slug: 'non-verbal-communication',
    title: '비언어적 커뮤니케이션의 중요성',
    category: '발표 팁',
    date: '2024.03.01',
    description: '효과적인 발표를 위한 제스처와 바디랭귀지 활용법',
    readTime: '6분',
    tags: ['바디랭귀지', '제스처', '아이컨택'],
    views: '203',
    episodeNumber: 4,
    thumbnail: '/images/non-verbal.jpg',
    content: `
# 비언어적 커뮤니케이션의 중요성

발표 시 전달하는 메시지의 55%는 비언어적 요소를 통해 전달됩니다.

## 효과적인 제스처 활용
자연스러운 손동작은 발표 내용을 강조하고 청중의 주의를 집중시키는 데 도움이 됩니다.

## 아이컨택의 기술
청중과의 적절한 눈맞춤은 신뢰감을 형성하고 메시지 전달력을 높입니다.
    `
  },
  {
    slug: 'speech-contest-winner',
    title: '대학생 스피치 대회 우승 후기',
    category: '성공 사례',
    date: '2024.02.25',
    description: '3개월간의 준비 과정과 실전 경험 공유',
    readTime: '7분',
    tags: ['스피치대회', '우승후기', '발표준비'],
    views: '167',
    episodeNumber: 5,
    thumbnail: '/images/speech-contest.jpg',
    content: `
# 대학생 스피치 대회 우승 후기

## 대회 준비 과정
AI 피드백을 활용한 체계적인 연습과 멘토링을 통해 실력을 향상시켰습니다.

## 실전 경험 공유
긴장 관리와 청중과의 상호작용이 우승의 핵심 요인이었습니다.
    `
  },
  {
    slug: 'gesture-analysis-update',
    title: '실시간 제스처 분석 기능 추가',
    category: '업데이트',
    date: '2024.02.20',
    description: 'AI가 실시간으로 제스처를 분석하고 피드백을 제공하는 새로운 기능',
    readTime: '4분',
    tags: ['제스처분석', 'AI기능', '업데이트'],
    views: '198',
    episodeNumber: 6,
    thumbnail: '/images/gesture-analysis.jpg',
    content: `
# 실시간 제스처 분석 기능 추가

## 새로운 제스처 분석 기능
카메라를 통해 실시간으로 발표자의 제스처를 분석하고 개선점을 제안합니다.

## 주요 기능
- 자세 분석 및 교정
- 효과적인 제스처 추천
- 실시간 피드백 제공
    `
  }
];

const postsData = posts.reduce((acc, post) => ({
  ...acc,
  [post.slug]: post
}), {} as { [key: string]: BlogPost });

export { posts as blogPosts, postsData as blogPostsData }; 