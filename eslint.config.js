const { createConfig } = require('eslint-config-next');

module.exports = createConfig({
  rules: {
    // Disable specific rules
    "react/no-unescaped-entities": "off",
    "@typescript-eslint/no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
  },
});
