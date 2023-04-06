import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  name: 'filter',
  initialState: { name: '' },
  reducers: {
    searchFilter(state, action) {
      state.name = action.payload;
    },
  },
});

export const { searchFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
