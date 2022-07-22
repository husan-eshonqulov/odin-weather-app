import './Title.css';
import createElement from '../element/Element';

function createTitle(text, size, color) {
  const title = createElement(size);
  title.textContent = text;
  title.style.color = color;
  title.classList.add('title');

  return title;
}

export default createTitle;
