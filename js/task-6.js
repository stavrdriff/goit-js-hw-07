'use strict'

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const createBoxes = (amount) => {
  const target = document.getElementById('boxes');
  let size = 30;

  for (let i = 1; i <= amount; i++) {
    target.insertAdjacentHTML(
      'beforeend',
      `<div style="width: ${size}px; height: ${size}px; background-color: ${getRandomHexColor()}"></div>`
    );
    size += 10;
  }
}

const destroyBoxes = () => {
  const container = document.getElementById('boxes');

  if (container.children.length) {
    [...container.children].forEach(el => {
      el.remove();
    })
  }
}

const initControls = () => {
  const controls = document.getElementById('controls');
  const input = controls.querySelector('input[type="number"]');
  const createButton = controls.querySelector('[data-create]');
  const destroyButton = controls.querySelector('[data-destroy]');

  createButton.addEventListener('click', () => {
    if (input.value >= 1 && input.value <= 100) { 
      destroyBoxes();
      createBoxes(input.value);
      input.value = '';
    }
  })

  destroyButton.addEventListener('click', () => {
    destroyBoxes();
  })
}

initControls();