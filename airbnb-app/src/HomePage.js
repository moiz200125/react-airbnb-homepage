import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import SearchBar from './components/SearchBar';
import ListingCard from './components/ListingCard';
import Footer from './components/Footer'; // Assuming Footer component is in the same folder
import axios from 'axios';

const HomePage = () => {
    // State for listings and search results
    const [listings, setListings] = useState([]);
    const [searchResults, setSearchResults] = useState([]);

    // Fetch listings when the component mounts
    useEffect(() => {
        axios
            .get('/api/listings') // Adjust the API URL as per your setup
            .then((response) => {
                setListings(response.data);
                setSearchResults(response.data); // Initialize search results with all listings
            })
            .catch((error) => {
                console.error('Error fetching listings:', error);
            });
    }, []);

    // Handle search functionality
    const handleSearch = (query) => {
        const filteredListings = listings.filter((listing) =>
            listing.title.toLowerCase().includes(query.toLowerCase())
        );
        setSearchResults(filteredListings);
    };

    return (
        <div>
            {/* Navbar */}
            <Navbar />

            {/* Search Bar */}
            <div style={{ margin: '20px auto', textAlign: 'center' }}>
                <SearchBar onSearch={handleSearch} />
            </div>

            {/* Listings */}
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '20px', padding: '20px' }}>
                {searchResults.length > 0 ? (
                    searchResults.map((listing) => (
                        <ListingCard key={listing.id} listing={listing} />
                    ))
                ) : (
                    <p>No results found</p>
                )}
            </div>

            {/* Footer */}
            <Footer />
        </div>
    );
};

export default HomePage;
