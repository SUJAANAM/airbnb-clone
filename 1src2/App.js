import React from 'react';
import './App.css';
import Home from './Home'
import Header from './Header'
import Footer from './Footer'
import SearchPage from './SearchPage'

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (

    // BEM
    <div className="app">
      <Router>
        <Header />
        
        <Routes>
          <Route path="/search">
            <SearchPage />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Routes>
        
        <Footer />
      </ Router>
    </div>
  );
}

export default App;

// import React from 'react'

// function App() {
//   return (
//     <div className="app">
//       <h1>Hey Airbnb</h1>
//     </div>
//   )
// }

// export default App
