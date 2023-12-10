// src/Card.js
import React from 'react';
import './Cards.css'
const Card = ({ ticket }) => (
  <div className="card">
    <div className='headerId'>
      <div className='idName'>{ticket.id}</div>
      <div className='profilePic'>{ticket.userId}</div>
    </div>
    <p></p>
    <p className='title'>{ticket.title}</p>
    <p className='tag'><div className='solidCircle'></div><div>{ticket.tag}</div></p>
  </div>
);

export default Card;
