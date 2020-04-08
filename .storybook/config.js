import { configure } from '@storybook/react';

import 'semantic-ui-css/semantic.min.css';

const loadStories = () => {
  const customRequire = require.context('../src', true, /\.stories\.js?(x)$/);

  customRequire.keys().forEach((filename) => customRequire(filename));
};

configure(loadStories, module);
