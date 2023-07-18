module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: [
    "plugin:react/recommended",
    "standard-with-typescript",
    // 'plugin:i18next/recommended'
  ],
  overrides: [
    // {
    //     files: ['**/src/**/*.test.{ts,tsx}'],
    //     rules: {
    //         'i18next/no-literal-string': 'off'
    //     }
    // }
  ],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: ["./tsconfig.json"],
  },
  plugins: ["react", "@typescript-eslint", "i18next"],
  rules: {
    "@typescript-eslint/prefer-nullish-coalescing": "off",
    "@typescript-eslint/strict-boolean-expressions": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
    "import/no-unresolved": "off",
    "import/prefer-default-export": "off",
    "no-unused-vars": "warn",
    "react/require-default-props": "off",
    "react/react-in-jsx-scope": "off",
    "react/jsx-props-no-spreading": "warn",
    "react/function-component-definition": "off",
    "no-shadow": "off",
    "import/extensions": "off",
    "import/no-extraneous-dependencies": "off",
    "no-underscore-dangle": "off",
    "key-spacing": "off",
    "@typescript-eslint/naming-convention": ["warn"],
    // 'i18next/no-literal-string': ['error', {
    //     markupOnly: true,
    //     onlyAttribute: ['']
    // }]
  },
  globals: {
    __IS_DEV__: true,
  },
};
