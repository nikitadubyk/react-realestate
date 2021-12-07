import React from 'react';
import Header from '../header/Header';
import CitySelection from '../city-selection/CitySelection';
import PremiumAds from '../premium-ads/PremiumAds';
import './App.css';

function App() {
    return (
        <>
            <Header />
            <CitySelection />
            <PremiumAds />
        </>
    );
}

export default App;
