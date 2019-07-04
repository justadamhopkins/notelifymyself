import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs } from '@storybook/addon-knobs'
import { Hamburger } from '.'


storiesOf('Hamburger', module)
  .addDecorator(withKnobs)
  .add('open', () => (<Hamburger
    toggleSideDraw={() => {}}
    animateHamBurger={false}/>))
