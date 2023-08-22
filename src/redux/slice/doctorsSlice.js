import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { GetDoctorData } from "../../common/apis/Doctors.api"

const initialState ={
    Loading: false,
    doctors: [],
    error: null
}

export const getdoctor = createAsyncThunk(
    'Doctor/getdoctor',
    async () =>  {
        const response = await GetDoctorData();
        
        return response.data;
    }
)

export const doctorsSlice = createSlice ({
    name: 'doctors',
    initialState,
    reducers : {},
    extraReducers : (builder) =>  {
        builder.addCase(getdoctor.fulfilled, (state, action) => {
            state.doctors = action.payload;
            state.Loading = false;
            state.error = null
        })
    }
})

// export const {increment, dcrement } = CounterSlice.actions;

export default doctorsSlice.reducer;