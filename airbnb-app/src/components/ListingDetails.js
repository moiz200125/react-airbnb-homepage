import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const ListingDetails = () => {
    const { id } = useParams(); // Fetch the ID from the URL
    const [listing, setListing] = useState(null);

    useEffect(() => {
        axios
            .get(`/api/listings/${id}`)
            .then((response) => setListing(response.data))
            .catch((error) => console.error('Error fetching listing details:', error));
    }, [id]);

    if (!listing) return <p>Loading...</p>;

    return (
        <div>
            <h1>{listing.title}</h1>
            <img src={listing.images[0]} alt={listing.title} style={{ width: '100%' }} />
            <p>Type: {listing.type}</p>
            <p>Amenities: {listing.amenities.join(', ')}</p>
            <p>Guests: {listing.guests}</p>
            <p>Bedrooms: {listing.bedrooms}</p>
            <p>Bathrooms: {listing.bathrooms}</p>
            <p>Price: ${listing.pricePerNight} per night</p>
            <a href={`/book/${listing.id}`}>Book Now</a>
        </div>
    );
};

export default ListingDetails;
