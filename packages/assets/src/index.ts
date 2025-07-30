// Shared asset paths for both platforms
export const ASSETS = {
  icons: {
    app: './icon.png',
    splash: './splash-icon.png',
    adaptive: './adaptive-icon.png',
    favicon: './favicon.png',
  },
};

// Asset utility functions
export const getAssetPath = (assetName: keyof typeof ASSETS.icons, platform: 'web' | 'mobile' = 'web') => {
  const basePath = platform === 'web' ? '/assets' : './assets';
  return `${basePath}/${ASSETS.icons[assetName].replace('./', '')}`;
};
