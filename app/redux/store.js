import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice";
import basketReducer from "./slices/basketSlice";
import productReducer from "./slices/productSlice";
import idReducer from "./slices/filterId";
import updateProfile from "./slices/updateProfile";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    basket: basketReducer,
    product: productReducer,
    id: idReducer,
    profile: updateProfile,
  },
});
