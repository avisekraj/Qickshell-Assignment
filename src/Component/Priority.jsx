// src/CardList.js
import React, { useState, useEffect } from 'react';
import Card from './Cards';
import Header from './Header';
import './CardList.css'

const Priority = () => {
    const [data, setData] = useState(null);

    useEffect(() => {
        // Fetch data from the API
        fetch(/*------------API-------------------*/)
            .then((response) => response.json())
            .then((responseData) => setData(responseData))
            .catch((error) => console.error('Error fetching data:', error));
    }, []);

    if (!data) {
        return <div>Loading...</div>;
    }

    // Group tickets by status
    const groupedTickets = data.tickets.reduce((grouped, ticket) => {
        const priorityLabel = getPriorityLabel(ticket.priority);
        if (!grouped[priorityLabel]) {
            grouped[priorityLabel] = [];
        }
        grouped[priorityLabel].push(ticket);
        return grouped;
    }, {});

    return (
        <>
            <Header />
            <div className="card-list">
                {Object.keys(groupedTickets).map((priorityLabel) => (
                    <div key={priorityLabel} className="priority-column">
                        <div className='priority'>
                            <div>{priorityLabel}<span className='count'>{`  ${groupedTickets[priorityLabel].length}`}</span></div>
                            
                            <div className='options'>
                                <div className='option1'>+</div>
                                <div className='option2'>...</div>
                            </div>
                        </div>
                        <div className="cards">
                            {groupedTickets[priorityLabel].map((ticket) => (
                                <Card key={ticket.id} ticket={ticket} />
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};

// Function to get priority label based on priority value
const getPriorityLabel = (priority) => {
    switch (priority) {
        case 0:
            return 'No Priority';
        case 1:
            return 'Low';
        case 2:
            return 'Medium';
        case 3:
            return 'High';
        case 4:
            return 'Urgent';
        default:
            return 'Unknown';
    }
};

export default Priority;
