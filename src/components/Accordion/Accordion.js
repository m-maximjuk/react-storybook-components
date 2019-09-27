import React, { Component } from 'react';
import AccordionItem from './Subcomponents/AccordionItem';

import './Accordion.css';

class Accordion extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: props.items,
      multiple: props.multiple || false,
    }
  }

  onItemToggle = ({ index: key }) => {
    if (!this.state.items[key].disabled) {
      this.setState(state => ({
        items: state.items.map((item, index) => ({
          ...item,
          expanded: (index === key)
            ? !item.expanded
            : ((this.state.multiple) ? item.expanded : false),
        }))
      }));
    }
  }

  render() {
    return (
      <ul className="accordion">
        {this.state.items
          .map(({ title, content, disabled, expanded }, index) =>
            <AccordionItem
              key={index}
              index={index}
              disabled={disabled}
              title={title}
              content={content}
              expanded={expanded}
              onItemToggle={this.onItemToggle}
            />
          )
        }
      </ul>
    );
  }
}

export default Accordion;