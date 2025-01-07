const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

const initialState = {
    expenses: [],
    isLoading: false,
    isError: false,
    error: null
}

export const postExpenses = createAsyncThunk("expenses/postExpenses", async (data) => {
    const posted = await fetch('/api/expenses', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
    const result = posted.json();
    return result;
})

const expenses = createSlice({
    name: "expenses",
    initialState,
    extraReducers: (builder) => {
        builder.addCase(postExpenses.pending, (state) => {
            state.isError = false,
                state.isLoading = true,
                state.expenses = [],
                state.error = null
        });
        builder.addCase(postExpenses.fulfilled, (state, action) => {
            state.isError = false,
                state.isLoading = false,
                state.expenses = action.payload,
                state.error = null
        });
        builder.addCase(postExpenses.rejected, (state, action) => {
            state.isError = true,
                state.isLoading = false,
                state.expenses = [],
                state.error = action.error?.message
        });
    }

})

export default expenses.reducer;