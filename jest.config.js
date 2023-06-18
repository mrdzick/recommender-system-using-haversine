module.exports = {
  testPathIgnorePatterns: [
      '/node_modules/',
      '/dist/',
      '/build/'
  ],
  transform: {
      '^.+\\.ts$': 'ts-jest'
  }
}