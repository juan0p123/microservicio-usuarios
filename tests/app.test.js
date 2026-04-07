const validarUsuario = require('../app');

test('usuario valido', () => {
  expect(validarUsuario('Pablo')).toBe(true);
});

test('usuario invalido', () => {
  expect(() => validarUsuario()).toThrow();
});
