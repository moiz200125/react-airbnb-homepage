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
