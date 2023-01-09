import { useDispatch, useSelector } from "react-redux";
import {
    addTodo,
    setTodo,
    deleteTodo,
    toggleTodo,
    editTodo,
    getAllTodo,
    renderTodo
} from "./todoSlice";
import { v4 as uuidv4 } from "uuid";
import { useEffect, useState } from "react";
import { getDataFetch, getTodoFetchApi } from "./handle";
const todoToolkit = () => {
    const state = useSelector((state) => state.todo);
    const dispatch = useDispatch();
    const { list, todo, pending } = state;
    const [checked, setChecked] = useState(false);
    const [id, setId] = useState("");
    useEffect(() => {
        // dispatch(getDataFetch(null)); // day la lay theo kieu creator
        dispatch(getTodoFetchApi()); // day la lay kieu thunk
    }, []);
    const handeSetTodo = (e) => {
        dispatch(setTodo(e.target.value));
    };
    const handleAdd = () => {
        if (checked) {
            dispatch(editTodo({ id, todo }));
            setChecked(false);
            dispatch(setTodo(""));
        } else {
            dispatch(addTodo({ id: uuidv4(), title: todo, completed: false }));
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
        dispatch(setTodo(item.title));
        setId(id);
    };
    if (pending) {
        setTimeout(() => {
            dispatch(renderTodo());
        }, 2000);
    }
    return (
        <>
            <h1>TodoList</h1>
            <input value={todo} onChange={handeSetTodo} />
            <button onClick={handleAdd}>ADD</button>
            {pending ? (
                <h1>Peding...</h1>
            ) : (
                list.map((item) => {
                    return (
                        <div key={item.id}>
                            <li
                                onClick={() => handleToggle(item.id)}
                                className={item.completed ? "active" : ""}
                            >
                                {item.title}
                            </li>
                            <button onClick={() => handleDelete(item.id)}>Delete </button>
                            <button onClick={() => handleEdit(item.id)}> Edit </button>
                        </div>
                    );
                })
            )}
        </>
    );
};

export default todoToolkit;
