import React from 'react';
import Accordion from '../components/Accordion/Accordion';

const items = [
  {
    title: 'Bootstrap',
    disabled: true,
    content: 'Bootstrap is an open source toolkit for developing with HTML, CSS, and JS. Quickly prototype your ideas or build your entire app with our Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful plugins built on jQuery.',
  },
  {
    title: 'Bulma',
    content: 'Bulma is a free, open source CSS framework based on Flexbox and built with Sass. It\'s 100% responsive, fully modular, and available for free'
  },
  {
    title: 'Semantic UI',
    content: 'Semantic empowers designers and developers by creating a shared vocabulary for UI.'
  },
]

export function getAccordionVariants() {
  return <div style={{ display: 'flex' }}>
    <div style={{ width: 350, marginRight: 15 }}>
      <p>Single item</p>
      <Accordion items={items}/>
    </div>

    <div style={{ width: 350 }}>
      <p>Multiple items</p>
      <Accordion items={items} multiple/>
    </div>
  </div>
}
