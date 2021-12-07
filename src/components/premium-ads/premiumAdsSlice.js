import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    apartaments: [],
    apartamentLoadingStatus: 'idle',
};

const premiumAdsSlice = createSlice({
    name: 'apartaments',
    initialState,
    reducers: {
        apartamentsFetching: state => {
            state.apartamentLoadingStatus = 'loading';
        },
        apartamentsFetched: (state, action) => {
            state.apartamentLoadingStatus = 'idle';
            state.apartaments = action.payload;
        },
        apartamentsFetchingError: state => {
            state.apartamentLoadingStatus = 'error';
        },
    },
});

export const {
    apartamentsFetching,
    apartamentsFetched,
    apartamentsFetchingError,
} = premiumAdsSlice.actions;
export default premiumAdsSlice.reducer;
