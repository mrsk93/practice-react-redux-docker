import { createSlice } from "@reduxjs/toolkit";

export const bookSlice = createSlice({
  name: "books",
  initialState: [],
  reducers: {
    addNewBook: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.push({
        name: "Hamlet",
        author: "Shakespeare",
        pages: 300,
        publisher: "Oreilly",
        createdAt: Date.now(),
      });
    },
    deleteLastAddedBook: (state) => {
      state.pop();
    },
  },
});

// Action creators are generated for each case reducer function
export const { addNewBook, deleteLastAddedBook } = bookSlice.actions;

export default bookSlice.reducer;
