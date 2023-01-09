import { v4 as uuidv4 } from "uuid";
import axios from "axios";
import { getTodoFetchApi } from "./handle";
const { createSlice } = require("@reduxjs/toolkit");

const todoSlice = createSlice({
    name: "todo",
    initialState: {
        list: [
            { id: uuidv4(), title: "di hoc", completed: false },
            { id: uuidv4(), title: "di choi", completed: true }
        ],
        todo: "",
        pending: false
    },
    reducers: {
        setTodo(state, action) {
            state.todo = action.payload;
        },
        addTodo(state, action) {
            state.list.push(action.payload);
        },
        deleteTodo(state, action) {
            state.list = state.list.filter((item) => item.id !== action.payload);
        },
        toggleTodo(state, action) {
            state.list = state.list.map((item) =>
                item.id === action.payload
                    ? { ...item, completed: !item.completed }
                    : item
            );
        },
        renderTodo(state, action) {
            state.pending = false;
        },
        editTodo(state, action) {
            state.list = state.list.map((item) =>
                item.id === action.payload.id
                    ? { ...item, title: action.payload.todo }
                    : item
            );
        }

        //C1:  fetch API theo action creator
        // todoFetch(state, action) {
        //   state.list = action.payload;
        // }
    },
    // C2: thunk
    extraReducers: {
        [getTodoFetchApi.pending]: (state, action) => {
            state.pending = true;
        },
        [getTodoFetchApi.fulfilled]: (state, action) => {
            state.list = action.payload;
        },
        [getTodoFetchApi.rejected]: (state, action) => {
            console.log("loi roi");
        }
    }
});
const { actions, reducer } = todoSlice;
export const {
    setTodo,
    addTodo,
    deleteTodo,
    toggleTodo,
    editTodo,
    todoFetch,
    renderTodo
} = actions;
export default reducer;
