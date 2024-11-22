import Form from "../components/Form";
import "../styles/Login.css";
import { useRef, useEffect } from 'react';

function Login() {

  const logoRef = useRef(null);

  useEffect(() => {
    if (logoRef.current) {
      logoRef.current.classList.add('loaded');
    }
  }, []);

  
  return (
    <div className="form-wrapper">      
      <img ref={logoRef} className="logo" src="/logo-circulo.svg"/>
      <Form route="/api/token/" method="login" message="¡Bienvenido de nuevo!" />
    </div>
  );
}

export default Login;
