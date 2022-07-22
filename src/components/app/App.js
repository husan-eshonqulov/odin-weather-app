import CreateElement from '../element/Element';
import CreateTitle from '../title/Title';

function CreateApp() {
  const app = CreateElement('div');
  const title = CreateTitle('Weather Map', 'h1', '#28a745');

  app.appendChild(title);

  return app;
}

export default CreateApp;
