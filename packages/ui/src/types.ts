// Base props that both web and mobile components will implement
export interface NewsItem {
  id: string;
  title: string;
  summary: string;
  image_url: string;
  source: string;
  category: string;
  pubDate: string;
  url: string;
}

export interface BaseNewsCardProps {
  news: NewsItem;
  onPress?: (index?: number) => void;
  className?: string; // For web
  style?: any; // For mobile
}

export interface BaseStoryViewerProps {
  stories: NewsItem[];
  initialIndex: number;
  onClose: () => void;
}

// Shared styling constants
export const STORY_DURATION = 5000; // 5 seconds per story

export const COLORS = {
  primary: '#000000',
  secondary: '#1a1a1a',
  white: '#ffffff',
  gray: {
    100: '#f5f5f5',
    300: '#d1d5db',
    400: '#9ca3af',
    500: '#6b7280',
    600: '#4b5563',
    700: '#374151',
  },
  red: '#ff3040',
  transparent: {
    black: {
      light: 'rgba(0,0,0,0.3)',
      medium: 'rgba(0,0,0,0.6)',
      heavy: 'rgba(0,0,0,0.8)',
      darker: 'rgba(0,0,0,0.9)',
    },
    white: {
      light: 'rgba(255,255,255,0.3)',
      medium: 'rgba(255,255,255,0.6)',
      heavy: 'rgba(255,255,255,0.7)',
    },
  },
};

export const SPACING = {
  xs: 4,
  sm: 8,
  md: 12,
  lg: 16,
  xl: 20,
  xxl: 24,
};

export const BORDER_RADIUS = {
  sm: 8,
  md: 12,
  lg: 16,
  xl: 20,
  full: 9999,
};

// Shared layout constants
export const CARD_MAX_WIDTH = 350;
export const STORY_CARD_HEIGHT_RATIO = 0.6; // Image takes 60% of card height

// Component state interfaces
export interface StoryState {
  isLiked: boolean;
  isFollowing: boolean;
  isPaused: boolean;
}

export interface ProgressState {
  currentIndex: number;
  progress: number;
}

// Action handlers interface
export interface StoryActions {
  onLike: () => void;
  onFollow: () => void;
  onShare: () => void;
  onMenu: () => void;
  onNext: () => void;
  onPrevious: () => void;
  onPause: () => void;
  onResume: () => void;
}
