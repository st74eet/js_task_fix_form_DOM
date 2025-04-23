'use strict';

const inputs = [...document.querySelectorAll('input')];
const divs = [...document.querySelectorAll('div')];
let count = 0;

divs.forEach((div, index) => {
  const newLabel = document.createElement('label');

  if (div.classList.contains('field')) {
    const label = div.insertAdjacentElement('afterbegin', newLabel);

    label.classList.add('field-label');
    label.setAttribute('for', inputs[count].id);
    label.textContent = inputs[count].name;

    count++;
  }
});

inputs.forEach((input) => {
  input.setAttribute('placeholder', capitalize(input.name));
});

function capitalize(s) {
  return String(s[0]).toUpperCase() + String(s).slice(1);
}
