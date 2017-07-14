module.exports = {
  rules: {
    'arrow-parens': ['warn', 'as-needed'],
    'comma-dangle': ['warn', 'never'],
    'curly': 'off',
    'func-names': ['error', 'never'],
    'import/first': 'error',
    'import/no-extraneous-dependencies': [2, { devDependencies: true  }],
    'jsx-a11y/media-has-caption': 'off',
    'jsx-a11y/no-autofocus': 'off',
    'jsx-a11y/no-static-element-interactions': 'off',
    'jsx-quotes': ['warn', 'prefer-single'],
    'no-console': ['warn', { allow: ['warn', 'error'] }],
    'no-plusplus': 'off',
    'react/jsx-closing-bracket-location': ['warn', 'after-props'],
    'react/jsx-filename-extension': 0,
    'react/jsx-tag-spacing': 'warn',
    'react/jsx-uses-react': 'error',
    'react/jsx-uses-vars': 'error',
    'semi': [1, 'never'],
    'space-before-function-paren': ['warn', 'never'],
    'space-in-parens': 'warn',
    'spaced-comment': 'off'
  }
}
