import {configureStore} from "@reduxjs/toolkit";
import login from "./login";
import userData from "./userData";


const store = configureStore({
    reducer : {
        login : login.reducer,
        data : userData.reducer,
    }
})

export default store;