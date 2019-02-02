
module.exports = {
  // setupTestFrameworkScriptFile: './node_modules/jest-enzyme/lib/index.js',
  setupFilesAfterEnv: [
    './node_modules/jest-enzyme/lib/index.js',
  ],
  testMatch: [
    '<rootDir>/(src|test)/__tests__/**/*.js?(x)',
    '<rootDir>/(src|test)/**/__tests__/**/*.js?(x)',
    '<rootDir>/(src|test)/?(*.)(spec|test).js?(x)',
    '<rootDir>/(src|test)/**/?(*.)(spec|test).js?(x)',
  ],
  transformIgnorePatterns: [
    '[/\\\\]node_modules[/\\\\].+\\.(js|jsx)$',
  ],
  transform: {
    '^.+\\.(js|jsx)$': '<rootDir>/node_modules/babel-jest',
    '^.+\\.pug$': '<rootDir>/dist/jest-transform-pug-as-jsx.cjs.js',
  },
};
