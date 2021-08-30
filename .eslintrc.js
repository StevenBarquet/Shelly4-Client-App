module.exports = {
  extends: [
    "airbnb",
    "plugin:@typescript-eslint/recommended",
    "plugin:import/typescript",
    "plugin:prettier/recommended",
    "prettier/@typescript-eslint"
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "./tsconfig.json",
    tsconfigRootDir: "."
  },
  env: {
    browser: true,
    node: true,
    jest: true
  },
  globals: {
    require: "readonly",
    console: "readonly",
    process: "readonly",
    module: "writable",
    exports: "writable",
    unknown: "writable",
    ReturnType: "readonly"
  },
  rules: {
    // Javascript
    'no-debugger': 0,
    'no-alert': 0,
    'no-await-in-loop': 0,
    'no-return-assign': ['error', 'except-parens'],
    'no-restricted-syntax': [
      2,
      'ForInStatement',
      'LabeledStatement',
      'WithStatement',
    ],
    'no-use-before-define': 'off',
    'no-unused-vars': 0,
    'prefer-const': [
      'error',
      {
        destructuring: 'all',
      },
    ],
    'arrow-body-style': [0, 'as-needed'],
    'no-unused-expressions': 0,
    'no-param-reassign': [
      2,
      {
        props: false,
      },
    ],
    'no-console': 0,
    'no-plusplus': 0,
    'import/prefer-default-export': 0,
    'import': 0,
    'import/no-unresolved': 0,
    'import/no-extraneous-dependencies': 0,
    'func-names': 0,
    'space-before-function-paren': 0,
    'comma-dangle': 0,
    'max-len': 0,
    'import/extensions': 0,
    'no-underscore-dangle': 0,
    'consistent-return': 0,
    'react/display-name': 0,
    'react/no-array-index-key': 0,
    'react/react-in-jsx-scope': 0,
    'global-require': 0,
    'no-path-concat': 0,
    'prefer-template': 0,
    'react/prefer-stateless-function': 0,
    'react/forbid-prop-types': 0,
    'react/prop-types': 0,
    'react/no-unescaped-entities': 0,
    'jsx-a11y/click-events-have-key-events': 0,
    'jsx-a11y/no-noninteractive-element-interactions': 0,
    'jsx-a11y/accessible-emoji': 0,
    'react/require-default-props': 0,
    'react/jsx-filename-extension': [
      1,
      {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    ],
    radix: 0,
    'no-shadow': 0,
    'quotes': 0,
    'prettier/prettier': [
      0,
      {
        singleQuote: true,
        printWidth: 80,
      },
    ],
    'jsx-a11y/href-no-hash': 'off',
    'jsx-a11y/anchor-is-valid': [
      'warn',
      {
        aspects: ['invalidHref'],
      },
    ],
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 0,

    // Typescript
    '@typescript-eslint/no-use-before-define': ["error", { "functions": false, "classes": true, "variables": true }],
    '@typescript-eslint/no-explicit-any': 0,
    '@typescript-eslint/comma-dangle': 0,
    '@typescript-eslint/space-before-function-paren': 0,
    '@typescript-eslint/no-unused-expressions': [
      2,
      {
        allowTaggedTemplates: true,
      },
    ],
    '@typescript-eslint/no-shadow': [
      2,
      {
        hoist: 'all',
        allow: ['resolve', 'reject', 'done', 'next', 'err', 'error']
      },
    ],
    '@typescript-eslint/quotes': [
      2,
      'single',
      {
        avoidEscape: true,
        allowTemplateLiterals: true,
      },
    ],
    "@typescript-eslint/no-unused-vars": [
      1,
      { vars: 'all', args: 'after-used', ignoreRestSiblings: false },
    ]
  },
  plugins: ['html', 'prettier', 'react-hooks', 'jsx-a11y'],
};
