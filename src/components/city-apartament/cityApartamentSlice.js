import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cityName: "",
    filteredApartaments: [],
    filterByPrice: "default",
};

const cityApartamentSlice = createSlice({
    name: "city",
    initialState,
    reducers: {
        changeCityName: (state, action) => {
            state.cityName = action.payload;
        },
        changeFilterByPrice: (state, action) => {
            state.filterByPrice = action.payload;
        },
    },
});

export const { changeCityName, changeFilterByPrice } =
    cityApartamentSlice.actions;
export default cityApartamentSlice.reducer;
