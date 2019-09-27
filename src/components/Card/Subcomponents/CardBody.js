import React from 'react';

const CardBody = props => {
  const { title, children } = props;

  return (
    <div className="card__body">
      {
        title &&
        <h3 className={`card__title ${!children && 'card__title--centered'}`}>
          {title}
        </h3>
      }

      {
        children &&
        <div className={`card__content ${!title && 'card__content--margin-less'}`}>
          {children}
        </div>
      }
    </div>
  );
}

export default CardBody;