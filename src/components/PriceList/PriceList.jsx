import { data } from 'autoprefixer';
import React, { useEffect, useState } from 'react';
import PriceCard from '../PriceCard/PriceCard';

const PriceList = () => {
  const [prices, setPrices] = useState([]);
  useEffect(()=>{
    fetch('prices.json')
    .then(res => res.json())
    .then(data => setPrices(data))
  },[])
  return (
    <>
      <h2 className='text-5xl text-center w-[88%] mx-auto my-3 rounded text-purple-950 bg-purple-300 font-bold p-4'>Awesome Affordable Price</h2>
      <div className='grid md:grid-cols-3 gap-3 px-12 my-5'>
      {
        prices.map(price => <PriceCard key={price.id} price = {price} />)
      }
      </div>
    </>
  );
};

export default PriceList;