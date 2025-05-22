const pantalla = document.getElementById('pantalla');
const botoNumeros = document.querySelectorAll('.numero');
const botoOperadors = document.querySelectorAll('.operador');
const botoIgual = document.getElementById('igual');
const botoNetejar = document.getElementById('netejar');
const botoDEL = document.getElementById('del');
let valorAnterior = '';
let operadorSeleccionat = '';
let operacioActual = '';

botoNumeros.forEach(boto => {
  boto.addEventListener('click', () => {
    if (pantalla.textContent === '0') {
      pantalla.textContent = boto.textContent;
    } else {
      pantalla.textContent += boto.textContent;
    }
  });
});

botoOperadors.forEach(boto => {
  boto.addEventListener('click', () => {
    valorAnterior = pantalla.textContent;
    operadorSeleccionat = boto.textContent;
    pantalla.textContent = '';
  });
});

botoIgual.addEventListener('click', () => {
  const valorActual = pantalla.textContent;
  let resultat = 0;

  if (operadorSeleccionat === '+') {
    resultat = parseFloat(valorAnterior) + parseFloat(valorActual);
  } else if (operadorSeleccionat === '-') {
    resultat = parseFloat(valorAnterior) - parseFloat(valorActual);
  } else if (operadorSeleccionat === '*') {
    resultat = parseFloat(valorAnterior) * parseFloat(valorActual);
  } else if (operadorSeleccionat === '/') {
    resultat = parseFloat(valorActual) === 0 ? 'Error' : parseFloat(valorAnterior) / parseFloat(valorActual);
  }

  pantalla.textContent = resultat;
});

botoNetejar.addEventListener('click', () => {
  pantalla.textContent = '0';
  valorAnterior = '';
  operadorSeleccionat = '';
});
botoDEL.addEventListener('click', () => {
  pantalla.textContent =pantalla.textContent.slice(0,-1) || '0';
  valorAnterior = '';
  operadorSeleccionat = '';
});
