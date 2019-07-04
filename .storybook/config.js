import { configure, addDecorator } from '@storybook/react'
import centered from '@storybook/addon-centered/react';
import { withKnobs } from '@storybook/addon-knobs';

function loadStories() {
  console.log('Loading stories .........');
  const req = require.context('../src', true, /\.stories\.js$/)
  req.keys().forEach(filename => req(filename))
}



// centering components
addDecorator(centered);

// add `knobs` capability to any story
addDecorator(withKnobs);


configure(loadStories, module)
