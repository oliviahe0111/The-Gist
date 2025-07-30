import Image from 'next/image';
import { useState } from 'react';
import { NewsItem, NewsCardProps } from '@/types/news';
import { ClientOnlyDate } from './ClientOnlyDate';

export function NewsCard({ news, className = '' }: NewsCardProps) {
  const [imageError, setImageError] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div className={`rounded-2xl overflow-hidden w-full 
      md:max-w-[350px] mx-auto h-full flex flex-col relative
      ${className}`}>
      
      {/* Solid dark background instead of blurred image */}
        <div className="absolute inset-0 bg-[#1a1a1a]" />
      
      {/* Content overlay */}
      <div className="relative z-10 flex flex-col h-full">
        {/* Image Section with Overlay */}
        <div className="relative w-full h-48 md:h-72">
          {!imageError ? (
            <Image
              src={news.image_url}
              alt={news.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 350px"
              priority
              onLoad={() => {
                console.log('Image loaded successfully:', news.image_url);
                setImageLoaded(true);
              }}
              onError={(e) => {
                console.error('Failed to load image:', news.image_url);
                setImageError(true);
              }}
            />
          ) : (
            // Fallback placeholder
            <div className="w-full h-full bg-gray-700 flex items-center justify-center">
              <div className="text-center text-gray-400">
                <svg className="w-12 h-12 mx-auto mb-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                </svg>
              <p className="text-sm">Image not available</p>
            </div>
          </div>
        )}
        
        {/* Dark overlay for better text readability - only show when image is loaded */}
        {imageLoaded && !imageError && (
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
        )}
        
        {/* Title overlay on image - always show */}
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <div className="bg-black/80 rounded-lg p-3">
            <h2 className="text-lg md:text-xl font-bold text-white leading-tight">
              {news.title}
            </h2>
          </div>
        </div>
      </div>
      
      {/* Content Section */}
      <div className="p-4 md:p-6 flex-1 flex flex-col">
        {/* Summary */}
        <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-5">
          {news.summary}
        </p>
        
        {/* Footer with source and date */}
        <div className="border-t border-gray-700 pt-4 mt-auto">
          <p className="text-gray-500 text-sm mb-1">
            Summarized News Story by
          </p>
          <p className="text-gray-600 text-sm font-medium mb-2">
            The Gist
          </p>
          <p className="text-gray-600 text-xs">
            {news.source} • {news.category} • <ClientOnlyDate dateStr={news.pubDate} />
          </p>
        </div>
      </div>
      </div>
    </div>
  );
}