const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

const initialState = {
    expenses: [],
    isLoading: false,
    isError: false,
    error: null
}

export const getExpensesLimit = createAsyncThunk("expensesLimit/getExpensesLimit", async (email) => {
    const posted = await fetch(`/api/expenses_limit?email=${encodeURIComponent(email)}`)
    const result = posted.json();
    return result;
})

const getExpensesLimitSlice = createSlice({
    name: "expensesLimit",
    initialState,
    extraReducers: (builder) => {
        builder.addCase(getExpensesLimit.pending, (state) => {
            state.isError = false,
                state.isLoading = true,
                state.expenses = [],
                state.error = null
        });
        builder.addCase(getExpensesLimit.fulfilled, (state, action) => {
            state.isError = false,
                state.isLoading = false,
                state.expenses = action.payload,
                state.error = null
        });
        builder.addCase(getExpensesLimit.rejected, (state, action) => {
            state.isError = true,
                state.isLoading = false,
                state.expenses = [],
                state.error = action.error?.message
        });
    }

})

export default getExpensesLimitSlice.reducer;