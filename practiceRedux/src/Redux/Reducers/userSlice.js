import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
  },
  reducers: {
    login: (state, payload) => {
      state.user = payload;
      localStorage.setItem("user", JSON.stringify(payload.payload));
    },
    logout: (state) => {
      state.user = null;
      localStorage.removeItem("user");
    },
  },
});

export const { login, logout } = userSlice.actions;
export const selectUser = (state) => state.user.user;
export default userSlice.reducer;
