import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { createTheme } from "react-data-table-component";
import "./Products.css";

function Products() {
  const [products, setProducts] = useState([]);
  const [editingProduct, setEditingProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const columns = [
    { name: "Codigo", selector: (row) => row.codigo, sortable: true, width: "90px" },
    { name: "Descripcion", selector: (row) => row.descripcion, sortable: true },
    { name: "Precio", selector: (row) => row.precio, sortable: true, width: "100px" },
    { name: "Costo", selector: (row) => row.costo, sortable: true, width: "90px" },
    { name: "Stock", selector: (row) => row.stock, sortable: true, width: "78px" },
    { name: "Atributos",   selector: (row) =>  row.atributos ? JSON.stringify(row.atributos, null, 2): "Vacio" ,wrap:true},
    { name: "Foto", selector: (row) => row.foto, wrap:true },
    {
      name: "Categoria",
      selector: (row) => row.categoria_tipo,
      sortable: true,
      width: "100px"
    },
    { name: "Proveedor", selector: (row) => row.proveedor, sortable: true, wrap:true },
    {
      name: "Acciones",
      cell: (row) => (
        <div>
          <button onClick={() => handleEdit(row)} className="edit-button">
            📝
          </button>
          <button
            onClick={() => handleDelete(row.codigo)}
            className="delete-button"
          >
            🗑️
          </button>
        </div>
      ),
      width: "122px"
    },
  ];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8000/api/productos");
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchData();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await axios.get("http://localhost:8000/api/productos");
      setProducts(response.data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  const handleEdit = (product) => {
    const productToEdit = product.find(
      (product) => product.codigo === product.codigo
    );
    if (productToEdit) {
      setEditingProduct(product);
    }
  };

  const handleChange = (e) => {
    const searchTerm = e.target.value.toLowerCase();
    if (searchTerm === "") {
      axios.get("http://localhost:8000/api/productos").then((response) => {
        setProducts(response.data);
      });
    } else {
      const filterRecord = products.filter((record) =>
        record.codigo.toString().toLowerCase().includes(searchTerm)
      );
      setProducts(filterRecord);
    }
  };

  async function handleDelete(id) {
    if (window.confirm("¿Estás seguro de que deseas eliminar este producto?")) {
      try {
        await axios.delete(`http://localhost:8000/api/productos/${id}`);
        setProducts(products.filter((sale) => sale.id != id));
        alert(
          "Producto eliminado correctamente! \nActualiza para ver los cambios"
        );
      } catch (error) {
        console.error("Error deleting product:", error);
        alert("Hubo un problema al eliminar.");
      }
    }
  }

    
  return (
    <div className="products-container">

      <h1>Productos</h1>

      {/* <input
        type="text"
        className="search-input"
        placeholder="Buscar por Codigo"
        onChange={handleChange}
      />

      <DataTable        
        columns={columns}
        data={products}
        responsive
        pagination
        paginationRowsPerPageOptions={[5, 10, 15, 20]}        
        customStyles={customStyles}
      />

      <button className="back" onClick={() => navigate("/home")}>
        Volver a Inicio
      </button> */}
      <p>Proximamente...</p>
    </div>
  );
}

export default Products;

