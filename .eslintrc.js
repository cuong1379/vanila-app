module.exports = {
    root: true, // Make sure eslint picks up the config at the root of the directory
    parser: '@typescript-eslint/parser',
    parserOptions: {
      ecmaVersion: 2020, // Use the latest ecmascript standard
      sourceType: 'module', // Allows using import/export statements
      ecmaFeatures: {
        jsx: true // Enable JSX since we're using React
      }
    },
    settings: {
      react: {
        version: 'detect' // Automatically detect the react version
      }
    },
    env: {
      browser: true, // Enables browser globals like window and document
      amd: true, // Enables require() and define() as global variables as per the amd spec.
      node: true // Enables Node.js global variables and Node.js scoping.
    },
    extends: [
      'eslint:recommended',
      'plugin:@typescript-eslint/eslint-recommended',
      'plugin:@typescript-eslint/recommended',
      'plugin:react/recommended',
      'plugin:jsx-a11y/recommended',
      'prettier',
      'plugin:prettier/recommended' // Make sure this is always the last element in the array.
    ],
    rules: {
      'prettier/prettier': ['error', {}, { usePrettierrc: true }],
      'react/react-in-jsx-scope': 'off',
      'react/prop-types': 'off',
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/ban-types': 'off',
      '@typescript-eslint/no-unused-vars': 'off',
      'jsx-a11y/label-has-associated-control': 'off',
      'jsx-a11y/no-noninteractive-element-interactions': 'off',
      'jsx-a11y/click-events-have-key-events': 'off',
      'jsx-a11y/img-redundant-alt': 'off',
      'jsx-a11y/no-static-element-interactions': 'off',
      'jsx-a11y/anchor-is-valid': [
        'error',
        {
          components: ['Link'],
          specialLink: ['hrefLeft', 'hrefRight'],
          aspects: ['invalidHref', 'preferButton']
        }
      ],
      'jsx-a11y/no-autofocus': [
        2,
        {
          ignoreNonDOM: true
        }
      ]
    },
    overrides: [
      {
        files: ['*.js'],
        rules: {
          '@typescript-eslint/no-var-requires': 'off'
        }
      },
      {
        files: ['*.ts', '*.tsx'],
        rules: {
          '@typescript-eslint/explicit-module-boundary-types': 'off',
          '@typescript-eslint/no-explicit-any': 'off',
          '@typescript-eslint/ban-ts-ignore': 'off',
          '@typescript-eslint/ban-ts-comment': 'off',
          'react/display-name': 'off'
        }
      }
    ]
  }
  