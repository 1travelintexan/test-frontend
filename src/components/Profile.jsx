import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";
import { Link } from "react-router-dom";
import ToDoList from "./ToDoList";

export default function Profile() {
  const { user, handleLogout } = useContext(UserContext);
  return (
    <div>
      <p>Welcome!</p>
      <h1>{user && user.username}'s Profile</h1>
      <Link to="/createTodo">Create To-Do</Link>
      <button onClick={handleLogout}>Logout</button>
      <h2>Things to do!</h2>
      <ToDoList />
    </div>
  );
}
