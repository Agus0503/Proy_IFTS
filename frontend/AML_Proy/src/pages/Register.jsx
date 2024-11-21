import Form from "../components/Form";
import "../styles/Form.css";
import { useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate("/");
  };

  return (
    <div className="form-wrapper">
      <Form route="/api/user/register/" method="register" />
      <button onClick={handleNavigation} className="back-login">Back to Login</button>
    </div>
  );
}

export default Register;
