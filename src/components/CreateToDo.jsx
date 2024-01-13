import React, { useContext } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../contexts/UserContext";
import axios from "axios";

export default function Create() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();
  const { user } = useContext(UserContext);
  const handleCreateTodo = async (e) => {
    e.preventDefault();
    console.log("user in create func", user);
    const toDoCreate = {
      name: name,
      description: description,
      owner: user.id,
    };
    const { data } = await axios.post(
      "http://localhost:5005/task/createTask",
      toDoCreate
    );
    console.log("todo successfully created", data);
    navigate("/profile");
  };

  return (
    <form onSubmit={handleCreateTodo}>
      <label>
        Todo Name:
        <input
          name="name"
          value={name}
          type="text"
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
      </label>
      <label>
        Todo Description:
        <input
          name="description"
          value={description}
          type="text"
          onChange={(e) => {
            setDescription(e.target.value);
          }}
        />
      </label>
      <button className="please install tailwind">Create Task</button>
    </form>
  );
}
