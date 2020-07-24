module.exports = {
  transform: {
    // ..
    '^.+\\.jsx?$': 'babel-jest'
  },
  transformIgnorePatterns: ['/node_modules/(?!(react-native)|(expo-constants))'],
  // ..
  moduleNameMapper: {
    '^react-native$': 'react-native-web',
  }
}