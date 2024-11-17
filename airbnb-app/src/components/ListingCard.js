import React from 'react';
import { Link } from 'react-router-dom';

const ListingCard = ({ listing }) => {
    return (
        <div
            style={{
                border: '1px solid #ddd',
                borderRadius: '10px',
                padding: '15px',
                width: '300px',
                textAlign: 'center',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                margin: '10px',
            }}
        >
            {/* Display Listing Image */}
            <img
                src={listing.images[0]}
                alt={listing.title}
                style={{
                    width: '100%',
                    borderRadius: '10px',
                    height: '200px',
                    objectFit: 'cover',
                }}
            />
            
            {/* Listing Details */}
            <h3 style={{ margin: '10px 0', fontSize: '18px', color: '#333' }}>
                {listing.title}
            </h3>
            <p style={{ margin: '5px 0', fontSize: '14px', color: '#666' }}>
                {listing.type}
            </p>
            <p style={{ margin: '5px 0', fontSize: '16px', color: '#000' }}>
                ${listing.pricePerNight}/night
            </p>
            
            {/* Link to Listing Details Page */}
            <Link
                to={`/listings/${listing.id}`}
                style={{
                    display: 'inline-block',
                    marginTop: '10px',
                    padding: '10px 15px',
                    backgroundColor: '#007BFF',
                    color: '#fff',
                    textDecoration: 'none',
                    borderRadius: '5px',
                }}
            >
                View Details
            </Link>
        </div>
    );
};

export default ListingCard;
