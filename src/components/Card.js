import React from 'react';
import './Card.css';
import CardItem from './CardItems';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out these EPIC Memories!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='/images/img-9.jpg'
              text='Scribble Day of Class 12'
              label='Adventure'
              path='/services'
            />
            <CardItem
              src='/images/img-2.jpg'
              text='Last Day of Class 10'
              label='Fun'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='/images/img-3.jpg'
              text='Class 10 Batch Reunion'
              label='Explore'
              path='/services'
            />
            <CardItem
              src='/images/img-4.jpg'
              text='Trip to Udaigiri'
              label='Adventure'
              path='/products'
            />
            <CardItem
              src='/images/img-5.jpg'
              text='Last Day of Class 12'
              label='Adrenaline'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;