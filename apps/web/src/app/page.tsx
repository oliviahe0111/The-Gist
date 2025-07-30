'use client';

import React, { useState } from 'react';
import { NewsCard } from '@/components/NewsCard';
import { ClientOnlyStoryViewer } from '@/components/ClientOnlyStoryViewer';
import { MOCK_NEWS_DATA } from '@the-gist/shared';

export default function Home() {
  const [selectedStoryIndex, setSelectedStoryIndex] = useState<number | null>(null);

  const handleNewsPress = (index: number) => {
    setSelectedStoryIndex(index);
  };

  const handleCloseStory = () => {
    setSelectedStoryIndex(null);
  };

  if (selectedStoryIndex !== null) {
    return (
      <ClientOnlyStoryViewer
        stories={MOCK_NEWS_DATA}
        initialIndex={selectedStoryIndex}
        onClose={handleCloseStory}
      />
    );
  }

  return (
    <div className="min-h-screen bg-black py-8 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <header className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
            The Gist
          </h1>
          <p className="text-gray-400">
            Your AI-powered news summary
          </p>
        </header>

        {/* News Grid */}
        <main className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center">
          {MOCK_NEWS_DATA.map((news, index) => (
            <div 
              key={news.id} 
              onClick={() => handleNewsPress(index)}
              className="cursor-pointer hover:scale-105 transition-transform duration-200"
            >
              <NewsCard news={news} />
            </div>
          ))}
        </main>
      </div>
    </div>
  );
}
