import './Title.css';
import CreateElement from '../element/Element';

function CreateTitle(text, size, color) {
  const title = CreateElement(size);
  title.textContent = text;
  title.style.color = color;
  title.classList.add('title');

  return title;
}

export default CreateTitle;
