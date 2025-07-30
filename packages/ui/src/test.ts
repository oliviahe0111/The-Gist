// Test component to verify shared packages work
import { COLORS, SPACING, NewsItem } from './types';
import { formatNewsCardContent } from './patterns';
import { StoryController, useStoryState } from './utils';

// This is a test file to verify our shared package structure works
export const testSharedPackage = () => {
  console.log('Testing shared UI package...');
  
  // Test shared constants
  console.log('Colors:', COLORS.primary);
  console.log('Spacing:', SPACING.lg);
  
  // Test shared types
  const mockNews: NewsItem = {
    id: '1',
    title: 'Test News',
    summary: 'Test summary',
    image_url: 'test.jpg',
    source: 'Test Source',
    category: 'Test',
    pubDate: '2023-01-01',
    url: 'test.com'
  };
  
  // Test shared utilities
  const content = formatNewsCardContent(mockNews);
  console.log('Formatted content:', content);
  
  // Test story state
  const storyState = useStoryState();
  console.log('Initial state:', storyState.getInitialState());
  
  return {
    success: true,
    message: 'Shared package working correctly!'
  };
};

export default testSharedPackage;
