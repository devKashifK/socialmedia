import {create} from "zustand";



const user = create((set) => ({
    email : "",
    data : [],
    getEmail : (email) => set({email : email}),
    saveData : (data) => set({data : data})

}))

export default user;

