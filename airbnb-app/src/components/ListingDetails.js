import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';

const ListingDetails = () => {
    const { id } = useParams();
    const [listing, setListing] = useState(null);

    useEffect(() => {
        axios.get(`/api/listings/${id}`)
            .then(response => setListing(response.data))
            .catch(error => console.error('Error fetching listing:', error));
    }, [id]);

    if (!listing) return <p>Loading...</p>;

    return (
        <div>
            <h1>{listing.title}</h1>
            <p>{listing.type}</p>
            <p>Amenities: {listing.amenities.join(', ')}</p>
            <p>Guests: {listing.guests}</p>
            <p>Bedrooms: {listing.bedrooms}</p>
            <p>Bathrooms: {listing.bathrooms}</p>
            <p>Price per night: ${listing.pricePerNight}</p>
            <Link to={`/book/${listing.id}`}>Book Now</Link>
        </div>
    );
};

export default ListingDetails;
