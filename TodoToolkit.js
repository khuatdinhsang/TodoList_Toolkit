import { useDispatch, useSelector } from "react-redux";
import {
    addTodo,
    setTodo,
    deleteTodo,
    toggleTodo,
    editTodo
} from "./todoSlice";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
const todoToolkit = () => {
    const state = useSelector((state) => state.todo);
    const dispatch = useDispatch();
    const { list, todo } = state;
    const [checked, setChecked] = useState(false);
    const [id, setId] = useState("");
    const handeSetTodo = (e) => {
        dispatch(setTodo(e.target.value));
    };
    const handleAdd = () => {
        if (checked) {
            dispatch(editTodo({ id, todo }));
            setChecked(false);
            dispatch(setTodo(""));
        } else {
            dispatch(addTodo({ id: uuidv4(), name: todo, completed: false }));
            dispatch(setTodo(""));
        }
    };
    const handleDelete = (id) => {
        dispatch(deleteTodo(id));
    };
    const handleToggle = (id) => {
        dispatch(toggleTodo(id));
    };
    const handleEdit = (id) => {
        setChecked(true);
        const item = list.find((item) => item.id === id);
        dispatch(setTodo(item.name));
        setId(id);
    };
    return (
        <>
            <h1>TodoList</h1>
            <input value={todo} onChange={handeSetTodo} />
            <button onClick={handleAdd}>ADD</button>
            {list.map((item) => {
                return (
                    <div key={item.id}>
                        <li
                            onClick={() => handleToggle(item.id)}
                            className={item.completed ? "active" : ""}
                        >
                            {" "}
                            {item.name}
                        </li>
                        <button onClick={() => handleDelete(item.id)}>Delete </button>
                        <button onClick={() => handleEdit(item.id)}> Edit </button>
                    </div>
                );
            })}
        </>
    );
};

export default todoToolkit;
