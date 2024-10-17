import React from 'react';
import Navbar from './components/Navbar';
import SearchBar from './components/SearchBar';
import './App.css'; 
import Counter from './Conter';
import Footer from './components/Footer';

function App() {
  return 
  (
    <div className="App">
      <Navbar />
      <SearchBar />
      <Counter/>
      <Footer/>
    </div>
  );
}

export default App;
