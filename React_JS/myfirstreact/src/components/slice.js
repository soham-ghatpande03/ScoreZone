import { createSlice } from "@reduxjs/toolkit";

export const loggedSlice = createSlice({
    name :"logged",
    initialState :
    {
        loggedin : false
    },
    reducers :{
        login :(state)=>{console.log("logoin") ; return {loggedin:true}},
        logout:(state)=>{console.log("logout") ; return {loggedin:false}},

    }
})
export const {login,logout}= loggedSlice.actions
export default loggedSlice.reducer