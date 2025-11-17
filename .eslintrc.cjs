/* eslint-env node */

module.exports = {
  env: { browser: true, es2022: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    "htmlacademy/react-typescript",
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module', project: 'tsconfig.json' },
  settings: { react: { version: 'detect' } },
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': 'warn',
    'react/prop-types': 'off',
  },
  overrides: [
    {
      files: ['*test*'],
      rules: { '@typescript-eslint/unbound-method': 'off' }
    },
    // {
    //   files: ['*.stories.@(ts|tsx|js|jsx)'],
    //   rules: {
    //     '@typescript-eslint/no-unused-vars': 'off',
    //     '@typescript-eslint/no-explicit-any': 'off',
    //     '@typescript-eslint/no-empty-function': 'off',
    //     '@typescript-eslint/no-non-null-assertion': 'off',
    //     '@typescript-eslint/ban-ts-comment': 'off',
    //     '@typescript-eslint/no-empty-interface': 'off',
    //     '@typescript-eslint/no-unsafe-assignment': 'off',
    //     '@typescript-eslint/no-unsafe-member-access': 'off',
    //     '@typescript-eslint/no-unsafe-call': 'off',
    //     '@typescript-eslint/no-unsafe-return': 'off',
    //     'react-hooks/rules-of-hooks': 'off',
    //     'react-hooks/exhaustive-deps': 'off',
    //     'react-refresh/only-export-components': 'off',
    //     'react/jsx-curly-newline': 'off',
    //     'react/jsx-indent': 'off',
    //     'react/jsx-indent-props': 'off',
    //     'react/jsx-wrap-multilines': 'off',
    //     'react/jsx-closing-bracket-location': 'off',
    //     'react/jsx-closing-tag-location': 'off',
    //     'react/jsx-tag-spacing': 'off',
    //     'react/jsx-curly-spacing': 'off',
    //     'no-unused-vars': 'off',
    //     'no-empty': 'off',
    //     'no-console': 'off',
    //     'indent': 'off',
    //     'eol-last': 'off',
    //     'quotes': 'off',
    //     'semi': 'off',
    //     'comma-dangle': 'off',
    //     'object-curly-spacing': 'off',
    //     'array-bracket-spacing': 'off',
    //     'comma-spacing': 'off',
    //     'key-spacing': 'off',
    //     'arrow-spacing': 'off',
    //   }
    // }
  ],
  ignorePatterns: ['.storybook/**'],
}
