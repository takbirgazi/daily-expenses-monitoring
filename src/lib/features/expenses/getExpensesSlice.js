const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

const initialState = {
    expenses: [],
    isLoading: false,
    isError: false,
    error: null
}

export const getExpenses = createAsyncThunk("expenses/getExpenses", async (email) => {
    const users = await fetch(`api/expenses?email=${encodeURIComponent(email)}`)
    const result = users.json();
    return result;
})

const getExpensesSlice = createSlice({
    name: "expenses",
    initialState,
    extraReducers: (builder) => {
        builder.addCase(getExpenses.pending, (state) => {
            state.isError = false,
                state.isLoading = true,
                state.expenses = [],
                state.error = null
        });
        builder.addCase(getExpenses.fulfilled, (state, action) => {
            state.isError = false,
                state.isLoading = false,
                state.expenses = action.payload,
                state.error = null
        });
        builder.addCase(getExpenses.rejected, (state, action) => {
            state.isError = true,
                state.isLoading = false,
                state.expenses = [],
                state.error = action.error?.message
        });
    }
})



export default getExpensesSlice.reducer;