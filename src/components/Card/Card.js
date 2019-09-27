import React from 'react';
import CardHeader from './Subcomponents/CardHeader';
import CardBody from './Subcomponents/CardBody';
import './Card.css';

const getClassNames = ({ interactive }) => {
  const classes = ['card'];

  if (interactive) classes.push('card--interactive');

  return classes.join(' ');
}

const Card = (props) => {
  const {
    type,
    background,
    icon,
    title,
    body,
    footer,
    children,
    interactive,
  } = props;

  return (
    <div className={getClassNames(props)} style={props.style}>
      {
        (background || icon) &&
        <CardHeader background={background} icon={icon}/>
      } 

      <CardBody title={title}>
        {body || children}
      </CardBody>

      {footer}
    </div>
  );
}

export default Card;