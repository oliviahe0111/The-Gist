// Shared NewsCard business logic and utilities

// Simple NewsItem interface for utility functions
interface SimpleNewsItem {
  pubDate: string;
  summary: string;
  category: string;
  source: string;
  title: string;
}

export const formatNewsDateTime = (dateStr: string): string => {
  const date = new Date(dateStr);
  return date.toLocaleDateString('en-US', { 
    month: 'short', 
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  });
};

export const formatNewsCardContent = (news: SimpleNewsItem) => {
  return {
    formattedDate: formatNewsDateTime(news.pubDate),
    formattedSummary: news.summary.length > 120 
      ? news.summary.substring(0, 120) + '...' 
      : news.summary,
    categoryText: news.category.toUpperCase(),
    sourceText: news.source,
    titleText: news.title.length > 80 
      ? news.title.substring(0, 80) + '...' 
      : news.title
  };
};

export const getNewsCardImageFallback = () => ({
  backgroundColor: '#1a1a1a',
  placeholder: 'No image available'
});

// Shared styling values for NewsCard
export const NEWS_CARD_STYLES = {
  borderRadius: 16,
  maxWidth: 350,
  imageAspectRatio: {
    mobile: 0.67, // height/width for mobile (taller)
    web: 0.68     // height/width for web
  },
  colors: {
    background: '#1a1a1a',
    overlay: 'rgba(0, 0, 0, 0.3)',
    text: {
      primary: '#ffffff',
      secondary: '#e5e5e5', 
      tertiary: '#a3a3a3'
    },
    accent: '#3b82f6'
  },
  spacing: {
    sm: 8,
    md: 16,
    lg: 24
  }
} as const;
