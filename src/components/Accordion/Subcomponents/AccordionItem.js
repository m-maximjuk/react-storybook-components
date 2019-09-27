import React from 'react';

const getClassNames = (props) => {
  const classNames = ['accordion__item'];
  const { disabled, expanded } = props;

  if (disabled) classNames.push('accordion__item--disabled');
  if (expanded) classNames.push('accordion__item--expanded');

  return classNames.join(' ');
}

const toggle = ({ onItemToggle, index }) => onItemToggle(({ index }));

const AccordionItem = props => {
  const { title, content, expanded } = props;

  return (
    <li className={getClassNames(props)}>
      {
        title &&
        <h3 className="accordion__title" onClick={() => toggle(props)}>
          {title}

          <i className={`fa fa-caret-${(expanded) ? 'up' : 'down'}`}></i>
        </h3>
      }
      
      <div className="accordion__content">
        {content}
      </div> 
    </li>
  );
}

export default AccordionItem;