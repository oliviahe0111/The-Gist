import { NewsItem, COLORS, SPACING, BORDER_RADIUS, CARD_MAX_WIDTH } from './types';

// Shared component data structures and patterns

// News Card Layout Pattern
export interface NewsCardLayout {
  container: {
    maxWidth: number;
    borderRadius: number;
    backgroundColor: string;
  };
  imageSection: {
    height: string | number;
    position: 'relative';
  };
  contentSection: {
    padding: number;
    backgroundColor: string;
  };
  attribution: {
    borderColor: string;
    textColor: {
      primary: string;
      secondary: string;
      tertiary: string;
    };
  };
}

// Story Viewer Layout Pattern
export interface StoryViewerLayout {
  background: {
    blurRadius: number;
    overlayColor: string;
  };
  card: {
    maxWidth: number;
    borderRadius: number;
    backgroundColor: string;
    imageHeightRatio: number;
  };
  progressBar: {
    height: number;
    backgroundColor: string;
    fillColor: string;
    gap: number;
  };
  controls: {
    spacing: number;
    iconSize: number;
  };
}

// Shared layout patterns
export const NEWS_CARD_LAYOUT: NewsCardLayout = {
  container: {
    maxWidth: CARD_MAX_WIDTH,
    borderRadius: BORDER_RADIUS.lg,
    backgroundColor: COLORS.secondary,
  },
  imageSection: {
    height: '60%',
    position: 'relative',
  },
  contentSection: {
    padding: SPACING.lg,
    backgroundColor: 'transparent',
  },
  attribution: {
    borderColor: COLORS.gray[700],
    textColor: {
      primary: COLORS.white,
      secondary: COLORS.gray[500],
      tertiary: COLORS.gray[600],
    },
  },
};

export const STORY_VIEWER_LAYOUT: StoryViewerLayout = {
  background: {
    blurRadius: 20,
    overlayColor: COLORS.transparent.black.darker,
  },
  card: {
    maxWidth: CARD_MAX_WIDTH,
    borderRadius: BORDER_RADIUS.lg,
    backgroundColor: COLORS.transparent.black.darker,
    imageHeightRatio: 0.6,
  },
  progressBar: {
    height: 3,
    backgroundColor: COLORS.transparent.white.light,
    fillColor: COLORS.white,
    gap: SPACING.xs,
  },
  controls: {
    spacing: SPACING.xl,
    iconSize: 32,
  },
};

// Component content patterns
export interface NewsCardContent {
  title: string;
  summary: string;
  attribution: {
    line1: string;
    line2: string;
    metadata: string;
  };
}

export const formatNewsCardContent = (news: NewsItem): NewsCardContent => {
  return {
    title: news.title,
    summary: news.summary,
    attribution: {
      line1: 'Summarized News Story by',
      line2: 'The Gist - AI News App',
      metadata: `${news.source} • ${news.category}`,
    },
  };
};

// Story viewer content patterns
export interface StoryContent {
  header: {
    source: string;
    showMenu: boolean;
    showClose: boolean;
  };
  card: {
    title: string;
    summary: string;
    attribution: {
      line1: string;
      line2: string;
    };
  };
  actions: {
    showLike: boolean;
    showFollow: boolean;
    showShare: boolean;
  };
}

export const formatStoryContent = (news: NewsItem): StoryContent => {
  return {
    header: {
      source: news.source,
      showMenu: true,
      showClose: true,
    },
    card: {
      title: news.title,
      summary: news.summary,
      attribution: {
        line1: 'Summarized News Story by',
        line2: 'The Gist - AI News App',
      },
    },
    actions: {
      showLike: true,
      showFollow: true,
      showShare: true,
    },
  };
};

// Icon definitions for cross-platform consistency
export interface IconSet {
  heart: {
    filled: string;
    outline: string;
  };
  close: string;
  menu: string;
  share: string;
}

export const ICONS: IconSet = {
  heart: {
    filled: 'heart',
    outline: 'heart-outline',
  },
  close: 'close',
  menu: 'ellipsis-horizontal',
  share: 'share-outline',
};

// Animation timing constants
export const ANIMATIONS = {
  transition: {
    fast: 150,
    normal: 200,
    slow: 300,
  },
  hover: {
    scale: 1.05,
    duration: 200,
  },
  progress: {
    duration: 100,
    easing: 'linear',
  },
};

// Responsive breakpoints for web
export const BREAKPOINTS = {
  mobile: 768,
  tablet: 1024,
  desktop: 1200,
};

// Grid layout patterns
export const GRID_LAYOUT = {
  gap: SPACING.lg,
  columns: {
    mobile: 1,
    tablet: 2,
    desktop: 3,
  },
  maxWidth: '6xl', // Tailwind class
};
