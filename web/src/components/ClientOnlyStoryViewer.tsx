'use client';

import { useEffect, useState } from 'react';
import { StoryViewer } from './StoryViewer';
import { NewsItem } from '@/types/news';

interface ClientOnlyStoryViewerProps {
  stories: NewsItem[];
  initialIndex: number;
  onClose: () => void;
}

export function ClientOnlyStoryViewer({ stories, initialIndex, onClose }: ClientOnlyStoryViewerProps) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    // Return a loading state for SSR
    return (
      <div className="fixed inset-0 z-50 bg-black flex items-center justify-center">
        <div className="text-white text-xl">Loading...</div>
      </div>
    );
  }

  return (
    <StoryViewer
      stories={stories}
      initialIndex={initialIndex}
      onClose={onClose}
    />
  );
}
