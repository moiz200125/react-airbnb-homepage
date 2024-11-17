const express = require("express");
const bodyParser = require('body-parser');
const cors = require('cors');


const app = express();
const port = 3001;

app.use(bodyParser.json());
app.use(cors());   //Middleware

// Static data for property listings
const listings = [
    {
        id: 1,
        title: 'Cozy Cottage',
        type: 'Cottage',
        amenities: ['Wifi', 'Kitchen', 'Parking'],
        guests: 4,
        bedrooms: 2,
        bathrooms: 1,
        pricePerNight: 100,
        images: ['image1.jpg', 'image2.jpg']
    },
    // Add more listings here
];

// API Endpoints
app.get('/api/listings', (req, res) => {
    res.json(listings);
});

app.get('/api/listings/:id', (req, res) => {
    const listing = listings.find(l => l.id === parseInt(req.params.id));
    if (listing) {
        res.json(listing);
    } else {
        res.status(404).send('Listing not found');
    }
});

app.get('/api/listings/search', (req, res) => {
    const query = req.query.query.toLowerCase();
    const filteredListings = listings.filter(listing => listing.title.toLowerCase().includes(query));
    res.json(filteredListings);
});

app.post('/api/bookings', (req, res) => {
    // Mock booking endpoint
    const booking = req.body;
    res.status(201).json({ message: 'Booking successful', booking });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
