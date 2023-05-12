import {createSlice} from "@reduxjs/toolkit";


const login = createSlice({
    name : "login",
    initialState : {
        email : ""
    },
    reducers : {
        saveEmail : (state , action) => {
    state.email = action.payload
        }
    }
})

export default login;
export const loginAction = login.actions;