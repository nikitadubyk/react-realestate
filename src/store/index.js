import { configureStore } from '@reduxjs/toolkit';
import premiumAdsSlice from '../components/premium-ads/premiumAdsSlice';

const store = configureStore({
    reducer: { premiumAdsSlice },
    devTools: process.env.NODE_ENV !== 'production',
});

export default store;
