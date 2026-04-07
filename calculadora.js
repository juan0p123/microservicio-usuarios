function calcularPromedio(nota1, nota2, nota3, nota4) {
  if ([nota1, nota2, nota3, nota4].some(n => n === null || n === undefined || isNaN(n))) {
    throw new Error('Todas las notas son requeridas');
  }

  if ([nota1, nota2, nota3, nota4].some(n => n < 1 || n > 7)) {
    throw new Error('Las notas deben estar entre 1 y 7');
  }

  return (nota1 * 0.10) + (nota2 * 0.20) + (nota3 * 0.30) + (nota4 * 0.40);
}

module.exports = { calcularPromedio };