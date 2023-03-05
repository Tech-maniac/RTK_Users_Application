//Create user Slice :

import { createSlice } from "@reduxjs/toolkit";

import { userData } from "../userData";

export const userSlice = createSlice({
    //name of slice
    name : "users",
    //default value
    initialState : {value : userData},
    reducers :{
        //actions to be performed on your state. (user)
        addUser : (state,action)=>{
            state.value.push(action.payload);
        },
        deleteUser : (state,action)=>{
            state.value = state.value.filter((user)=>user.id!==action.payload.id)
        },
        updateUser:(state,action)=>{
            state.value.map((user)=>{
                if(user.id == action.payload.id)
                {
                    user.username = action.payload.username;
                }
            })
        }
    }
});

//exporting actions : 
export const {addUser,deleteUser,updateUser} = userSlice.actions;

//This is for your store
export default userSlice.reducer;
