import { useState } from "react";
import api from "../api/api";
import { useNavigate } from "react-router-dom";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "../constants";
import "../styles/Form.css";
import LoadingIndicator from "./LoadingIndicator";

function Form({ route, method }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const name = method === "login" ? "Login" : "Register";

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    setErrorMessage(""); 

    try {
      const res = await api.post(route, { username, password });
      if (method === "login") {
        localStorage.setItem(ACCESS_TOKEN, res.data.access);
        localStorage.setItem(REFRESH_TOKEN, res.data.refresh);
        navigate("/home");
      } 
    } catch (error) {
      if (method === "login") {
        setErrorMessage("Usuario o contraseña incorrectos.");
      } else if (method === "register") {
        setErrorMessage("El usuario ya existe. Prueba con otro nombre.");
      }
    } finally {
      setLoading(false);
    }
  };

  const handleRegisterNavigation = () => {
    navigate("/register");
  };
  
  return (
    <div>
    <form onSubmit={handleSubmit} className="form-container">
      <h1>{name}</h1>
      <input
        className="form-input"
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Username"
      />
      <input
        className="form-input"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
      />
      {loading && <LoadingIndicator />}
      <button className="form-button" type="submit">
        {name}
      </button>
      {errorMessage && <p className="error-message">{errorMessage}</p>}      
    </form>
    {method === "login" && (
        <button
          className="register-button"
          type="button"
          onClick={handleRegisterNavigation}
        >
          Register here
        </button>
      )}      

    </div>
  );
}

export default Form;
