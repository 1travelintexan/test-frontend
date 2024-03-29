import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { UserContext } from "../contexts/UserContext";

const API_URL = "http://localhost:5005";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);

  const navigate = useNavigate();
  const { authenticateUser } = useContext(UserContext);

  const handleEmail = (event) => setEmail(event.target.value);
  const handlePassword = (event) => setPassword(event.target.value);

  const handleLogin = (event) => {
    event.preventDefault();

    const requestBody = { email, password };
    axios
      .post(`${API_URL}/auth/login`, requestBody)
      .then(({ data }) => {
        console.log("response from login", data);
        localStorage.setItem("authToken", data.token);
        return authenticateUser().then(() => {
          navigate("/profile");
        });
      })
      .catch((error) => {
        setErrorMessage(error.response.data.errorMessage);
      });
  };

  return (
    <div>
      <h2>login</h2>

      <form onSubmit={handleLogin}>
        <label htmlFor="email">Email:</label>
        <input
          required
          id="email"
          type="email"
          name="email"
          value={email}
          onChange={handleEmail}
        />
        <br></br>
        <br></br>

        <label htmlFor="password">Password:</label>
        <input
          required
          id="password"
          type="password"
          name="password"
          value={password}
          onChange={handlePassword}
        />

        <button type="submit">Create an Account</button>
      </form>

      {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
    </div>
  );
}
export default Login;
