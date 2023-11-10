import { createSlice } from "@reduxjs/toolkit";
import { fetchFilterByName, fetchAllAdverts } from "./operations";
import { handlePending, handleReject } from "./handlers";


export const carsSlice = createSlice({
    name: 'cars',
    initialState: {
        data: [],
        isLoading: true,
        error: null
    },
    reducers: {},
    extraReducers: (builder) => 
        builder
        .addCase(fetchAllAdverts.fulfilled, (state, {payload}) => {
            state.data = payload;
            state.isLoading = false;
        })
        .addCase(fetchFilterByName.fulfilled, (state, {payload}) => {
            state.data = payload;
            state.isLoading = false;
        })
        .addMatcher((action) => action.type.endsWith('/pending'), handlePending)
        .addMatcher((action) => action.type.endsWith('/rejected'), handleReject)
});