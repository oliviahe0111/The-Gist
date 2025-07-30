import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';
import { NewsItem, NewsCardProps } from '../../shared/types/news';

const { width: screenWidth } = Dimensions.get('window');

// Helper function to format date
const formatDateTime = (dateStr: string): string => {
  const date = new Date(dateStr);
  return date.toLocaleDateString('en-US', { 
    month: 'short', 
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  });
};

export function NewsCard({ news, style }: NewsCardProps) {
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
            {news.title}
          </Text>
        </View>
      </View>
      
      {/* Content Section */}
      <View style={styles.content}>
        {/* Summary */}
        <Text style={styles.summary}>
          {news.summary}
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
            {news.source} • {news.category} • {formatDateTime(news.pubDate)}
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
