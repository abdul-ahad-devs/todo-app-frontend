import React, { useState } from "react";
import CustomButton from "../buttons/CustomButton";
import CustomInput from "../inputs/CustomInput";

const TodoCard = ({
  title,
  description,
  onDelete,
  onEdit,
  editable,
  onUpdateTodo,
}) => {
  const [payload, setPayload] = useState({ title, description });

  function handleChange(value, key) {
    setPayload({ ...payload, [key]: value });
  }

  return (
    <div className="flex flex-row justify-between items-center cursor-pointer bg-secondaryMattBlack hover:shadow-inner hover:shadow-primaryGreen my-4 rounded-xl w-full p-6">
      {editable ? (
        <div className="flex my-4">
          <CustomInput
            label="Title"
            placeholder={"Enter todo title"}
            value={payload.title}
            containerClassName={"ml-4"}
            onChange={(e) => handleChange(e.target.value, "title")}
          />
          <CustomInput
            label="Description"
            placeholder={"Enter todo description"}
            value={payload.description}
            containerClassName={"ml-4"}
            ame={"my-4"}
            onChange={(e) => handleChange(e.target.value, "description")}
          />
          <CustomButton
            label={"Update Todo"}
            btnClassName={"ml-4"}
            onClick={() => onUpdateTodo(payload)}
          />
        </div>
      ) : (
        <div>
          <h1 className="text-[1.5rem] font-semibold">{title}</h1>
          <h1 className="text-base ">{description}</h1>
        </div>
      )}
      <div className="flex ">
        <CustomButton label={"Edit"} onClick={onEdit} />
        <CustomButton
          label={"Delete"}
          btnClassName={"bg-[#8B0000] ml-4"}
          onClick={onDelete}
        />
      </div>
    </div>
  );
};

export default TodoCard;
