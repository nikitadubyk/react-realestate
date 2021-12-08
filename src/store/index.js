import { configureStore } from '@reduxjs/toolkit';
import premiumAdsSlice from '../components/premium-ads/premiumAdsSlice';
import cityApartamentSlice from '../components/city-apartament/cityApartamentSlice';

const store = configureStore({
    reducer: { premiumAdsSlice, cityApartamentSlice },
    devTools: process.env.NODE_ENV !== 'production',
});

export default store;
