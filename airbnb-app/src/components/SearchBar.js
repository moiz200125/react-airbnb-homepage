import React, { useState } from 'react';
import './SearchBar.css';

const SearchBar = () => {
  const [location, setLocation] = useState('');

  const handleSearch = () => {
    alert(`Searching for: ${location}`);
  };

  return (
    <div className="search-bar">
      <input 
        type="text" 
        placeholder="Where are you going?" 
        value={location} 
        onChange={(e) => setLocation(e.target.value)} 
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchBar;
