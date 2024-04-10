import React, { useState } from "react";
import { useTodos } from "../store/todo";

const AddTodo = () => {
  const [todo, setTodo] = useState("");

  const { handleAddTodo } = useTodos();

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleAddTodo(todo);
    setTodo("");
  };
  return (
    <div>
      <form onSubmit={handleFormSubmit} className="flex mt-5 justify-evenly ">
        <input
          type="text"
          className="p-5 rounded-md outline"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />
        <button
          type="submit"
          className="bg-indigo-600 rounded-md p-5 
        "
        >
          Add
        </button>
      </form>
    </div>
  );
};

export default AddTodo;
