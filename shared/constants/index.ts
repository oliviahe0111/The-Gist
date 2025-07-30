import { NewsItem } from '../types/news';

// Mock data for development and testing purposes.
// Later, when a live API is available, its response will be
// mapped into this same NewsItem format to ensure consistency.
export const MOCK_NEWS_DATA: NewsItem[] = [
  {
    "id": "1",
    "image_url": "https://nypost.com/wp-content/uploads/sites/2/2024/03/Maryland-Bridge-Collapse_48236-ce6b1.jpg?quality=90&strip=all",
    "pubDate": "2024-03-26 15:42:39",
    "publishedDate": 1711467759000,
    "title": "Hero workers stopped cars from crossing Francis Scott Key Bridge moments before collapse",
    "summary": "The Francis Scott Key Bridge in Baltimore collapsed after a container ship hit it. The ship lost propulsion and warned officials of a possible collision. The bridge was closed for repairs at the time and workers were on the bridge when it collapsed.",
    "source": "National Post",
    "category": "Politics"
  },
  {
    "id": "2",
    "image_url": "https://images.unsplash.com/photo-1702247413157-7ae7f33e5751?q=80&w=1674&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "pubDate": "2024-07-29 13:15:00",
    "publishedDate": 1722261300000,
    "title": "Tech Giants Report Record Quarterly Earnings Despite Market Uncertainty",
    "summary": "Major technology companies including Apple, Google, and Microsoft have reported better-than-expected quarterly earnings, showing resilience in an uncertain economic climate. The strong performance is attributed to cloud computing growth and AI investments, signaling continued investor confidence in the tech sector.",
    "source": "TechCrunch",
    "category": "Technology"
  },
  {
    "id": "3",
    "image_url": "https://images.unsplash.com/photo-1493328967571-819121ed5085?q=80&w=1674&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "pubDate": "2024-07-29 12:45:00",
    "publishedDate": 1722259500000,
    "title": "Climate Scientists Warn of Accelerating Ice Sheet Loss in Antarctica",
    "summary": "New research reveals that Antarctic ice sheets are melting at an accelerated rate, potentially contributing to faster sea level rise than previously predicted. The study, published in Nature Climate Change, suggests urgent action is needed to address climate change impacts on polar regions.",
    "source": "BBC News",
    "category": "Science"
  },
  {
    "id": "4",
    "image_url": "https://images.unsplash.com/photo-1563712732824-161a0495f060?q=80&w=1742&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "pubDate": "2024-07-29 11:20:00",
    "publishedDate": 1722254400000,
    "title": "Global Markets Rally as Inflation Shows Signs of Cooling",
    "summary": "Stock markets worldwide surged following reports of declining inflation rates in major economies. Investors are optimistic about potential interest rate cuts, with the Dow Jones hitting a new record high. Economists suggest this could signal the beginning of economic stabilization after months of uncertainty.",
    "source": "Financial Times",
    "category": "Finance"
  },
  {
    "id": "5",
    "image_url": "https://images.unsplash.com/photo-1530025809667-1f4bcff8e60f?q=80&w=1691&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "pubDate": "2024-07-29 14:30:00",
    "publishedDate": 1722265800000,
    "title": "Canada pledges additional weapons to Ukraine during surprise visit",
    "summary": "Prime Minister Trudeau, during an unannounced trip to Kyiv, announces Canada's commitment to send more weapons to Ukraine. The move aims to bolster Ukraine's defense capabilities in the face of escalating tensions with Russia.",
    "source": "National Post",
    "category": "Politics"
  },
];

export const BREAKPOINTS = {
  MOBILE: 768,
  DESKTOP: 1024,
};

export const DESIGN_TOKENS = {
  COLORS: {
    PRIMARY: '#000000',
    SECONDARY: '#666666',
    BACKGROUND: '#ffffff',
    TEXT: '#333333',
    TEXT_LIGHT: '#666666',
  },
  SPACING: {
    XS: 4,
    SM: 8,
    MD: 16,
    LG: 24,
    XL: 32,
  },
  BORDER_RADIUS: {
    SM: 4,
    MD: 8,
    LG: 12,
  },
  CARD: {
    MAX_WIDTH_DESKTOP: 350,
  },
};
