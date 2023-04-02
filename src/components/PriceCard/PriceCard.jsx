import React from 'react';
import Feature from '../Feature/Feature';

const PriceCard = ({price}) => {
  return (
    <div className='bg-gradient-to-r from-indigo-500 flex flex-col via-purple-500 to-pink-500 mt-4 rounded-lg p-5'>
      <h2 className='text-center'>
      <span className='text-5xl font-extrabold text-white'>
      {price.price}</span>
      <span className='text-2xl text-yellow-100 font-semibold'>/mon</span>
      </h2>
      <h5 className='text-2xl text-center text-yellow-50 font-bold'>{price.name}</h5>
      <p className='underline font-bold text-white pb-2'>Features: </p>
      {
        price.features.map((feature, idx)=> <Feature 
        key={idx}
        feature = {feature}
        />)
      }
      <button className='w-full hover:bg-green-700 bg-green-500 mt-auto py-2 round-md text-white font-bold'>Buy Now</button>
    </div>
  );
};

export default PriceCard;