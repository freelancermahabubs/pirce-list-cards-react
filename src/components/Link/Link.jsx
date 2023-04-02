import React from 'react';

const Link = ({route}) => {

  return (
    <li className='mr-12 hover:bg-lime-500 text-2xl rounded p-2'>
      <a href={route.path}>{route.name}</a>
    </li>
  );
};

export default Link;