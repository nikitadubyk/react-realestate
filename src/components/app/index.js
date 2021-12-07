import React from 'react';
import Header from '../header/header';
import CitySelection from '../city-selection/citySelection';
import PremiumAds from '../premium-ads/premiumAds';
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
