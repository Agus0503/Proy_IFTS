import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import DataTable from "react-data-table-component";
import axios from "axios";
import "./Clients.css";

function Clients() {
  const [clients, setClients] = useState([]);
  const navigate = useNavigate();

  const columns = [
    { name: "Nombre", selector: (row) => row.nombre_completo, sortable: true },
    { name: "Cuit", selector: (row) => row.cuit, sortable: true },
    { name: "Telefono", selector: (row) => row.telefono },
    { name: "Direccion", selector: (row) => row.direccion },
    { name: "Localidad", selector: (row) => row.localidad_nombre, sortable: true },
    { name: "Razon Social", selector: (row) => row.razon_social_tipo, sortable: true },
    {
      name: "Acciones",
      cell: (row) => (
        <div>
          <button
            onClick={() => handleEdit(row.id)}
            className="edit-button"
          >
            📝
          </button>
          <button
            onClick={() => handleDelete(row.id)}
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
        const response = await axios.get("http://localhost:8000/api/clientes");
        setClients(response.data);
      } catch (error) {
        console.error("Error fetching sales:", error);
      }
    };
    fetchData();
  }, []);

  const fetchClients = async () => {
    try {
      const response = await axios.get("http://localhost:8000/api/clientes");
      setClients(response.data);
    } catch (error) {
      console.error("Error fetching sales:", error);
    }
  };

  return (
    <div className="table-container">
      <h1>Registro de Clientes</h1>
      
      <DataTable
        columns={columns}
        data={clients}
        pagination
        paginationRowsPerPageOptions={[5, 10, 15, 20]}
      />

      <button className="back" onClick={() => navigate("/home")}>
        Volver a Inicio
      </button>
    </div>
  );
}

export default Clients;
