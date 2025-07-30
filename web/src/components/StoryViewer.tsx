'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { StoryViewerProps } from '@/types/news';

const STORY_DURATION = 5000;

export function StoryViewer({ stories, initialIndex, onClose }: StoryViewerProps) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const [progress, setProgress] = useState(0);
  const [isLiked, setIsLiked] = useState(false);
  const [isFollowing, setIsFollowing] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  const progressInterval = useRef<NodeJS.Timeout | null>(null);
  const currentStory = stories[currentIndex];

  useEffect(() => {
    if (isPaused) {
      return;
    }
    progressInterval.current = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          if (currentIndex < stories.length - 1) {
            setCurrentIndex(currentIndex + 1);
            return 0;
          } else {
            // Use setTimeout to defer the onClose call to avoid setState during render
            setTimeout(() => onClose(), 0);
            return 100;
          }
        }
        return prev + (100 / (STORY_DURATION / 100));
      });
    }, 100);
    return () => {
      if (progressInterval.current) {
        clearInterval(progressInterval.current);
      }
    };
  }, [currentIndex, isPaused, stories.length, onClose]);

  useEffect(() => {
    setProgress(0);
    setIsLiked(false);
    setIsFollowing(false); // Reset follow state for new story
  }, [currentIndex]);

  const goToNextStory = () => {
    if (currentIndex < stories.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      // Use setTimeout to defer the onClose call to avoid setState during render
      setTimeout(() => onClose(), 0);
    }
  };
  const goToPreviousStory = () => currentIndex > 0 && setCurrentIndex(currentIndex - 1);

  const handleClick = (e: React.MouseEvent) => {
    const { left, width } = e.currentTarget.getBoundingClientRect();
    if (e.clientX - left > width / 2) goToNextStory();
    else goToPreviousStory();
  };

  const handleMouseDown = () => setIsPaused(true);
  const handleMouseUp = () => setIsPaused(false);

  const handleLikeClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsLiked(!isLiked);
  };

  const handleFollowClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsFollowing(!isFollowing);
  };

  const handleShareClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    console.log('Share');
  };

  const handleMenuClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    console.log('Show menu for:', currentStory.source);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Full blurred background */}
      <Image
        src={currentStory.image_url}
        alt={currentStory.title}
        fill
        className="object-cover blur-lg scale-105"
        priority
      />
      <div className="absolute inset-0 bg-black/80" />

      {/* Story content wrapper */}
      <div
        className="relative w-full h-full z-10 flex flex-col items-center justify-between cursor-pointer"
        onClick={handleClick}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
      >
        {/* ===== Top: Progress + Header ===== */}
        <div className="w-full max-w-[350px] px-5 pt-5">
          <div className="flex gap-1 mb-5">
            {stories.map((_, index) => (
              <div key={index} className="flex-1 h-1 bg-white/30 rounded-full overflow-hidden">
                <div
                  className="h-full bg-white rounded-full transition-all duration-100 ease-linear"
                  style={{ width: `${index < currentIndex ? 100 : index === currentIndex ? progress : 0}%` }}
                />
              </div>
            ))}
          </div>
          <div className="flex items-center justify-between">
            <h2 className="text-white text-lg font-bold">{currentStory.source}</h2>
            <div className="flex items-center gap-4">
              <button onClick={handleMenuClick} className="text-white hover:text-gray-300">
                <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                  <circle cx="5" cy="12" r="2"/>
                  <circle cx="12" cy="12" r="2"/>
                  <circle cx="19" cy="12" r="2"/>
                </svg>
              </button>
              <button onClick={onClose} className="text-white hover:text-gray-300">
                <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* ===== Middle: Story Card ===== */}
        <div className="flex-1 flex items-center justify-center w-full px-5">
          <div className="rounded-2xl overflow-hidden shadow-lg w-full max-w-[350px] h-[98%] flex flex-col relative">
            {/* Background blurred image for entire card */}
            <Image 
              src={currentStory.image_url} 
              alt={currentStory.title} 
              fill 
              className="object-cover blur-sm" 
            />
            <div className="absolute inset-0 bg-black/90" />
            
            {/* Content overlay */}
            <div className="relative z-10 flex flex-col h-full">
              {/* Top: main image */}
              <div className="relative h-[60%]">
                <Image src={currentStory.image_url} alt={currentStory.title} fill className="object-cover" />
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="bg-black/80 rounded-lg p-3">
                    <h1 className="text-white text-xl font-bold leading-tight">{currentStory.title}</h1>
                  </div>
                </div>
              </div>

              {/* Bottom: description section */}
              <div className="flex-1 p-6 flex flex-col justify-between">
                <p className="text-white text-base leading-relaxed">{currentStory.summary}</p>
                <div className="text-sm mt-4">
                  <p className="text-gray-300">Summarized News Story by</p>
                  <p className="text-gray-400">The Gist - AI News App</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ===== Bottom: Action Buttons ===== */}
        <div className="w-full max-w-[350px] px-5 pb-8 flex items-center justify-between">
          <button onClick={handleLikeClick} className="text-white hover:scale-110 transition-transform">
            <svg width="32" height="32" fill={isLiked ? '#ff3040' : 'currentColor'} viewBox="0 0 24 24">
              <path
                d={
                  isLiked
                    ? 'M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z'
                    : 'M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55l-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z'
                }
              />
            </svg>
          </button>
          <button
            onClick={handleFollowClick}
            className={`px-6 py-3 rounded-full font-bold text-sm transition-all ${
              isFollowing
                ? 'bg-transparent border border-white text-white hover:bg-white/20'
                : 'bg-white text-black hover:bg-gray-200'
            }`}
          >
            {isFollowing ? 'Following' : 'Follow News Source'}
          </button>
          <button onClick={handleShareClick} className="text-white hover:scale-110 transition-transform">
            <svg width="32" height="32" fill="currentColor" viewBox="0 0 24 24">
              <path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92s2.92-1.31 2.92-2.92-1.31-2.92-2.92-2.92z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
