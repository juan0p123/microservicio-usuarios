const { calcularPromedio } = require('./calculadora');

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

    if (promedio >= 4.0) {
      estado.textContent = 'APROBADO';
      estado.className = 'aprobado';
    } else {
      estado.textContent = 'REPROBADO';
      estado.className = 'reprobado';
    }

    resultado.classList.remove('oculto');
  } catch (e) {
    alert(e.message);
  }
}

document.getElementById('formulario').addEventListener('submit', (e) => {
  e.preventDefault();
  calcular();
});