import { CounterToolkit } from "./CounterToolkit";
import TodoToolkit from "./TodoToolkit";

import "./styles.css";

export default function App() {
    return (
        <div className="App">
            <CounterToolkit />
            <TodoToolkit />
        </div>
    );
}
