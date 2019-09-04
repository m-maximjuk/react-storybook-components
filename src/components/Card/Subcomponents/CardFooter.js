import React from 'react';

const CardFooter = ({ style, children }) => {
  return (
    <footer className="card__footer" style={style}>
      {children}
    </footer>
  );
}

export default CardFooter;