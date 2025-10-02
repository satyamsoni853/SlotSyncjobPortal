import { configureStore } from "@reduxjs/toolkit";
import UserReducer from "./Components/Slices/UserSlice";

export default configureStore({
  reducer: {
      user: UserReducer,
  },
});
