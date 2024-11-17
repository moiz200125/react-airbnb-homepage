import React from 'react';
import ListingCard from './ListingCard';

const ListingsGrid = ({ listings }) => {
    return (
        <div
            style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '20px',
                justifyContent: 'center',
            }}
        >
            {listings.map((listing) => (
                <ListingCard key={listing.id} listing={listing} />
            ))}
        </div>
    );
};

export default ListingsGrid;
