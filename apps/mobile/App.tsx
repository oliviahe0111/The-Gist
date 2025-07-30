// @ts-nocheck
import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, SafeAreaView, TouchableOpacity } from 'react-native';
import { NewsCard } from './components/NewsCard';
import { StoryViewer } from './components/StoryViewer';
import { MOCK_NEWS_DATA } from '@the-gist/shared';

export default function App() {
  const [selectedStoryIndex, setSelectedStoryIndex] = useState<number | null>(null);

  const handleNewsPress = (index: number) => {
    setSelectedStoryIndex(index);
  };

  const handleCloseStory = () => {
    setSelectedStoryIndex(null);
  };

  if (selectedStoryIndex !== null) {
    return (
      <StoryViewer
        stories={MOCK_NEWS_DATA}
        initialIndex={selectedStoryIndex}
        onClose={handleCloseStory}
      />
    );
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.headerTitle}>The Gist</Text>
          <Text style={styles.headerSubtitle}>
            Your AI-powered news summary
          </Text>
        </View>

        {/* News Content */}
        {MOCK_NEWS_DATA.map((news, index) => (
          <TouchableOpacity key={news.id} onPress={() => handleNewsPress(index)} style={styles.newsCard}>
            <NewsCard news={news} />
          </TouchableOpacity>
        ))}
        
        <StatusBar style="light" />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#000000',
  },
  container: {
    flexGrow: 1,
    padding: 16,
    backgroundColor: '#000000',
  },
  header: {
    alignItems: 'center',
    marginBottom: 32,
    paddingTop: 20,
  },
  headerTitle: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 8,
  },
  headerSubtitle: {
    fontSize: 16,
    color: '#cccccc',
    textAlign: 'center',
  },
  newsCard: {
    marginBottom: 20,
  },
});
