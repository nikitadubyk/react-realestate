import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from '../../pages/HomePage';
import ApartamentByCityPage from '../../pages/ApartamentByCityPage';
import ApartamentInfoPage from '../../pages/ApartamentInfoPage';
import AboutUsPage from '../../pages/about-us/AboutUsPage';
import './App.css';

function App() {
    return (
        <Router>
            <Routes>
                <Route exact path='/' element={<HomePage />} />
                <Route
                    exact
                    path='/gorlovka'
                    element={<ApartamentByCityPage />}
                />
                <Route
                    exact
                    path='/donetsk'
                    element={<ApartamentByCityPage />}
                />
                <Route
                    exact
                    path='/makeevka'
                    element={<ApartamentByCityPage />}
                />
                <Route
                    exact
                    path='/apartament/:id'
                    element={<ApartamentInfoPage />}
                />
                <Route exact path='/about-us' element={<AboutUsPage />} />
            </Routes>
        </Router>
    );
}

export default App;
