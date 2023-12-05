/* TODO - add your code to create a functional React component that renders a login form */
import { useState } from "react";
import { loginUser } from "../API";
import { useNavigate, Link } from "react-router-dom";

export default function Login({ setToken }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const userObj = {
      email,
      password,
    };
    const access = await loginUser(userObj);
    console.log(access);
    setToken(access);
    navigate("/account");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        {" "}
        E-Mail:{" "}
        <input
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
      </label>
      <label>
        {" "}
        Password:{" "}
        <input
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
      </label>
      <button>Login</button>
    </form>
  );
}