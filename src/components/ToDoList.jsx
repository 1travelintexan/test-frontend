import React, { useContext, useEffect } from "react";
import { ToDoContext } from "../contexts/TodoContext";
import { Link } from "react-router-dom";
import axios from "axios";

export default function ToDoList() {
  const { toDos, setToDos, getTodos } = useContext(ToDoContext);

  const handleDone = (todoId) => {
    const mappedTodos = todos.map((elem) => {
      if (elem.id === todoId) {
        elem.done = !elem.done;
      }
      return elem;
    });
    setTodos(mappedTodos);
  };

  const handleDelete = async (id) => {
    try {
      //make an axios call to the back to delete the todo as well
      const { data } = await axios.delete(
        `http://localhost:5005/task/deleteTask/${id}`
      );
      console.log("task was deleted ", data);
    } catch (err) {
      console.log("there was an error deleting", err);
    }

    //perfect for the DOM
    const filteredTodos = toDos.filter((curr) => {
      if (curr._id !== id) {
        return true;
      }
    });
    setToDos(filteredTodos);
  };
  useEffect(() => {
    getTodos();
  }, []);
  return (
    <div className="this would like nicer with tailwind (cats > dogs)">
      {toDos &&
        toDos.map((oneTodo) => {
          return (
            <div key={oneTodo._id}>
              <Link to={`/task?name=${oneTodo.name}=${oneTodo.id}`}>
                <h4>{oneTodo.name}</h4>
              </Link>
              <button
                onClick={() => {
                  handleDelete(oneTodo._id);
                }}
              >
                Done
              </button>
            </div>
          );
        })}
    </div>
  );
}
