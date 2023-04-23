import React, { useState } from "react";
import { myTodos, getNextId } from "./todos";

/*
Rules of state: never mutate state directly!

Todo Deliverables:
- Add element to array
- Remove element to array
- Update element in array
*/

function TodoList() {  
  const [todos, setTodos] = useState(myTodos);
  const [newTodoDescription, setNewTodoDescription] = useState("");

  function addTodo(e) {
    e.preventDefault();
    const newTodo = {
      id: getNextId(),
      description: newTodoDescription,
      completed: false,
    };
    let updatedTodo = [...todos, newTodo];
    setTodos(updatedTodo);
    console.log("createTodo", newTodo);
  }
  function deleteTodo(id) {
    console.log(id);
    const newArray = todos.filter((todo) => todo.id !== id);
    console.log(newArray);
    setTodos(newArray);
  }
  function updateTodo(id, completed) {
    // console.log(id, completed);
    const newArray = todos.map((todo) => {
      if (todo.id===id) {
        return { ...todo,completed };
      } else if (todo.id===id) {
        return todo;
      }
    });
    console.log(newArray);
    // setTodos(newArray);
  }

  return (
    <div className="App">
      <h2>Add Todos</h2>
      <form onSubmit={addTodo}>
        <label>
          Description:
          <input
            type="text"
            value={newTodoDescription}
            onChange={(e) => setNewTodoDescription(e.target.value)}
          />
        </label>
        <input type="submit" value="Add todo" />
      </form>
      <h2>My Todos</h2>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <strong>{todo.description}</strong>
            <label>
              Completed?
              <input
                type="checkbox"
                onChange={(e) => updateTodo(todo.id, e.target.checked)}
                checked={todo.completed}
              />
            </label>
            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
