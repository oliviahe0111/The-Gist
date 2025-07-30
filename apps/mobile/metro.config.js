const { getDefaultConfig } = require('expo/metro-config');
const path = require('path');

const config = getDefaultConfig(__dirname);

// Add the monorepo packages to the watchFolders
config.watchFolders = [
  path.resolve(__dirname, '../../packages/shared'),
  path.resolve(__dirname, '../../packages/ui'),
  path.resolve(__dirname, '../../packages/config'),
  path.resolve(__dirname, '../../packages/assets'),
];

// Ensure React is resolved from the workspace root to avoid multiple instances
config.resolver = {
  ...config.resolver,
  alias: {
    react: path.resolve(__dirname, '../../node_modules/react'),
    'react-native': path.resolve(__dirname, '../../node_modules/react-native'),
  },
};

module.exports = config;
