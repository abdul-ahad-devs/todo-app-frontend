import CustomInput from "./components/inputs/CustomInput";
import CustomButton from "./components/buttons/CustomButton";
import { useState } from "react";
import apiService from "./shared/api.service";
import { getToDos } from "./shared/apiCalls";

const initialValues = {
  title: "",
  description: "",
};

const AddTodo = ({ setTodoListing }) => {
  const [payload, setPayload] = useState(initialValues);

  function handleChange(value, key) {
    setPayload({ ...payload, [key]: value });
  }

  async function handleCreate() {
    try {
      const result = await apiService.post("/todo", payload);

      if (result) {
        getToDos({ page: 1, itemsPerPage: 10 }, setTodoListing);
        setPayload(initialValues);
      }
    } catch (err) {
      alert("Failed to create new todo");
    }
  }
  return (
    <>
      <CustomInput
        label="Title"
        placeholder={"Enter todo title"}
        containerClassName={"flex-1"}
        value={payload.title}
        onChange={(e) => handleChange(e.target.value, "title")}
      />
      <CustomInput
        label="Description"
        placeholder={"Enter todo description"}
        containerClassName={"ml-4 flex-1"}
        value={payload.description}
        onChange={(e) => handleChange(e.target.value, "description")}
      />
      <CustomButton
        label={"Create Todo"}
        btnClassName={"ml-4"}
        onClick={() => handleCreate()}
      />
    </>
  );
};

export default AddTodo;
