import { v4 as uuidv4 } from "uuid";
const { createSlice } = require("@reduxjs/toolkit");

const todoSlice = createSlice({
    name: "todo",
    initialState: {
        list: [
            { id: uuidv4(), name: "di hoc", completed: false },
            { id: uuidv4(), name: "di choi", completed: true }
        ],
        todo: ""
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
        editTodo(state, action) {
            state.list = state.list.map((item) =>
                item.id === action.payload.id
                    ? { ...item, name: action.payload.todo }
                    : item
            );
        }
    }
});
const { actions, reducer } = todoSlice;
export const { setTodo, addTodo, deleteTodo, toggleTodo, editTodo } = actions;
export default reducer;
