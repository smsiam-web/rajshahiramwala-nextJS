import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice";
import basketReducer from "./slices/basketSlice";
import productReducer from "./slices/productSlice";
import orderReducer from "./slices/orderSlice";
import idReducer from "./slices/filterId";
import updateProfile from "./slices/updateProfile";
import updateProductImgReducer from "./slices/updateProductImg";
import updateProductId from "./slices/updateProductId";
import singleProduct from "./slices/singleProduct";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    basket: basketReducer,
    product: productReducer,
    orders: orderReducer,
    id: idReducer,
    profile: updateProfile,
    productImg: updateProductImgReducer,
    productId: updateProductId,
    singleProduct,
  },
});
