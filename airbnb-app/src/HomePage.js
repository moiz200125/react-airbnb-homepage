import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import SearchBar from './components/SearchBar';
import ListingCard from './components/ListingCard';
import Footer from './components/Footer';
import axios from 'axios';

const HomePage = () => {
    // State for managing listings and search results
    const [listings, setListings] = useState([]);
    const [searchResults, setSearchResults] = useState([]);
    const [isLoading, setIsLoading] = useState(true); // Loading state for better UX
    const [error, setError] = useState(null); // Error state for API issues

    // Fetch listings from the backend API
    useEffect(() => {
        axios
            .get('/api/listings') // Ensure your backend serves this route
            .then((response) => {
                setListings(response.data);
                setSearchResults(response.data); // Initialize search results with all listings
                setIsLoading(false);
            })
            .catch((error) => {
                console.error('Error fetching listings:', error);
                setError('Failed to fetch listings. Please try again later.');
                setIsLoading(false);
            });
    }, []);

    // Search handler to filter listings based on user query
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
            <div style={{ margin: '20px auto', textAlign: 'center', padding: '0 20px' }}>
                <SearchBar onSearch={handleSearch} />
            </div>

            {/* Listings Section */}
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    padding: '20px',
                    minHeight: '60vh', // Ensures the page isn't too short
                }}
            >
                {isLoading ? (
                    // Show a loading message while fetching data
                    <p>Loading listings...</p>
                ) : error ? (
                    // Show error message if there's an issue fetching data
                    <p style={{ color: 'red' }}>{error}</p>
                ) : searchResults.length > 0 ? (
                    // Render filtered listings
                    <div
                        style={{
                            display: 'flex',
                            flexWrap: 'wrap',
                            justifyContent: 'center',
                            gap: '20px',
                            width: '100%',
                            maxWidth: '1200px',
                        }}
                    >
                        {searchResults.map((listing) => (
                            <ListingCard key={listing.id} listing={listing} />
                        ))}
                    </div>
                ) : (
                    // Show a "no results" message when search yields no matches
                    <p>No listings found. Try a different search.</p>
                )}
            </div>

            {/* Footer */}
            <Footer />
        </div>
    );
};

export default HomePage;
