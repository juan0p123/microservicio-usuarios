const validarUsuario = require('../app');

test('usuario válido', () => {
  expect(validarUsuario("Pablo")).toBe(true);
});

test('usuario inválido', () => {
  expect(() => validarUsuario()).toThrow();
});
"@ | Set-Content tests\app.test.js -Encoding UTF"