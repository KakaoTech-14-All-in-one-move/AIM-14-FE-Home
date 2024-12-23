export type SocialIconType = 'GITHUB' | 'TWITTER';
export type TechIconType = 'JAVA' | 'TYPESCRIPT' | 'REACT' | 'SPRING' | 'PYTHON' | 'AWS';

export interface AssetsType {
  ICONS: {
    SOCIAL: {
      [key in SocialIconType]: string;
    };
    TECH: {
      [key in TechIconType]: string;
    };
  };
  IMAGES: {
    HERO: string;
    LOGO: string;
  };
} 