const { calcularPromedio } = require('../calculadora');

test('promedio ponderado correcto', () => {
  expect(calcularPromedio(7, 7, 7, 7)).toBeCloseTo(7.0);
});

test('promedio ponderado con notas distintas', () => {
  expect(calcularPromedio(4, 5, 6, 7)).toBeCloseTo(6.2);
});

test('nota minima aprobacion', () => {
  expect(calcularPromedio(4, 4, 4, 4)).toBeCloseTo(4.0);
});

test('lanza error si falta una nota', () => {
  expect(() => calcularPromedio(7, 7, 7, NaN)).toThrow('Todas las notas son requeridas');
});

test('lanza error si nota fuera de rango', () => {
  expect(() => calcularPromedio(7, 7, 7, 8)).toThrow('Las notas deben estar entre 1 y 7');
});
