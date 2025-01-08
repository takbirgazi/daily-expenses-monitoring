const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

const initialState = {
    expenses: [],
    isLoading: false,
    isError: false,
    error: null
}

export const postExpensesLimit = createAsyncThunk("expensesLimit/postExpensesLimit", async (data) => {
    const posted = await fetch('/api/expenses_limit', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
    const result = posted.json();
    return result;
})

const postExpensesLimitSlice = createSlice({
    name: "expensesLimit",
    initialState,
    extraReducers: (builder) => {
        builder.addCase(postExpensesLimit.pending, (state) => {
            state.isError = false,
                state.isLoading = true,
                state.expenses = [],
                state.error = null
        });
        builder.addCase(postExpensesLimit.fulfilled, (state, action) => {
            state.isError = false,
                state.isLoading = false,
                state.expenses = action.payload,
                state.error = null
        });
        builder.addCase(postExpensesLimit.rejected, (state, action) => {
            state.isError = true,
                state.isLoading = false,
                state.expenses = [],
                state.error = action.error?.message
        });
    }

})

export default postExpensesLimitSlice.reducer;