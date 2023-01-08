import counterReducer from "./counterSlice";
import todoReducer from "./todoSlice";
import { configureStore } from "@reduxjs/toolkit";

const rootReducer = {
    counter: counterReducer,
    todo: todoReducer
};

const store = configureStore({
    reducer: rootReducer
});
export default store;
