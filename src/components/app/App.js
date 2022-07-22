import createElement from '../element/Element';
import createSearch from '../search/Search';
import createTitle from '../title/Title';

function createApp() {
  const app = createElement('div');
  const title = createTitle('Weather Map', 'h1', '#28a745');
  const search = createSearch();

  app.appendChild(title);
  app.appendChild(search);

  return app;
}

export default createApp;
