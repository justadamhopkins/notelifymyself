import { configure, addDecorator, addParameters } from '@storybook/react'
import centered from '@storybook/addon-centered/react';
import { withKnobs } from '@storybook/addon-knobs';
import { themes } from '@storybook/theming';

function loadStories() {
  console.log('Loading stories .........');
  const req = require.context('../src', true, /\.stories\.js$/)
  req.keys().forEach(filename => req(filename))
}

addParameters({
  options: {
    isFullscreen: false,
    showNav: true,
    showPanel: true,
    panelPosition: 'bottom',
    enableShortcuts: true,
    isToolshown: true,
    theme: themes.light,
  },
});



// centering components
addDecorator(centered);

// add `knobs` capability to any story
addDecorator(withKnobs);


configure(loadStories, module)
