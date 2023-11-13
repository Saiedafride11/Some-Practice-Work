import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  aadTransactions,
  deleteTransactions,
  editTransactions,
  getTransactions,
} from "./transactionAPI";

const initialState = {
  transactions: [],
  isLoading: false,
  isError: false,
  error: "",
  editing: {},
};

export const getFetchTransactions = createAsyncThunk(
  "transaction/getFetchTransactions",
  async () => {
    const transactions = await getTransactions();
    return transactions;
  }
);
export const addFetchTransactions = createAsyncThunk(
  "transaction/addFetchTransactions",
  async (data) => {
    const transactions = await aadTransactions(data);
    return transactions;
  }
);
export const editFetchTransactions = createAsyncThunk(
  "transaction/editFetchTransactions",
  async ({ id, data }) => {
    const transactions = await editTransactions(id, data);
    return transactions;
  }
);
export const deleteFetchTransactions = createAsyncThunk(
  "transaction/deleteFetchTransactions",
  async (id) => {
    const transactions = await deleteTransactions(id);
    return transactions;
  }
);

export const transactionsSlice = createSlice({
  name: "transactions",
  initialState,
  reducers: {
    editActive: (state, action) => {
      state.editing = action.payload;
    },
    editInActive: (state) => {
      state.editing = {};
    },
  },
  extraReducers: (builder) => {
    builder
      // get
      .addCase(getFetchTransactions.pending, (state) => {
        state.isError = false;
        state.isLoading = true;
      })
      .addCase(getFetchTransactions.fulfilled, (state, action) => {
        state.isError = false;
        state.isLoading = false;
        state.transactions = action.payload;
      })
      .addCase(getFetchTransactions.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.error?.message;
        state.transactions = [];
      })
      // add
      .addCase(addFetchTransactions.pending, (state) => {
        state.isError = false;
        state.isLoading = true;
      })
      .addCase(addFetchTransactions.fulfilled, (state, action) => {
        state.isError = false;
        state.isLoading = false;
        state.transactions.push(action.payload);
      })
      .addCase(addFetchTransactions.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.error?.message;
      })
      // update
      .addCase(editFetchTransactions.pending, (state) => {
        state.isError = false;
        state.isLoading = true;
      })
      .addCase(editFetchTransactions.fulfilled, (state, action) => {
        state.isError = false;
        state.isLoading = false;
        const indexToUpdate = state.transactions.findIndex(
          (t) => t.id === action.payload.id
        );
        state.transactions.push[indexToUpdate] = action.payload;
      })
      .addCase(editFetchTransactions.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.error?.message;
      })
      // delete
      .addCase(deleteFetchTransactions.pending, (state) => {
        state.isError = false;
        state.isLoading = true;
      })
      .addCase(deleteFetchTransactions.fulfilled, (state, action) => {
        state.isError = false;
        state.isLoading = false;
        state.transactions = state.transactions.filter(
          // (t) => t.id !== action.payload
          (t) => t.id !== action.meta.arg
        );
      })
      .addCase(deleteFetchTransactions.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.error?.message;
      });
  },
});

export default transactionsSlice.reducer;
export const { editActive, editInActive } = transactionsSlice.actions;
