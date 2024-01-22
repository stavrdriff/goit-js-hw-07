'use strict'

const buttonHandler = () => {
  const widget = document.querySelector('.widget');
  const button = widget.querySelector('.change-color');
  const text = widget.querySelector('.color');

  button.addEventListener('click', () => {
    const color = getRandomHexColor();

    text.textContent = color;
    document.body.style.backgroundColor = color;
  })
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

buttonHandler();