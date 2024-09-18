import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currentUser: null,
  loading: false,
  error: null,
};

export const bookingUserSlice = createSlice({
  name: 'booknowuser',
  initialState,
  reducers: {
    signInStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    signInSuccess: (state, action) => {
      state.currentUser = action.payload;
      state.loading = false;
      state.error = null;
    },
    signInFailure: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
    signOutSuccess: (state) => {
      (state.currentUser = null), (state.loading = false), (state.error = null);
    },
  },
});

export const { signInStart, signInFailure, signInSuccess, signOutSuccess } =
  bookingUserSlice.actions;
export default bookingUserSlice.reducer;
