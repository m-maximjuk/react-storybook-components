import React from 'react';

const setBackground = (background) => {
  return (background)
    ? {
        style: {
          background: `url(${background}) center center`,
          backgroundSize: 'cover',
        },
      }
    : {}
};

const Card = ({ background, icon }) => {
  return (
    <header
      className="card__header"
      {...setBackground(background)}
    >
      {icon && <i className={`fa fa-${icon}`}></i>}
    </header>
  );
}

export default Card;