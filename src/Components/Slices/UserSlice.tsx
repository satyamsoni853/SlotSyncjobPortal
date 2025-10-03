import { getItem, setItem, removeItem } from "../Service/LocalStorageService"; 
import { createSlice } from "@reduxjs/toolkit";

const UserSlice = createSlice({
  name: 'user',
  initialState: getItem('user') || null,
  reducers: {
    setUser: (state, action) => {
      setItem('user', action.payload);
      return action.payload;
    },
    removeUser: (state) => {
      removeItem('user');
      state= null;
    }
  },
});

export const { setUser, removeUser } = UserSlice.actions;
export default UserSlice.reducer;