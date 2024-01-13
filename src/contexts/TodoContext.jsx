import axios from "axios";
import React, { createContext, useContext, useEffect, useState } from "react";
import { UserContext } from "./UserContext";

const ToDoContext = createContext();

const ToDoWrapper = ({ children }) => {
  const [toDos, setToDos] = useState([]);
  const { user } = useContext(UserContext);
  const getTodos = async () => {
    const { data } = await axios.get("http://localhost:5005/task/allTasks", {
      headers: {
        currentuser: user.id,
      },
    });
    console.log("response with all todos", data);
    setToDos(data);
  };

  return (
    <ToDoContext.Provider value={{ toDos, setToDos, getTodos }}>
      {children}
    </ToDoContext.Provider>
  );
};
export { ToDoContext, ToDoWrapper };
