import { Link } from 'react-router-dom';

const ListingCard = ({ listing }) => {
    return (
        <div>
            <h2>{listing.title}</h2>
            <p>{listing.type}</p>
            <Link to={`/listings/${listing.id}`}>View Details</Link>
        </div>
    );
};

const ListingCard = ({ listing }) => {
    return (
        <div
            style={{
                border: '1px solid #ddd',
                borderRadius: '10px',
                padding: '15px',
                width: '300px',
                textAlign: 'center',
            }}
        >
            <img
                src={listing.images[0]}
                alt={listing.title}
                style={{ width: '100%', borderRadius: '10px' }}
            />
            <h3>{listing.title}</h3>
            <p>{listing.type}</p>
            <p>${listing.pricePerNight}/night</p>
            <a href={`/listings/${listing.id}`} style={{ textDecoration: 'none', color: '#007BFF' }}>
                View Details
            </a>
        </div>
    );
};

export default ListingCard;
