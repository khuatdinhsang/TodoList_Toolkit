const { createSlice } = require("@reduxjs/toolkit");

const couterSlice = createSlice({
    name: "counter",
    initialState: 100,
    reducers: {
        increase(state, action) {
            return state + action.payload;
        },
        decrease(state, action) {
            return state - action.payload;
        }
    }
});

const { actions, reducer } = couterSlice;
export const { increase, decrease } = actions;
export default reducer;
