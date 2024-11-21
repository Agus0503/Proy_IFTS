import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import Clients from "./components/clients/Clients";
import Products from "./components/products/Products";
import Sales from "./components/ventas/Sales";
import EditSale from './components/ventas/EditSale';
import Suppliers from "./components/proveedores/Suppliers";
import Branches from "./components/sucursales/Branches";
import { Navigation } from "./components/Navigation";
import Locations from "./components/localidades/Locations";
import Categories from "./components/categorias/Categories";
import Provinces from "./components/provincias/Provinces";
import SocialReasoning from "./components/razon-social/SocialReasoning"

function App() {
    return (
        <Router>
        <Navigation /> 
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/home" element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/clients" element={<Clients />} />
            <Route path="/products" element={<Products />} />
            <Route path="/sales" element={<Sales />} />
            <Route path="/sales/:saleId" element={<EditSale />} /> 
            <Route path="/suppliers" element={<Suppliers/>}/>
            <Route path="/branches" element={<Branches/>}/>
            <Route path="/locations" element={<Locations/>}/>
            <Route path="/categories" element={<Categories/>}/>
            <Route path="/provinces" element={<Provinces/>}/>
            <Route path="/social-reasoning" element={<SocialReasoning/>}/>
        </Routes>
    </Router>
    );
}

export default App;
