import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { UserContextWrapper } from "./contexts/UserContext.jsx";
import { ToDoWrapper } from "./contexts/TodoContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <UserContextWrapper>
        <ToDoWrapper>
          <App />
        </ToDoWrapper>
      </UserContextWrapper>
    </BrowserRouter>
  </React.StrictMode>
);
