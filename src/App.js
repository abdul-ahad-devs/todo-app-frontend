import React, { useEffect, useState } from "react";
import AddTodo from "./AddTodo";
import ToDoListing from "./ToDoListing";
import { getToDos } from "./shared/apiCalls";

const App = () => {
  const [todoListing, setTodoListing] = useState([]);

  const page = 1;
  const itemsPerPage = 10;

  useEffect(() => {
    getToDos({ page, itemsPerPage }, setTodoListing);
  }, []);

  return (
    <div className="flex flex-1 flex-col items-center justify-center my-4 container mx-auto">
      <h1 className="text-[3rem] font-bold text-center text-primaryGreen mb-8">
        To Do List{" "}
      </h1>
      <div className="flex flex-row container">
        <AddTodo setTodoListing={setTodoListing} />
      </div>
      <ToDoListing todoListing={todoListing} setTodoListing={setTodoListing} />
    </div>
  );
};

export default App;
