import React, { useState } from 'react';
import AccordionItem from './Subcomponents/AccordionItem';

import './Accordion.css';

const Accordion = props => {
  const [state, setState] = useState({
    items: props.items,
    multiple: props.multiple || false,
  })

  const onItemToggle = ({ index: key }) => {
    if (!state.items[key].disabled) {
      setState(state => ({
        ...state,
        items: state.items.map((item, index) => ({
          ...item,
          expanded: (index === key)
            ? !item.expanded
            : ((state.multiple) ? item.expanded : false),
        })),
      }));
    }
  }
  
  return (
    <ul className="accordion">
      {state.items
        .map(({ title, content, disabled, expanded }, index) =>
          <AccordionItem
            key={index}
            index={index}
            disabled={disabled}
            title={title}
            content={content}
            expanded={expanded}
            onItemToggle={onItemToggle}
          />
        )
      }
    </ul>
  );
}

export default Accordion;