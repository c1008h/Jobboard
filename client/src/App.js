import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { Homepage } from './pages/Homepage'
import { Navbar } from './components/Navbar'
import { Footer } from './components/Footer'
import {Signup} from './pages/Signup'
import {Login} from './pages/Login'

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <Navbar />
        <Routes>
          <Route
            path='/'
            index element={<Homepage />}
          />
          <Route 
              path="/login" 
              element={<Login />} 
          />
          <Route 
              path="/signup" 
              element={<Signup />} 
          />
        </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
