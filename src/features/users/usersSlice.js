import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {id: "0", name: "Vlada"},
    {id: "1", name: "Vova"},
    {id: "2", name: "Kassi"},
]

const usersSlice = createSlice({
    name: "users",
    initialState,
    reducers: {
        
    }
})

export const selectAllUsers = (state) => state.users;

export default usersSlice.reducer;