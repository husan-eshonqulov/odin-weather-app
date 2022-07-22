import createElement from '../element/Element';

function createInput(type, pHolder) {
  const input = createElement('input');
  input.type = type;
  input.placeholder = pHolder;
  input.classList.add('form-control');

  return input;
}

export default createInput;
