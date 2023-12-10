import React, { useState } from 'react';
import arrow from '../Images/arrow.png'
import './Header.css'
const Header = () => {
    const [isDisplayDropdownOpen, setDisplayDropdownOpen] = useState(false);
    const [isGroupingDropdownOpen, setGroupingDropdownOpen] = useState(false);
    const [selectedGrouping, setSelectedGrouping] = useState(null);

    const toggleDisplayDropdown = () => {
        setDisplayDropdownOpen(!isDisplayDropdownOpen);
    };

    const toggleGroupingDropdown = () => {
        setGroupingDropdownOpen(!isGroupingDropdownOpen);
    };

    const handleGroupingClick = (grouping) => {
        setSelectedGrouping(grouping);
        // Handle grouping click logic here
        console.log(`${grouping} clicked!`);
    };

    return (
        <div className="header">
            <div className="display-dropdown" onClick={toggleDisplayDropdown}>
                <span>Display <img src={arrow} className='downIcon' alt="" width={'10px'} /></span>
                <i className={`icon ${isDisplayDropdownOpen ? 'open' : ''}`}>{/* Add your icon here */}</i>
            </div>
            {isDisplayDropdownOpen && (

                <div className="grouping-options">
                    <div className='subDrop'>
                        Grouping
                    </div>
                    <div>
                        <select name="grouping"className='dropDown'>
                            <option value=""> --Choose--</option>
                            <option value="priority">
                                Priority
                            </option>
                            <option value="user">
                                User
                            </option>
                        </select>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Header;
