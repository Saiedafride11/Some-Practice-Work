import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getTags } from "./tagsAPI";

const initialState = {
  tags: [],
  isLoading: false,
  isError: false,
  error: "",
};

export const fetchTags = createAsyncThunk("tags/fetchTags", async () => {
  const tags = await getTags();
  return tags?.data;
});

export const tagsSlice = createSlice({
  name: "tags",
  initialState,
  // reducers: {
  //   increment: (state) => {
  //     // Redux Toolkit allows us to write "mutating" logic in reducers. It
  //     // doesn't actually mutate the state because it uses the Immer library,
  //     // which detects changes to a "draft state" and produces a brand new
  //     // immutable state based off those changes
  //     state.value += 1;
  //   },
  //   decrement: (state) => {
  //     state.value -= 1;
  //   },
  //   incrementByAmount: (state, action) => {
  //     state.value += action.payload;
  //   },
  // },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTags.pending, (state) => {
        state.isError = false;
        state.isLoading = true;
      })
      .addCase(fetchTags.fulfilled, (state, action) => {
        state.isLoading = false;
        state.tags = action.payload;
      })
      .addCase(fetchTags.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.error?.message;
        state.tags = [];
      });
  },
});

// Action creators are generated for each case reducer function
// export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export default tagsSlice.reducer;
