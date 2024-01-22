'use strict'

const buttonHandler = () => {
  const widget = document.querySelector('.widget');
  const button = widget.querySelector('.change-color');
  const text = widget.querySelector('.color');

  button.addEventListener('click', () => {
    text.textContent = getRandomHexColor();
  })
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

buttonHandler();