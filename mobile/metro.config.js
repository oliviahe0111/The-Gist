const { getDefaultConfig } = require('expo/metro-config');
const path = require('path');

const config = getDefaultConfig(__dirname);

// Add the shared folder to the watchFolders
config.watchFolders = [
  path.resolve(__dirname, '../shared'),
];

module.exports = config;
