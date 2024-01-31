'use strict';

const submitForm = () => {
  const form = document.querySelector('form.login-form');
  const emailInput = form.querySelector('[type="email"]');
  const passInput = form.querySelector('[type="password"]');
  const elements = {};

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    if (!emailInput.value.trim().length || !passInput.value.trim().length) {
      alert('All form fields must be filled in');
    }
    else {
      elements.email = emailInput.value.trim();
      elements.password = passInput.value.trim();

      console.log(elements);
      form.reset();
    }
  })
}

submitForm();