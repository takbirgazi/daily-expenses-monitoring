const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

const initialState = {
    users: [],
    isLoading: false,
    isError: false,
    error: null
}

export const getUsers = createAsyncThunk("users/getUsers", async () => {
    const users = await fetch("api/users")
    const result = users.json();
    return result;
})

const addUser = createSlice({
    name: "users",
    initialState,
    extraReducers: (builder) => {
        builder.addCase(getUsers.pending, (state) => {
            state.isError = false,
                state.isLoading = true,
                state.users = [],
                state.error = null
        });
        builder.addCase(getUsers.fulfilled, (state, action) => {
            state.isError = false,
                state.isLoading = false,
                state.users = action.payload,
                state.error = null
        });
        builder.addCase(getUsers.rejected, (state, action) => {
            state.isError = true,
                state.isLoading = false,
                state.users = [],
                state.error = action.error?.message
        });
    }
})



export default addUser.reducer;