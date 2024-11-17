import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';
import ListingDetails from './components/ListingDetails'; 
import BookingPage from './components/BookingPage';

const App = () => {
    return (
        <Router>
            <div>
                <Routes>                 
                    <Route path="/" element={<HomePage />} />                          
                    <Route path="/listings/:id" element={<ListingDetails />} />                   
                    <Route path="/book/:id" element={<BookingPage />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
