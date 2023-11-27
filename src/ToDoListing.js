import React, { useState } from "react";
import TodoCard from "./components/cards/TodoCard";
import apiService from "./shared/api.service";
import { getToDos } from "./shared/apiCalls";

const ToDoListing = ({ todoListing, setTodoListing }) => {
  const [editable, setEditable] = useState(null);

  async function handleDeleteTodo(id) {
    try {
      const result = await apiService.remove(`/todo/${id}`);
      if (result) {
        getToDos({ page: 1, itemsPerPage: 10 }, setTodoListing);
      }
    } catch (err) {
      alert("Error deleting Todo");
    }
  }

  async function handleUpdateTodo(data) {
    try {
      const result = await apiService.patch(`/todo/${editable}`, data);
      if (result) {
        getToDos({ page: 1, itemsPerPage: 10 }, setTodoListing);
        setEditable(null);
      }
    } catch (err) {
      alert("Error deleting Todo");
    }
  }

  return (
    <div className="flex flex-1 flex-col container w-full my-4">
      {todoListing?.length === 0 && (
        <h1 className="text-center font-semibold text-[gray] my-8">
          No Todo found!
        </h1>
      )}
      {todoListing?.map(({ title, description, id }, index) => (
        <TodoCard
          key={index}
          title={title}
          description={description}
          onDelete={() => handleDeleteTodo(id)}
          editable={editable === id ? true : false}
          onEdit={() => setEditable(id)}
          onUpdateTodo={handleUpdateTodo}
        />
      ))}
    </div>
  );
};

export default ToDoListing;
