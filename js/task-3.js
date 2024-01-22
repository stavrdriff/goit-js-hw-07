'use sctrict'

const greetings = () => {
  const input = document.querySelector('input#name-input');
  const target = document.querySelector('span#name-output');

  input.addEventListener('input', () => {
    input.value.charAt(0) === ' ' ? input.value = '' : '';
    input.value.trim().length ? target.textContent = input.value.trim() : '';
  });
}

greetings();