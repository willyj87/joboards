module.exports = {
  transform: {
    '^.+\\.jsx?$': '<rootDir>/jest-preprocess.js',
  },
  moduleNameMapper: {
    '.+\\.(css|styl|less|sass|scss)$': 'identity-obj-proxy',
    '.+\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/__mocks__/file-mock.js',
  },
  testPathIgnorePatterns: ['node_modules', '\\.cache', '<rootDir>.*/public', '.history'],
  transformIgnorePatterns: ['node_modules/(?!(gatsby)/)'],
  globals: {
    __PATH_PREFIX__: '',
  },
  testMatch: ['<rootDir>/src/**/__tests__/**/*.test.{js,ts}'],
  setupFiles: ['<rootDir>/loadershim.js'],
  modulePaths: ['<rootDir>/'],
  moduleDirectories: ['node_modules', 'src'],
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
};
