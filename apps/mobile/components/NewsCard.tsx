// @ts-nocheck
import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';
import { NewsItem, NewsCardProps } from '@the-gist/shared';

const { width: screenWidth } = Dimensions.get('window');

// Local utility function to avoid circular dependencies
const formatNewsDateTime = (dateStr: string): string => {
  const date = new Date(dateStr);
  return date.toLocaleDateString('en-US', { 
    month: 'short', 
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  });
};

const formatContent = (news: NewsItem) => {
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

export function NewsCard({ news, style }: NewsCardProps) {
  // Use local formatting utilities
  const content = formatContent(news);

  return (
    <View style={[styles.container, style]}>
      {/* Image Section with Overlay */}
      <View style={styles.imageContainer}>
        <Image
          source={{ uri: news.image_url }}
          style={styles.image}
          resizeMode="cover"
        />
        
        {/* Dark overlay for better text readability */}
        <View style={styles.overlay} />
        
        {/* Title overlay on image */}
        <View style={styles.titleOverlay}>
          <Text style={styles.title}>
            {content.titleText}
          </Text>
        </View>
      </View>
      
      {/* Content Section */}
      <View style={styles.content}>
        {/* Summary */}
        <Text style={styles.summary}>
          {content.formattedSummary}
        </Text>
        
        {/* Footer with source and date */}
        <View style={styles.footer}>
          <Text style={styles.footerLabel}>
            Summarized News Story by
          </Text>
          <Text style={styles.source}>
            The Gist
          </Text>
          <Text style={styles.category}>
            {content.sourceText} • {content.categoryText} • {content.formattedDate}
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1a1a1a',
    borderRadius: 16,
    overflow: 'hidden',
    width: screenWidth - 32,
    alignSelf: 'center',
    marginBottom: 20,
  },
  imageContainer: {
    position: 'relative',
    width: '100%',
    height: 280,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.4)',
  },
  titleOverlay: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    right: 20,
    backgroundColor: 'rgba(0,0,0,0.8)',
    borderRadius: 12,
    padding: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ffffff',
    lineHeight: 24,
  },
  content: {
    padding: 20,
  },
  summary: {
    fontSize: 15,
    color: '#d0d0d0',
    lineHeight: 22,
    marginBottom: 20,
  },
  footer: {
    borderTopWidth: 1,
    borderTopColor: '#333333',
    paddingTop: 16,
  },
  footerLabel: {
    fontSize: 12,
    color: '#888888',
    marginBottom: 4,
  },
  source: {
    fontSize: 14,
    color: '#666666',
    fontWeight: '600',
    marginBottom: 8,
  },
  category: {
    fontSize: 12,
    color: '#666666',
  },
});
