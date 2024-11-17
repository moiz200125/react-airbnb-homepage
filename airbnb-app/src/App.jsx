import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ListingDetails from './components/ListingDetails';
import BookingPage from './components/BookingPage';
import HomePage from './components/HomePage';

const App = () => {
    return (
        <Router>
            <Switch>
                <Route path="/" exact component={HomePage} />
                <Route path="/listings/:id" component={ListingDetails} />
                <Route path="/book/:id" component={BookingPage} />
            </Switch>
        </Router>
    );
};

export default App;








import React from 'react';
import Navbar from './components/Navbar';
import SearchBar from './components/SearchBar';
import './App.css'; 
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <SearchBar />
      <Footer/>
    </div>
  );
}

export default App;
