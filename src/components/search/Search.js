import './Search.css';
import createButton from '../button/Button';
import createElement from '../element/Element';
import createInput from '../input/Input';

function createSearch() {
  const search = createElement('div');
  const input = createInput('text', 'Enter any city name');
  const button = createButton('Submit');

  search.classList.add('search-box');
  input.classList.add('input-box');
  button.classList.add('button-box');

  search.appendChild(input);
  search.appendChild(button);

  return search;
}

export default createSearch;
