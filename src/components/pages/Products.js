import React from 'react';
import '../../App.css';
import Cards from '../Cards/Cards.js';


function Products() {
  return (
    <>

      <h1 className='products'>
        <img src='images/sticker.png' alt='sticker-flag' />
        Store Front
        <i class="fas fa-arrow-down" />
      </h1>;
      <Cards />

    </>
  );
}

export default Products;

