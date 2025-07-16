import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "./authReducer/authReducer";

export const rootReducer = combineReducers({
    auth: authReducer
});