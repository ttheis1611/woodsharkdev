import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out these Products!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/hats.jpg'
              text='Get a hat to cover that head'
              label='Hat'
              path='/products'
            />
            <CardItem
              src='images/shirts.jpg'
              text='Get a shirt to go with the hat'
              label='shirts'
              path='/products'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/shelves.jpg'
              text='Other items are great too'
              label='Mystery'
              path='/products'
            />
            <CardItem
              src='images/register.jpg'
              text='Checkout with confidence'
              label='register'
              path='/products'
            />
            <CardItem
              src='images/storeFront.jpg'
              text='Sign Up for get latest changes'
              label='store'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
