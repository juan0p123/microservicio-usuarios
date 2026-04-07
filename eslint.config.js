const js = require('@eslint/js');
const globals = require('globals');

module.exports = [
  js.configs.recommended,

  // Frontend (browser)
    {
    files: ['calculadora.js', 'app.js'],
    languageOptions: {
        ecmaVersion: 2021,
        globals: {
            ...globals.browser,
            ...globals.node
    }
  },
  rules: {
    "no-unused-vars": "warn"
}
    },


  {
    files: ['tests/**/*.js', 'eslint.config.js'],
    languageOptions: {
      ecmaVersion: 2021,
      globals: {
        ...globals.node,
        ...globals.jest
      }
    }
  },


  {
    ignores: ['**/*.html']
  }
];