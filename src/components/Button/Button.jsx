import React from 'react';
import './Button.scss';

const Button = ({onLoad}) => {
  return (
    <section className='button__load'>
      <button onClick={onLoad} type='button' className='card__result__button'>
        Load more films
      </button>
    </section>
  );
};

export default Button;
