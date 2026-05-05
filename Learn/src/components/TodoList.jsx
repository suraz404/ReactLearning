import { useState } from "react";

const TodoList = () => {
  const [input, setInput] = useState("");
  const [todo, setTodo] = useState([]);

  const handleOnChange = (e) => {
    setInput(e.target.value);
  };
  const handleAdd = () => {
    setTodo([...todo, input]);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="enter your task"
        onChange={handleOnChange}
        value={input}
      />
      <button onClick={handleAdd}>Add</button>

      {todo.map((todo) => (
        <li key={todo}>{todo}</li>
      ))}
    </div>
  );
};

export default TodoList;
