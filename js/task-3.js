'use sctrict'

const greetings = () => {
  const input = document.querySelector('input#name-input');
  const target = document.querySelector('span#name-output');
  const defaultText = target.textContent;

  input.addEventListener('input', () => {
    input.value.trim().length
      ? target.textContent = input.value
      : target.textContent = defaultText;
  })
}

greetings();