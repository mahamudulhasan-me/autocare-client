import { createSlice } from "@reduxjs/toolkit";

const InitialFilterState = {
  category: "",
  sort: "",
  search: "",
};

const filterSlice = createSlice({
  name: "filter",
  initialState: InitialFilterState,
  reducers: {
    setCategory: (state, action) => {
      if (state.category === action.payload) {
        state.category = ""; // Deselect if the same category is clicked
      } else {
        state.category = action.payload; // Select the new category
      }
    },

    setSort: (state, action) => {
      if (state.sort === action.payload) {
        state.sort = ""; // Deselect if the same sort is clicked
      } else {
        state.sort = action.payload; // Select the new sort
      }
    },
    setSearch: (state, action) => {
      state.search = action.payload;
    },

    resetFilter: () => InitialFilterState,
  },
});
export const filterReducer = filterSlice.reducer;

export const { setCategory, setSort, setSearch, resetFilter } =
  filterSlice.actions;
