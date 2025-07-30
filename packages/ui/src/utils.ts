import { STORY_DURATION, StoryState, ProgressState, StoryActions } from './types';

// Shared story viewer logic controller
export class StoryController {
  private currentIndex: number;
  private progress: number;
  private isPaused: boolean;
  private progressInterval: ReturnType<typeof setInterval> | null = null;
  private onProgressUpdate: (progress: number) => void;
  private onStoryChange: (index: number) => void;
  private onComplete: () => void;
  private totalStories: number;

  constructor(
    initialIndex: number,
    totalStories: number,
    onProgressUpdate: (progress: number) => void,
    onStoryChange: (index: number) => void,
    onComplete: () => void
  ) {
    this.currentIndex = initialIndex;
    this.totalStories = totalStories;
    this.progress = 0;
    this.isPaused = false;
    this.onProgressUpdate = onProgressUpdate;
    this.onStoryChange = onStoryChange;
    this.onComplete = onComplete;
  }

  start() {
    this.progressInterval = setInterval(() => {
      if (this.isPaused) return;
      
      this.progress += 100 / (STORY_DURATION / 100);
      this.onProgressUpdate(this.progress);

      if (this.progress >= 100) {
        this.nextStory();
      }
    }, 100);
  }

  stop() {
    if (this.progressInterval) {
      clearInterval(this.progressInterval);
      this.progressInterval = null;
    }
  }

  pause() {
    this.isPaused = true;
  }

  resume() {
    this.isPaused = false;
  }

  nextStory() {
    if (this.currentIndex < this.totalStories - 1) {
      this.currentIndex++;
      this.progress = 0;
      this.onStoryChange(this.currentIndex);
      this.onProgressUpdate(0);
    } else {
      this.stop();
      setTimeout(() => this.onComplete(), 0);
    }
  }

  previousStory() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
      this.progress = 0;
      this.onStoryChange(this.currentIndex);
      this.onProgressUpdate(0);
    }
  }

  getCurrentIndex() {
    return this.currentIndex;
  }

  getProgress() {
    return this.progress;
  }
}

// Shared component state management
export const useStoryState = () => {
  return {
    // Common state that both web and mobile will use
    getInitialState: (): StoryState => ({
      isLiked: false,
      isFollowing: false,
      isPaused: false,
    }),
    
    // Reset state for new story
    resetForNewStory: (): Partial<StoryState> => ({
      isLiked: false,
      isFollowing: false,
    }),
  };
};

// Shared story interaction logic
export const createStoryActions = (
  storyState: StoryState,
  updateState: (updates: Partial<StoryState>) => void,
  currentStory: any,
  storyController?: StoryController
): StoryActions => {
  return {
    onLike: () => {
      updateState({ isLiked: !storyState.isLiked });
      // TODO: Save to persistence layer
    },

    onFollow: () => {
      updateState({ isFollowing: !storyState.isFollowing });
      // TODO: Save to persistence layer
    },

    onShare: () => {
      console.log('Share story:', currentStory.title);
      // TODO: Implement platform-specific sharing
    },

    onMenu: () => {
      console.log('Show menu for:', currentStory.source);
      // TODO: Show platform-specific menu
    },

    onNext: () => {
      storyController?.nextStory();
    },

    onPrevious: () => {
      storyController?.previousStory();
    },

    onPause: () => {
      storyController?.pause();
      updateState({ isPaused: true });
    },

    onResume: () => {
      storyController?.resume();
      updateState({ isPaused: false });
    },
  };
};

// Shared navigation logic for story viewer
export const handleStoryNavigation = (
  event: { clientX?: number; locationX?: number; nativeEvent?: any },
  containerWidth: number,
  onNext: () => void,
  onPrevious: () => void
) => {
  // Handle both web (clientX) and mobile (locationX) events
  const tapX = event.clientX || event.locationX || event.nativeEvent?.locationX || 0;
  
  if (tapX > containerWidth / 2) {
    onNext();
  } else {
    onPrevious();
  }
};

// Progress calculation helper
export const calculateProgress = (
  index: number,
  currentIndex: number,
  currentProgress: number
): number => {
  if (index < currentIndex) return 100;
  if (index === currentIndex) return currentProgress;
  return 0;
};

// Format date utility for consistent display across platforms
export const formatStoryDate = (dateStr: string): string => {
  try {
    const date = new Date(dateStr);
    const now = new Date();
    const diffInHours = Math.abs(now.getTime() - date.getTime()) / (1000 * 60 * 60);
    
    if (diffInHours < 1) {
      return 'Just now';
    } else if (diffInHours < 24) {
      return `${Math.floor(diffInHours)}h ago`;
    } else {
      return `${Math.floor(diffInHours / 24)}d ago`;
    }
  } catch {
    return 'Recently';
  }
};
