import { useNavigate } from "react-router-dom";
import "../styles/Home.css";

function Home() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <div className="home-container">
      <h1 className="home-title">Welcome to Company Management</h1>
      <div className="nav-buttons">
        <button className="nav-button" onClick={() => navigate("/clients")}>Clients</button>
        <button className="nav-button" onClick={() => navigate("/products")}>Products</button>
        <button className="nav-button" onClick={() => navigate("/branches")}>Branches</button>
        <button className="nav-button" onClick={() => navigate("/sales")}>Sales</button>
        <button className="nav-button" onClick={() => navigate("/suppliers")}>Suppliers</button>
        <button className="nav-button" onClick={() => navigate("/locations")}>Locations</button>
        <button className="nav-button" onClick={() => navigate("/categories")}>Categories</button>
        <button className="nav-button" onClick={() => navigate("/provinces")}>Provinces</button>
        <button className="nav-button" onClick={() => navigate("/social-reasoning")}>Social Reasoning</button>
        <button className="nav-button" onClick={handleLogout}>Logout</button>
      </div>

      <footer> 
      © 2024 | Developed by IFTS24
      </footer>
    </div>
  );
}


export default Home;
