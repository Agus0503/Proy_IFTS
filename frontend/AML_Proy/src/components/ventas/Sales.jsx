import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import DataTable from "react-data-table-component";
import "./Sales.css";
import "styled-components";
import EditSale from "./EditSale";
import SaleForm from "./SaleForm";

function Sales() {
  const [sales, setSales] = useState([]);
  const [editingSale, setEditingSale] = useState(null);
  const [editMode, setEditMode] = useState(false);
  const [isAdding, setIsAdding] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const columns = [
    { name: "Numero", selector: (row) => row.numero_venta, sortable: true },
    { name: "Fecha", selector: (row) => row.fecha_venta, sortable: true },
    { name: "Precio", selector: (row) => row.precio_venta, sortable: true },
    { name: "Cantidad", selector: (row) => row.cantidad, sortable: true },
    { name: "Cliente", selector: (row) => row.cliente_nombre, sortable: true },
    { name: "Producto", selector: (row) => row.producto_desc, sortable: true },
    {
      name: "Sucursal",
      selector: (row) => row.sucursal_nombre,
      sortable: true,
    },
    {
      name: "Acciones",
      cell: (row) => (
        <div className="button-container">
          <button onClick={() => handleEdit(row)} className="edit-button">
            📝
          </button>
          <button
            onClick={() => handleDelete(row.numero_venta)}
            className="delete-button"
          >
            🗑️
          </button>
        </div>
      ),
    },
  ];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8000/api/ventas");        
        setSales(response.data);
      } catch (error) {
        console.error("Error fetching sales:", error);
      }
    };
    fetchData();
  }, []);

  const fetchSales = async () => {
    try {
      const response = await axios.get("http://localhost:8000/api/ventas");
      setSales(response.data);
    } catch (error) {
      console.error("Error fetching sales:", error);
    }
  };

  const handleEdit = (sale) => {
    const saleToEdit = sales.find(
      (sale) => sale.numero_venta === sale.numero_venta
    );
    if (saleToEdit) {
      setEditingSale(sale);
      setEditMode(true);
    }
  };


  const handleSave = async (updatedSale) => {    
    try {
      const response = await axios.put(
        `http://localhost:8000/api/ventas/${updatedSale.numero_venta}/`,
        updatedSale
      );
      console.log("Sale updated successfully:", response.data);
      alert("Datos actualizados correctamente!");
      setEditMode(false);
      fetchSales();
    } catch (error) {
      console.error("Error updating sale:", error);
      if (error.response && error.response.data) {
        console.error("Detailed error:", error.response.data);
        setErrorMessage(`Error updating sale: ${JSON.stringify(error.response.data)}`);
      } else {
        setErrorMessage("An unknown error occurred while updating the sale.");
      }
    }
  };

  async function handleDelete(id) {
    if (window.confirm("¿Estás seguro de que deseas eliminar esta venta?")) {
      try {
        await axios.delete(`http://localhost:8000/api/ventas/${id}`);
        // Actualizar el estado de las ventas después de la eliminación
        setSales(sales.filter((sale) => sale.id !== id));
        alert(
          "Venta eliminada correctamente! \nActualiza para ver los cambios"
        );
      } catch (error) {
        console.error("Error deleting sale:", error);
        alert("Hubo un problema al eliminar la venta.");
      }
    }
  }

  const handleChange = (e) => {
    const searchTerm = e.target.value.toLowerCase();
    if (searchTerm === "") {
      axios.get("http://localhost:8000/api/ventas").then((response) => {
        setSales(response.data);
      });
    } else {
      const filterRecord = sales.filter((record) =>
        record.producto_desc.toLowerCase().includes(searchTerm)
      );
      setSales(filterRecord);
    }
  };

  const handleAddSale = async (newSale) => {
    try {
      const response = await axios.post(
        "http://localhost:8000/api/ventas/",
        newSale
      );
      setSales((prevSales) => [...prevSales, response.data]);
      setIsAdding(false);
      setErrorMessage("");
    } catch (error) {
      console.error("Error al crear venta:", error.response);      
      if (error.response && error.response.data.numero_venta) {
        setErrorMessage("Error: el numero de venta ya existe");
      } else {
        setErrorMessage("Error desconocido: " + error.message);
      }
    }
  };

  return (
    <div className="table-container">
      <h1>Registo de Ventas</h1>

      <div className="search-and-add">
        <button className="add-sale" onClick={() => setIsAdding(true)}>
          Nueva Venta
        </button>
        {isAdding && (
          <SaleForm
            onSave={handleAddSale}
            onClose={() => setIsAdding(false)}
            errorMessage={errorMessage}
          />
        )}

        <input
          type="text"
          className="search-input"
          placeholder="Buscar por producto"
          onChange={handleChange}
        />
      </div>

      <DataTable
        columns={columns}
        data={sales}
        pagination
        paginationRowsPerPageOptions={[5, 10, 15, 20]}
      />

      {editingSale && (
        <EditSale
          sale={editingSale}
          onSave={(updatedSale) => handleSave(updatedSale)}
          onClose={() => setEditingSale(null)}
        />
      )}

      <button className="back" onClick={() => navigate("/home")}>
        Volver a Inicio
      </button>
    </div>
  );
}

export default Sales;
