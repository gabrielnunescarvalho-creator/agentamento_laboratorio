let count = 0;

const counterValue = document.getElementById('counter-value');
const btnDecrease = document.getElementById('btn-decrease');
const btnReset = document.getElementById('btn-reset');
const btnIncrease = document.getElementById('btn-increase');

function updateDisplay() {
  counterValue.textContent = count;
  
  if (count > 0) {
    counterValue.style.color = '#10b981'; // verde
  } else if (count < 0) {
    counterValue.style.color = '#ef4444'; // vermelho
  } else {
    counterValue.style.color = '#4f46e5'; // roxo/azul padrão
  }

  // Efeito suave de pulso
  counterValue.style.transform = 'scale(1.15)';
  setTimeout(() => {
    counterValue.style.transform = 'scale(1)';
  }, 150);
}

btnIncrease.addEventListener('click', () => {
  count++;
  updateDisplay();
});

btnDecrease.addEventListener('click', () => {
  count--;
  updateDisplay();
});

btnReset.addEventListener('click', () => {
  count = 0;
  updateDisplay();
});

