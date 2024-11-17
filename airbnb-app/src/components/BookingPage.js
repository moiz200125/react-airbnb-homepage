import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const BookingPage = () => {
    const { id } = useParams();
    const [listing, setListing] = useState(null);
    const [bookingDetails, setBookingDetails] = useState({
        checkIn: '',
        checkOut: ''
    });

    useEffect(() => {
        axios.get(`/api/listings/${id}`)
            .then(response => setListing(response.data))
            .catch(error => console.error('Error fetching listing:', error));
    }, [id]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setBookingDetails({ ...bookingDetails, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('/api/bookings', { ...bookingDetails, listingId: id })
            .then(response => alert(response.data.message))
            .catch(error => console.error('Error creating booking:', error));
    };

    if (!listing) return <p>Loading...</p>;

    return (
        <div>
            <h1>Booking for {listing.title}</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Check-in Date:
                    <input type="date" name="checkIn" value={bookingDetails.checkIn} onChange={handleInputChange} required />
                </label>
                <label>
                    Check-out Date:
                    <input type="date" name="checkOut" value={bookingDetails.checkOut} onChange={handleInputChange} required />
                </label>
                <button type="submit">Book Now</button>
            </form>
        </div>
    );
};

export default BookingPage;
