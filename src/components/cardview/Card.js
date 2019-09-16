import React from 'react';

import './style.css';

const Card = ({ monster }) => (
  <div className='card-container'>
    <img alt='user' src={`https://robohash.org/${monster.id}?set=set2&size=180x180`} />
    <h2> {monster.name} </h2>
    <p> {monster.email} </p>
  </div>
);

export default Card;
