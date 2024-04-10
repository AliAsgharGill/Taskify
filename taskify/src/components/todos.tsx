import React from "react";
import { useTodos } from "../store/todo";
import { useSearchParams } from "react-router-dom";

const Todos = () => {
  const { todos, toggleTodoAsCompleted, handleDeleteTodo } = useTodos();
  let filterData = todos;

  const [searchParams] = useSearchParams();
  const todosData = searchParams.get("todos");
//   console.log("URL", todosData);

  if (todosData === "active") {
    filterData = filterData.filter((task)=> !task.completed)
  }

  if (todosData === "completed") {
    filterData = filterData.filter((task)=> task.completed)
  }


  return (
    <>
      <ul>
        {filterData
          ? filterData.map((todo) => {
              return (
                <li key={todo.id}>
                  <input
                    type="checkbox"
                    name=""
                    id={`todo${todo.id}`}
                    checked={todo.completed}
                    onChange={() => toggleTodoAsCompleted(todo.id)}
                  />
                  <label htmlFor={`todo${todo.id}`}> {todo.task}</label>

                  {todo.completed && (
                    <button
                      type="button"
                      onClick={() => handleDeleteTodo(todo.id)}
                    >
                      Delete
                    </button>
                  )}
                </li>
              );
            })
          : null}
      </ul>
    </>
  );
};

export default Todos;
