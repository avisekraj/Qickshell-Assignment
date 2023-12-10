// src/CardList.js
import React, { useState, useEffect } from 'react';
import Card from './Cards';
import './CardList.css'

const User = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    // Fetch data from the API
    fetch('https://api.quicksell.co/v1/internal/frontend-assignment')
      .then((response) => response.json())
      .then((responseData) => setData(responseData))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  if (!data) {
    return <div>Loading...</div>;
  }

  // Group tickets by status
  const groupedUser = data.users.reduce((grouped, user) => {
    const name = user.name;
    if (!grouped[name]) {
      grouped[name] = [];
    }
    grouped[name].push(user);
    return grouped;
  }, {});

  return (
    <div className="card-list">
      {Object.keys(groupedUser).map((name) => (
        <div key={name} className="status-row">
            <div className='status'><h2>{name}</h2></div>
          {/* <div>Abhishek</div> */}
          <div className="cards">
            {groupedUser[name].map((ticket) => (
              <Card key={ticket.id} ticket={ticket} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default User;
