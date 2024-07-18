import React, { useState } from "react";
import { v4 as uuid } from "uuid";
function Todo() {
  const [newTodo, setNewTodo] = useState("");

  const [todoList, setTodoList] = useState(["Walk the dog", "Laundry"]);
  const addTodo = () => {
    setTodoList([...todoList, newTodo]);
    setNewTodo("");
  };

  const removeTodo = (index) => {
    const currentList = [...todoList];
    currentList.splice(index, 1);
    setTodoList(currentList);
  };
  return (
    <div>
      <h1>Todo List</h1>
      <div>
        <input
          type="text"
          placeholder="Add your task"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
        />
        <div>
          <button onClick={addTodo}>Submit</button>
        </div>
      </div>
      <ul>
        {todoList.map((item, index) => {
          return (
            <li key={uuid()}>
              <span>{item}</span>
              <button onClick={() => removeTodo(index)}>Delete</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Todo;
