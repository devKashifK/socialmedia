import { createSlice } from "@reduxjs/toolkit";


const userData = createSlice({
    name : "userData",
    initialState : {
       data : []
    },
    reducers : {
       saveData : (state , action) => {
        state.data = action.payload
       }
    }
})

export default userData;
export const dataAction = userData.actions;