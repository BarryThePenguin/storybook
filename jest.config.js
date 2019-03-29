module.exports = {
  cacheDirectory: '.cache/jest',
  clearMocks: true,
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/__mocks__/fileMock.js',
    '\\.(css|scss|stylesheet)$': '<rootDir>/__mocks__/styleMock.js',
    '\\.(md)$': '<rootDir>/__mocks__/htmlMock.js',
  },
  projects: [
    '<rootDir>',
    '<rootDir>/examples/cra-kitchen-sink',
    '<rootDir>/examples/cra-ts-kitchen-sink',
    '<rootDir>/examples/html-kitchen-sink',
    '<rootDir>/examples/riot-kitchen-sink',
    '<rootDir>/examples/svelte-kitchen-sink',
    '<rootDir>/examples/vue-kitchen-sink',
    '<rootDir>/examples/angular-cli',
    '<rootDir>/examples/preact-kitchen-sink',
    '<rootDir>/examples/rax-kitchen-sink',
  ],
  roots: [
    '<rootDir>/addons',
    '<rootDir>/app',
    '<rootDir>/lib',
    '<rootDir>/examples/official-storybook',
  ],
  transform: {
    '^.+\\.jsx?$': '<rootDir>/scripts/babel-jest.js',
    '^.+\\.tsx?$': '<rootDir>/node_modules/ts-jest',
  },
  testMatch: ['**/__tests__/**/*.(j|t)s?(x)', '**/?(*.)+(spek|test).(j|t)s?(x)'],
  testPathIgnorePatterns: ['/node_modules/', '/dist/', 'addon-jest.test.js', '/cli/test/'],
  collectCoverage: false,
  collectCoverageFrom: [
    'app/**/*.{js,jsx,ts,tsx}',
    'lib/**/*.{js,jsx,ts,tsx}',
    'addons/**/*.{js,jsx,ts,tsx}',
  ],
  coveragePathIgnorePatterns: [
    '/node_modules/',
    '/cli/test/',
    '/dist/',
    '/generators/',
    '/dll/',
    '/__mocks__ /',
  ],
  snapshotSerializers: ['jest-emotion', 'enzyme-to-json/serializer'],
  coverageDirectory: 'coverage',
  coverageReporters: ['lcov'],
  testEnvironment: 'jest-environment-jsdom-thirteen',
  setupTestFrameworkScriptFile: './scripts/jest.init.js',
  setupFiles: ['raf/polyfill'],
  testURL: 'http://localhost',
  modulePathIgnorePatterns: ['/dist/.*/__mocks__/'],
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx', 'json', 'node'],
  watchPlugins: ['jest-watch-typeahead/filename', 'jest-watch-typeahead/testname'],
};
