export interface NewsItem {
  id: string;
  image_url: string;
  pubDate: string;
  publishedDate: number;
  title: string;
  summary: string;
  source: string;
  category: string;
}

export interface NewsCardProps {
  news: NewsItem;
  className?: string;
  style?: any;
  onPress?: () => void;
}

export interface StoryViewerProps {
  stories: NewsItem[];
  initialIndex: number;
  onClose: () => void;
}

export interface StoryControlsProps {
  onLike: () => void;
  onShare: () => void;
  onFollow: () => void;
  onClose: () => void;
  onMenu: () => void;
  isLiked: boolean;
  isFollowing: boolean;
}
