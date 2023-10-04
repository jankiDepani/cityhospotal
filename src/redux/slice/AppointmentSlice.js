import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { collection, addDoc, getDocs } from "firebase/firestore";
import { db } from "../../firebase";

const initialState = {
    Loading: false,
    apt: [],
    error: null
}

export const getapt = createAsyncThunk(
    'Apt/Getapt',
    async () => {
        try {
            let data = [];
            const querySnapshot = await getDocs(collection(db, "apt"));
            querySnapshot.forEach((doc) => {
                // console.log({ id: doc.id, ...doc.data() });
                data.push({ id: doc.id, ...doc.data() });
            });

            // console.log(data);   
            return data
        } catch (e) {
            console.error("Error adding document: ", e);
        }

    }
)

export const Addapt = createAsyncThunk(
    'Apt/Addapt',
    async (data) => {
        try {
            const docRef = await addDoc(collection(db, "apt"), data);
            console.log("Document written with ID: ", docRef.id);

            return { id: docRef.id, ...data };
        } catch (e) {
            console.error("Error adding document: ", e);
        }
    }
)

// export const updateapt = createAsyncThunk(
//     // 'Doctor/updatedoctor',
//     // async (data) => {
//     //     const response = await UpdateDotorcData(data);

//     //     return response.data;
//     // }
// )

export const updateapt = createAsyncThunk(
    'Apt/Updateapt',
    async ({ id, updatedData }) => {
        try {
            console.log('Updating document with ID:', id);
            // Implement your update logic here.
            // ...
            console.log('Update successful');
            return { id, ...updatedData };
        } catch (e) {
            console.error("Error updating document: ", e);
            throw e;
        }
    }
);


// export const deleteapt = createAsyncThunk(
//     // 'Doctor/deletedoctor',
//     // async (id) => {
//     //     await DeleteDoctorData(id);

//     //     return id;
//     // }
// )
export const deleteapt = createAsyncThunk(
    'Apt/Deleteapt',
    async (id) => {
        try {
            console.log('Deleting document with ID:', id);
            // Implement your delete logic here.
            // ...
            console.log('Delete successful');
            return id;
        } catch (e) {
            console.error("Error deleting document: ", e);
            throw e;
        }
    }
);

const handleLoding = (state) => {
    state.Loading = true;
    state.error = null;
}

const handleerror = (state, action) => {
    state.Loading = false;
    state.error = action.error.message;
}

// export const aptSlice = createSlice({
//     name: 'apt',
//     initialState,
//     reducers: {},
//     extraReducers: (builder) => {
//         builder
//         .addCase(getapt.pending, handleLoding)
//         .addCase(getapt.fulfilled, (state, action) => {
//             state.apt = action.payload;
//             state.Loading = false;
//             state.error = null
//         })
//         .addCase(getapt.rejected, handleerror)
//         .addCase(Addapt.pending, handleLoding)
//         .addCase(Addapt.fulfilled, (state, action) => {
//             state.apt = state.apt.concat(action.payload);
//             state.Loading = false;
//             state.error = null
//         })
//         .addCase(Addapt.pending, handleerror);

//         // builder.addCase(updateapt.fulfilled, (state, action) => {
//         //     state.apt = state.apt.map((v) => {
//         //         if (v.id == action.payload.id) {
//         //             return action.payload;
//         //         } else {
//         //             return v;
//         //         }
//         //     });
//         //     state.Loading = false;
//         //     state.error = null
//         // });

//         // builder.addCase(deleteapt.fulfilled, (state, action) => {
//         //     state.apt = state.apt.filter((v) => v.id !== action.payload);
//         //     state.Loading = false;
//         //     state.error = null
//         // })
//     }
// })

export const aptSlice = createSlice({
    name: 'apt',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getapt.pending, handleLoding)
            .addCase(getapt.fulfilled, (state, action) => {
                state.apt = action.payload;
                state.Loading = false;
                state.error = null;
            })
            .addCase(getapt.rejected, handleerror)
            .addCase(Addapt.pending, handleLoding)
            .addCase(Addapt.fulfilled, (state, action) => {
                state.apt = state.apt.concat(action.payload);
                state.Loading = false;
                state.error = null;
            })
            .addCase(Addapt.rejected, handleerror)
            // .addCase(updateapt.fulfilled, (state, action) => {
            //     state.apt = state.apt.map((v) => {
            //         if (v.id === action.payload.id) {
            //             return action.payload;
            //         } else {
            //             return v;
            //         }
            //     });
            //     state.Loading = false;
            //     state.error = null;
            // })
            // .addCase(deleteapt.fulfilled, (state, action) => {
            //     state.apt = state.apt.filter((v) => v.id !== action.payload);
            //     state.Loading = false;
            //     state.error = null;
            // });
    },
});

// export const {increment, dcrement } = CounterSlice.actions;

export default aptSlice.reducer;