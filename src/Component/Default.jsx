// src/CardList.js
import React, { useState, useEffect } from 'react';
import Card from './Cards';
import './CardList.css'
import Header from './Header';
const CardList = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    // Fetch data from the API
    fetch(/* ----------------API------------------ */)
      .then((response) => response.json())
      .then((responseData) => setData(responseData))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  if (!data) {
    return <div>Loading...</div>;
  }

  // Group tickets by status
  const groupedTickets = data.tickets.reduce((grouped, ticket) => {
    const status = ticket.status;
    if (!grouped[status]) {
      grouped[status] = [];
    }
    grouped[status].push(ticket);
    return grouped;
  }, {});
  // Group tickets by status


  return (
    <>
    <Header />
      <div className="card-list">
        {Object.keys(groupedTickets).map((status) => (
          <div key={status} className="status-row">
            <div className='status'>
              <div>{status} <span className='count'>{`  ${groupedTickets[status].length}`}</span></div>
              <div className='options'>
                <div className='option1'>+</div>
                <div className='option2'>...</div>
              </div>
            </div>
            <div className="cards">
              {groupedTickets[status].map((ticket) => (
                <Card key={ticket.id} ticket={ticket} />
              ))}

            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default CardList;
