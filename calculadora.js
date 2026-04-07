function calcularPromedio(nota1, nota2, nota3, nota4) {
  if ([nota1, nota2, nota3, nota4].some(n => n === null || n === undefined || isNaN(n))) {
    throw new Error('Todas las notas son requeridas');
  }
  if ([nota1, nota2, nota3, nota4].some(n => n < 1 || n > 7)) {
    throw new Error('Las notas deben estar entre 1 y 7');
  }
  return (nota1 * 0.10) + (nota2 * 0.20) + (nota3 * 0.30) + (nota4 * 0.40);
}

function calcular() {
  const nota1 = parseFloat(document.getElementById('nota1').value);
  const nota2 = parseFloat(document.getElementById('nota2').value);
  const nota3 = parseFloat(document.getElementById('nota3').value);
  const nota4 = parseFloat(document.getElementById('nota4').value);

  try {
    const promedio = calcularPromedio(nota1, nota2, nota3, nota4);
    const resultado = document.getElementById('resultado');
    const estado = document.getElementById('estado');

    document.getElementById('promedio').textContent = promedio.toFixed(1);
    estado.textContent = promedio >= 4.0 ? 'APROBADO' : 'REPROBADO';
    estado.className = promedio >= 4.0 ? 'aprobado' : 'reprobado';
    resultado.classList.remove('oculto');
  } catch (e) {
    alert(e.message);
  }
}

if (typeof module !== 'undefined') {
  module.exports = { calcularPromedio };
}
