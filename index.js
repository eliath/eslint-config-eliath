module.exports = {
  extends: [
    './rules/3rdparty/best-practices',
    './rules/3rdparty/errors',
    './rules/3rdparty/node',
    './rules/3rdparty/style',
    './rules/3rdparty/variables',
    './rules/3rdparty/es6',
    './rules/3rdparty/imports',
    './rules/3rdparty/react',
    './rules/3rdparty/react-a11y',
    './rules/eliath'
  ].map(require.resolve),
  parserOptions: {
    ecmaVersion: 2017,
    sourceType: 'module',
    ecmaFeatures: {
      experimentalObjectRestSpread: true
    }
  },
  rules: {
    strict: ['error', 'never']
  }
}
