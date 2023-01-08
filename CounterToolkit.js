import { useDispatch, useSelector } from "react-redux";
import { decrease, increase } from "./counterSlice";

export const CounterToolkit = () => {
    const counter = useSelector((state) => state.counter);

    const dispatch = useDispatch();
    const handleIncrease = () => {
        dispatch(increase(3));
    };
    const handleDecrease = () => {
        dispatch(decrease(5));
    };
    return (
        <>
            <h1>sang dep trai</h1>
            <h1>counter {counter}</h1>
            <button onClick={handleIncrease}>Increase</button>
            <button onClick={handleDecrease}>Decrease</button>
        </>
    );
};
