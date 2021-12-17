import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
    apartaments: [],
    topAdsApartaments: [],
    apartamentLoadingStatus: 'idle',
};

export const fetchApartaments = createAsyncThunk(
    'apartaments/fetchApartaments',
    async () => {
        const response = await axios.get('http://localhost:3001/apartaments');
        return response.data;
    }
);

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
            state.topAdsApartaments = action.payload.filter(
                item => item.topAds
            );
        },
        apartamentsFetchingError: state => {
            state.apartamentLoadingStatus = 'error';
        },
    },
    extraReducers: builder => {
        builder
            .addCase(fetchApartaments.pending, state => {
                state.apartamentLoadingStatus = 'loading';
            })
            .addCase(fetchApartaments.fulfilled, (state, action) => {
                state.apartamentLoadingStatus = 'idle';
                state.apartaments = action.payload;
                state.topAdsApartaments = action.payload.filter(
                    item => item.topAds
                );
            })
            .addCase(fetchApartaments.rejected, state => {
                state.apartamentLoadingStatus = 'error';
            })
            .addDefaultCase(() => {});
    },
});

export const {
    apartamentsFetching,
    apartamentsFetched,
    apartamentsFetchingError,
} = premiumAdsSlice.actions;
export default premiumAdsSlice.reducer;
