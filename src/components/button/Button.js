import createElement from '../element/Element';

function createButton(text) {
  const button = createElement('button');
  button.textContent = text;
  button.classList.add('btn');
  button.classList.add('btn-primary');

  return button;
}

export default createButton;
