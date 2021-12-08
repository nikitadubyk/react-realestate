import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from '../../pages/HomePage';
import ApartamentByCityPage from '../../pages/ApartamentByCityPage';
import './App.css';

function App() {
    return (
        <BrowserRouter>
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
            </Routes>
        </BrowserRouter>
    );
}

export default App;
