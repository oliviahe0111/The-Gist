import React, { useState, useEffect, useRef } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Dimensions,
  StatusBar,
  SafeAreaView,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { StoryViewerProps } from '../../shared/types/news';

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');
const STORY_DURATION = 5000; // 5 seconds per story

export function StoryViewer({ stories, initialIndex, onClose }: StoryViewerProps) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const [progress, setProgress] = useState(0);
  const [isLiked, setIsLiked] = useState(false);
  const [isFollowing, setIsFollowing] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  const progressInterval = useRef<NodeJS.Timeout | null>(null);
  const currentStory = stories[currentIndex];

  // Auto-advance to next story
  useEffect(() => {
    if (isPaused) return;

    progressInterval.current = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          if (currentIndex < stories.length - 1) {
            setCurrentIndex(currentIndex + 1);
            return 0;
          } else {
            onClose();
            return 100;
          }
        }
        return prev + (100 / (STORY_DURATION / 100));
      });
    }, 100);

    return () => {
      if (progressInterval.current) clearInterval(progressInterval.current);
    };
  }, [currentIndex, isPaused, stories.length, onClose]);

  // Reset progress on story change
  useEffect(() => {
    setProgress(0);
    setIsLiked(false);
    setIsFollowing(false); // Reset follow state for new story
  }, [currentIndex]);

  const goToNextStory = () => {
    if (currentIndex < stories.length - 1) setCurrentIndex(currentIndex + 1);
    else onClose();
  };

  const goToPreviousStory = () => {
    if (currentIndex > 0) setCurrentIndex(currentIndex - 1);
  };

  const handleTap = (event: any) => {
    const { locationX } = event.nativeEvent;
    if (locationX > screenWidth / 2) goToNextStory();
    else goToPreviousStory();
  };

  const handleLongPress = () => setIsPaused(true);
  const handlePressOut = () => setIsPaused(false);

  const handleLike = () => setIsLiked(!isLiked);
  const handleShare = () => console.log('Share story:', currentStory.title);
  const handleFollow = () => setIsFollowing(!isFollowing);
  const handleMenu = () => console.log('Show menu for:', currentStory.source);

  return (
    <View style={{ flex: 1, backgroundColor: 'black' }}>
      <StatusBar barStyle="light-content" backgroundColor="black" />

      {/* Full-screen background image with darker tint */}
      <Image
        source={{ uri: currentStory.image_url }}
        style={{
          width: screenWidth,
          height: screenHeight,
          position: 'absolute',
        }}
        resizeMode="cover"
        blurRadius={20}
      />
      <View
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0,0,0,0.6)',
        }}
      />

      <SafeAreaView style={{ flex: 1 }}>
        {/* Touchable container for tap navigation */}
        <TouchableOpacity
          style={{ flex: 1 }}
          activeOpacity={1}
          onPress={handleTap}
          onLongPress={handleLongPress}
          onPressOut={handlePressOut}
        >
          {/* ======= Top Controls ======= */}
          <View
            style={{
              position: 'absolute',
              top: 50,
              left: 0,
              right: 0,
              paddingHorizontal: 20,
              zIndex: 10,
            }}
          >
            {/* Progress Bars */}
            <View style={{ flexDirection: 'row', marginBottom: 20, gap: 4 }}>
              {stories.map((_, index) => (
                <View
                  key={index}
                  style={{
                    flex: 1,
                    height: 3,
                    backgroundColor: 'rgba(255,255,255,0.3)',
                    borderRadius: 1.5,
                  }}
                >
                  <View
                    style={{
                      height: '100%',
                      backgroundColor: 'white',
                      borderRadius: 1.5,
                      width: `${
                        index < currentIndex ? 100 : index === currentIndex ? progress : 0
                      }%`,
                    }}
                  />
                </View>
              ))}
            </View>

            {/* Header */}
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
            >
              <Text style={{ color: 'white', fontSize: 18, fontWeight: 'bold' }}>
                {currentStory.source}
              </Text>
              <View style={{ flexDirection: 'row', gap: 15 }}>
                <TouchableOpacity onPress={handleMenu}>
                  <Ionicons name="ellipsis-horizontal" size={24} color="white" />
                </TouchableOpacity>
                <TouchableOpacity onPress={onClose}>
                  <Ionicons name="close" size={24} color="white" />
                </TouchableOpacity>
              </View>
            </View>
          </View>

          {/* ======= Story Card ======= */}
          <View
            style={{
              position: 'absolute',
              top: screenHeight * 0.12,
              left: 16,
              right: 16,
              bottom: 100,
              zIndex: 10,
            }}
          >
            <View
              style={{
                flex: 1,
                backgroundColor: '#1a1a1a', // flat background
                borderRadius: 16,
                overflow: 'hidden',
                maxWidth: 350,
                alignSelf: 'center',
                width: '100%',
              }}
            >
              {/* Top half: main image */}
              <View style={{ height: '60%', position: 'relative' }}>
                <Image
                  source={{ uri: currentStory.image_url }}
                  style={{ width: '100%', height: '100%' }}
                  resizeMode="cover"
                />
                <View style={{ position: 'absolute', bottom: 16, left: 16, right: 16 }}>
                  <View
                    style={{
                      backgroundColor: 'rgba(0,0,0,0.8)',
                      borderRadius: 8,
                      padding: 12,
                    }}
                  >
                    <Text
                      style={{
                        color: 'white',
                        fontSize: 18,
                        fontWeight: 'bold',
                        lineHeight: 24,
                      }}
                    >
                      {currentStory.title}
                    </Text>
                  </View>
                </View>
              </View>

              {/* Bottom half: description */}
              <View style={{ flex: 1, padding: 16, justifyContent: 'space-between' }}>
                <Text style={{ color: 'white', fontSize: 14, lineHeight: 20 }}>
                  {currentStory.summary}
                </Text>
                <View style={{ marginTop: 16 }}>
                  <Text style={{ color: 'rgba(255,255,255,0.7)', fontSize: 12 }}>
                    Summarized News Story by
                  </Text>
                  <Text style={{ color: 'rgba(255,255,255,0.6)', fontSize: 12 }}>
                    The Gist - AI News App
                  </Text>
                </View>
              </View>
            </View>
          </View>

          {/* ======= Bottom Controls ======= */}
          <View
            style={{
              position: 'absolute',
              bottom: 40,
              left: 20,
              right: 20,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              zIndex: 10,
            }}
          >
            {/* Like Button */}
            <TouchableOpacity onPress={handleLike}>
              <Ionicons
                name={isLiked ? 'heart' : 'heart-outline'}
                size={32}
                color={isLiked ? '#ff3040' : 'white'}
              />
            </TouchableOpacity>

            {/* Follow Button */}
            <TouchableOpacity
              onPress={handleFollow}
              style={{
                backgroundColor: isFollowing ? 'rgba(255,255,255,0.2)' : 'white',
                paddingHorizontal: 24,
                paddingVertical: 12,
                borderRadius: 25,
                borderWidth: isFollowing ? 1 : 0,
                borderColor: 'white',
              }}
            >
              <Text
                style={{
                  color: isFollowing ? 'white' : 'black',
                  fontWeight: 'bold',
                  fontSize: 14,
                }}
              >
                {isFollowing ? 'Following' : 'Follow News Source'}
              </Text>
            </TouchableOpacity>

            {/* Share Button */}
            <TouchableOpacity onPress={handleShare}>
              <Ionicons name="share-outline" size={32} color="white" />
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
      </SafeAreaView>
    </View>
  );
}
