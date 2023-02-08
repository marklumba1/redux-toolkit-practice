import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import userAPI from "../api/userAPI";
const initialState = {
    users: [],
    count: 0
}

export const fetchUsers = createAsyncThunk(
    'user/fetchUser',
    async (path, thunkAPI) => {
        const request = userAPI.get(path).then(res => res.data)
        return request
    }
)


export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        // usersCount: state => {state.count = state.users.length + 1}
    },
    extraReducers: (builder) => {
        builder.addCase(fetchUsers.fulfilled, (state, action) => {
            state.users = action.payload
            state.count = action.payload.length
        })
    }
})

export const {usersCount} = userSlice.actions
export default userSlice.reducer