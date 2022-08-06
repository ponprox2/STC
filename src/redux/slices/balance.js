// import axios from 'src/utils/axios';
import { createSlice } from '@reduxjs/toolkit';

// ----------------------------------------------------------------------

const initialState = {
  isLoading: false,
  error: false,
  balances: []
};

const slice = createSlice({
  name: 'balance',
  initialState,
  reducers: {
    // START LOADING
    startLoading(state) {
      state.isLoading = true;
    },

    // HAS ERROR
    hasError(state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },

    // GET BALANCE
    getBalancesSuccess(state, action) {
      state.isLoading = false;
      state.balances = action.payload;
    }
  }
});

// Reducer
export default slice.reducer;

// Actions
export const { getBalancesSuccess } = slice.actions;

// ----------------------------------------------------------------------
