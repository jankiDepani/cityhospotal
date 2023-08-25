import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { AddDoctorData, DeleteDoctorData, GetDoctorData, UpdateDotorcData } from "../../common/apis/Doctors.api"

const initialState = {
    Loading: false,
    doctors: [],
    error: null
}

export const getdoctor = createAsyncThunk(
    'Doctor/getdoctor',
    async () => {
        const response = await GetDoctorData();

        return response.data;
    }
)

export const Adddoctor = createAsyncThunk(
    'Doctor/Adddoctor',
    async (data) => {
        const response = await AddDoctorData(data);

        return response.data;
    }
)

export const updatedoctor = createAsyncThunk(
    'Doctor/updatedoctor',
    async (data) => {
        const response = await UpdateDotorcData(data);

        return response.data;
    }
)

export const deletedoctor = createAsyncThunk(
    'Doctor/deletedoctor',
    async (id) => {
        await DeleteDoctorData(id);

        return id;
    }
)

const handleLoding = (state) =>  {
    state.Loading =  true;
    state.error = null;
}

const handleerror = (state, action) => {
    state.Loading = false ;
    state.error = action.error.message;
}

export const doctorsSlice = createSlice({
    name: 'doctors',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getdoctor.pending, handleLoding);
        builder.addCase(getdoctor.fulfilled, (state, action) => {
            state.doctors = action.payload;
            state.Loading = false;
            state.error = null
        });
        builder.addCase(getdoctor.rejected, handleerror);
        builder.addCase(Adddoctor.fulfilled, (state, action) => {
            state.doctors = state.doctors.concat(action.payload);
            state.Loading = false;
            state.error = null
        });
        builder.addCase(updatedoctor.fulfilled, (state, action) => {
            state.doctors = state.doctors.map((v) => {
                if (v.id == action.payload.id) {
                    return action.payload;
                } else {
                    return v;
                }
            });
            state.Loading = false;
            state.error = null
        });
        builder.addCase(deletedoctor.fulfilled, (state, action) => {
            state.doctors = state.doctors.filter((v) => v.id !== action.payload);
            state.Loading = false;
            state.error = null
        })
    }
})

// export const {increment, dcrement } = CounterSlice.actions;

export default doctorsSlice.reducer;