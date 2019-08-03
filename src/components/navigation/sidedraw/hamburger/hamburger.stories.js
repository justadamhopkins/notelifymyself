import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, boolean } from '@storybook/addon-knobs'
import { Hamburger } from '.'


const stories = storiesOf('Hamburger', module)

stories.addDecorator(withKnobs)

stories.add('toggle', () => (<Hamburger
    animateHamBurger={boolean('close', false)}/>))
