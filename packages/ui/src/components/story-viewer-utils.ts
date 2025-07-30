// Shared StoryViewer business logic and utilities

// Simple NewsItem interface for utility functions
interface SimpleNewsItem {
  pubDate: string;
  summary: string;
}

export class StoryController {
  private stories: SimpleNewsItem[];
  private currentIndex: number;
  private timer: ReturnType<typeof setTimeout> | null = null;
  private isPlaying: boolean = true;
  private callbacks: {
    onStoryChange?: (index: number) => void;
    onComplete?: () => void;
    onProgressUpdate?: (progress: number) => void;
  } = {};

  constructor(stories: SimpleNewsItem[], initialIndex: number = 0) {
    this.stories = stories;
    this.currentIndex = initialIndex;
  }

  setCallbacks(callbacks: typeof this.callbacks) {
    this.callbacks = callbacks;
  }

  start(duration: number = 5000) {
    this.isPlaying = true;
    this.play(duration);
  }

  pause() {
    this.isPlaying = false;
    if (this.timer) {
      clearTimeout(this.timer);
      this.timer = null;
    }
  }

  resume(duration: number = 5000) {
    if (!this.isPlaying) {
      this.isPlaying = true;
      this.play(duration);
    }
  }

  next() {
    if (this.currentIndex < this.stories.length - 1) {
      this.currentIndex++;
      this.callbacks.onStoryChange?.(this.currentIndex);
      return true;
    }
    this.callbacks.onComplete?.();
    return false;
  }

  previous() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
      this.callbacks.onStoryChange?.(this.currentIndex);
      return true;
    }
    return false;
  }

  goToStory(index: number) {
    if (index >= 0 && index < this.stories.length) {
      this.currentIndex = index;
      this.callbacks.onStoryChange?.(this.currentIndex);
      return true;
    }
    return false;
  }

  getCurrentStory() {
    return this.stories[this.currentIndex];
  }

  getCurrentIndex() {
    return this.currentIndex;
  }

  getTotalStories() {
    return this.stories.length;
  }

  private play(duration: number) {
    if (!this.isPlaying) return;
    
    this.timer = setTimeout(() => {
      if (!this.next()) {
        return; // Story sequence completed
      }
      this.play(duration);
    }, duration);
  }

  destroy() {
    this.pause();
    this.callbacks = {};
  }
}

// Shared styling values for StoryViewer
export const STORY_VIEWER_STYLES = {
  duration: 5000, // 5 seconds per story
  progressBar: {
    height: 3,
    gap: 4,
    colors: {
      background: 'rgba(255, 255, 255, 0.3)',
      fill: '#ffffff'
    }
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    blur: 10
  },
  card: {
    maxWidth: 400,
    borderRadius: 16,
    imageHeightRatio: 0.6, // 60% of card height for image
    backgroundColor: '#1a1a1a'
  },
  controls: {
    iconSize: 24,
    spacing: 16,
    colors: {
      icon: '#ffffff',
      iconActive: '#3b82f6'
    }
  },
  colors: {
    text: {
      primary: '#ffffff',
      secondary: '#e5e5e5'
    },
    background: '#000000'
  }
} as const;

export const formatStoryContent = (story: SimpleNewsItem) => {
  return {
    formattedDate: new Date(story.pubDate).toLocaleDateString('en-US', { 
      month: 'short', 
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    }),
    truncatedSummary: story.summary.length > 200 
      ? story.summary.substring(0, 200) + '...' 
      : story.summary
  };
};
