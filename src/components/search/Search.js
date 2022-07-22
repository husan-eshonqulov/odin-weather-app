import createButton from '../button/Button';
import createElement from '../element/Element';
import createInput from '../input/Input';

function createSearch() {
  const search = createElement('div');
  const input = createInput('text', 'Enter any city name');
  const button = createButton('Submit');

  search.appendChild(input);
  search.appendChild(button);

  return search;
}

export default createSearch;
