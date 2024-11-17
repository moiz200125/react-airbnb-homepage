import React, { useState } from 'react';
import './SearchBar.css'; // Make sure to define styles in this file.

const SearchBar = ({ onSearch }) => {
    const [location, setLocation] = useState('');

    // Handle the change in input field
    const handleInputChange = (event) => {
        const value = event.target.value;
        setLocation(value);

        // If a parent component passed an `onSearch` prop, call it
        if (onSearch) {
            onSearch(value);
        }
    };

    // Handle search button click
    const handleSearch = () => {
        if (!location.trim()) {
            alert('Please enter a location to search!');
            return;
        }
        alert(`Searching for: ${location}`);
    };

    return (
        <div className="search-bar">
            {/* Input field for search */}
            <input
                type="text"
                placeholder="Where are you going?"
                value={location}
                onChange={handleInputChange}
                style={{
                    padding: '10px',
                    width: '70%',
                    borderRadius: '5px',
                    border: '1px solid #ccc',
                    marginRight: '10px',
                }}
            />

            {/* Search button */}
            <button
                onClick={handleSearch}
                style={{
                    padding: '10px 20px',
                    backgroundColor: '#007BFF',
                    color: '#fff',
                    border: 'none',
                    borderRadius: '5px',
                    cursor: 'pointer',
                }}
            >
                Search
            </button>
        </div>
    );
};

export default SearchBar;
