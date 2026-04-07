const js = require('@eslint/js');

module.exports = [
  js.configs.recommended,
  {
    files: ['calculadora.js', 'index.html'],
    languageOptions: {
      ecmaVersion: 2021,
      globals: {
        window: 'readonly',
        document: 'readonly',
        alert: 'readonly',
        module: 'readonly',
        exports: 'readonly',
      }
    },
    rules: {}
  },
  {
    files: ['app.js', 'tests/**/*.js', 'eslint.config.js'],
    languageOptions: {
      ecmaVersion: 2021,
      globals: {
        require: 'readonly',
        module: 'readonly',
        exports: 'readonly',
        __dirname: 'readonly',
        process: 'readonly',
        test: 'readonly',
        expect: 'readonly',
      }
    },
    rules: {}
  }
];
