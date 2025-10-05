import { getItem, setItem, removeItem } from "../Service/LocalStorageService"; 
import { createSlice } from "@reduxjs/toolkit";

const UserSlice = createSlice({
  name: 'user',
  initialState: getItem('user') || null,
  reducers: {
    setUser: (state, action) => {
      console.log('Setting user data in Redux store:', action.payload);
      setItem('user', action.payload);
      return action.payload;
    },
    removeUser: (state) => {
      removeItem('user');
      console.log('User data removed from Redux store.');
      state= null;
    }
  },
  
});

export const { setUser, removeUser } = UserSlice.actions;
export default UserSlice.reducer;