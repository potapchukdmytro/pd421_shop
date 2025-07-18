import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "./authReducer/authReducer";
import { cartReducer } from "./cartReducer/cartReducer";

export const rootReducer = combineReducers({
    auth: authReducer,
    cart: cartReducer
});