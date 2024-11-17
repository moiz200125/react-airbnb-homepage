import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

const BookingPage = () => {
    const { id } = useParams(); // Fetch the listing ID
    const [formData, setFormData] = useState({
        checkIn: '',
        checkOut: '',
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Booking Details:', formData);
        alert('Booking confirmed (mock)!');
    };

    return (
        <div>
            <h1>Booking Page for Listing ID: {id}</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Check-In Date: </label>
                    <input
                        type="date"
                        name="checkIn"
                        value={formData.checkIn}
                        onChange={handleInputChange}
                    />
                </div>
                <div>
                    <label>Check-Out Date: </label>
                    <input
                        type="date"
                        name="checkOut"
                        value={formData.checkOut}
                        onChange={handleInputChange}
                    />
                </div>
                <button type="submit">Confirm Booking</button>
            </form>
        </div>
    );
};

export default BookingPage;
