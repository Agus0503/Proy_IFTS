import { Link, useNavigate, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

export function Navigation() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();
  const location = useLocation(); 

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsAuthenticated(true);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsAuthenticated(false);
    navigate("/");
  };

  if (location.pathname === "/home") {
    return null;
  }

  return (
    <nav className="p-4 text-white">
      <ul className="flex justify-between">
        {isAuthenticated && (
          <>
            <div className="flex space-x-4">
              <li>
                <Link to="/home" className="hover:underline">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/clients" className="hover:underline">
                  Clients
                </Link>
              </li>
              <li>
                <Link to="/products" className="hover:underline">
                  Products
                </Link>
              </li>
              <li>
                <Link to="/branches" className="hover:underline">
                  Branches
                </Link>
              </li>
              <li>
                <Link to="/sales" className="hover:underline">
                  Sales
                </Link>
              </li>
              <li>
                <Link to="/suppliers" className="hover:underline">
                  Suppliers
                </Link>
              </li>
              <li>
                <Link to="/locations" className="hover:underline">
                  Locations
                </Link>
              </li>
              <li>
                <Link to="/categories" className="hover:underline">
                  Categories
                </Link>
              </li>
              <li>
                <Link to="/provinces" className="hover:underline">
                  Provinces
                </Link>
              </li>
              <li>
                <Link to="/social-reasoning" className="hover:underline">
                  Social Reasoning
                </Link>
              </li>
            </div>
            <li>
              <button
                onClick={handleLogout}
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
              >
                Logout
              </button>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}
