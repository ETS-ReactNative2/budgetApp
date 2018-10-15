module.exports = {
    'extends': [
        'airbnb',
        'plugin:prettier/recommended',
        'prettier',
        'prettier/react'
    ],
    'parser': 'babel-eslint',
    'env': { 'jest': true },
    'rules': {
        'comma-dangle': ['warn', 'only-multiline'],
        'no-use-before-define': 'off',
        'react/destructuring-assignment': 'never',
        'react/jsx-curly-spacing': 'always',
        'react/jsx-filename-extension': [1, { 'extensions': ['.js', '.jsx'] }],
        'react/prop-types': {  'skipUndeclared': true },
        'semi': ['warn', 'never']
    }
};