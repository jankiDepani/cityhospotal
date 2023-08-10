import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    count: 0
}

export const CounterSlice = createSlice({
    name:'counter',
    initialState,
    reducers: {
        increment: (state, action) => {
            state.count += 1;
        },
        dcrement: (state, action) => {
            state.count -= 1;
        }
    }
})

export const {increment, dcrement } = CounterSlice.actions;

export default CounterSlice.reducer;