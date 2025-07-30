// Shared configuration for both platforms

export const APP_CONFIG = {
  name: 'The Gist',
  description: 'AI-powered news summary',
  version: '1.0.0',
  author: 'oliviahe0111',
  repository: 'https://github.com/oliviahe0111/The-Gist.git',
  
  // App-specific settings
  storyDuration: 5000, // 5 seconds
  maxStories: 50,
  
  // API endpoints (when implemented)
  api: {
    baseUrl: process.env.API_BASE_URL || 'https://api.thegist.app',
    timeout: 10000,
  },
  
  // Analytics (when implemented)
  analytics: {
    enabled: process.env.NODE_ENV === 'production',
    trackingId: process.env.ANALYTICS_TRACKING_ID,
  },
  
  // Feature flags
  features: {
    shareEnabled: true,
    followEnabled: true,
    offlineMode: false,
    pushNotifications: false,
  },
};

export const PLATFORM_CONFIG = {
  web: {
    port: 3000,
    publicPath: '/',
    buildDir: '.next',
  },
  mobile: {
    bundleId: 'com.thegist.app',
    scheme: 'thegist',
    version: '1.0.0',
  },
};

export const THEME_CONFIG = {
  colors: {
    primary: '#000000',
    secondary: '#1a1a1a', 
    accent: '#ff3040',
    background: '#000000',
    surface: '#1a1a1a',
    text: {
      primary: '#ffffff',
      secondary: '#9ca3af',
      tertiary: '#6b7280',
    },
  },
  fonts: {
    web: {
      sans: ['system-ui', 'sans-serif'],
      mono: ['Menlo', 'monospace'],
    },
    mobile: {
      regular: 'System',
      bold: 'System',
    },
  },
};
