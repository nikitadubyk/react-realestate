import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    cityName: 'Горловка',
    filteredApartaments: [],
};

const cityApartamentSlice = createSlice({
    name: 'city',
    initialState,
    reducers: {
        changeCityName: (state, action) => {
            state.cityName = action.payload;
        },
    },
});

export const { changeCityName } = cityApartamentSlice.actions;
export default cityApartamentSlice.reducer;
