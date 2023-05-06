import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    token: null,
    user: null
  },
  reducers: {
    login: (state) => {
        state.token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c";
        state.user = "643f9f04dcba0b276b55ce6f";
    },
    logout: (state) => {
        state.token= null;
        state.user= null;
    }
  },
});

export const { login,logout } = authSlice.actions;

export default authSlice.reducer;
