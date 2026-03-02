module.exports = {
  preset: 'react-native',
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': ['babel-jest'],
  },
  transformIgnorePatterns: [
    'node_modules/(?!(react-native|@react-native|react|@react-navigation|react-native-gesture-handler)/)',
  ],
  setupFiles: ['./jest.setup.js'],
};
