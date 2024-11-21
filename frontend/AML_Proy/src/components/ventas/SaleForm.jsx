import { useState } from 'react';
import './SaleForm.css';

const SaleForm = ({ onSave, onClose, errorMessage }) => {
  const [saleData, setSaleData] = useState({
    numero_venta: "",
    fecha_venta: Date.now(),
    precio_venta: "",
    cantidad: 1,
    cliente: 1,
    producto: 101,
    sucursal: 1,
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSaleData({
      ...saleData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {   
    e.preventDefault(); // Evita la recarga del formulario
    onSave(saleData);
  };

  return (
    <div className="sale-form-container">
      <h2>Añadir Nueva Venta</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Numero Venta:
          <input
            type="number"
            name="numero_venta"
            value={saleData.numero_venta}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Fecha:
          <input
            type="date"
            name="fecha_venta"
            value={saleData.fecha_venta}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Precio:
          <input
            type="number"
            name="precio_venta"
            value={saleData.precio_venta}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Cantidad:
          <input
            type="number"
            name="cantidad"
            value={saleData.cantidad}
            onChange={handleChange}
            min="1"
            required
          />
        </label>
        <label>
          IdCliente:
          <input
            type="number"
            name="cliente"
            value={saleData.cliente}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          IdProducto:
          <input
            type="number"
            name="producto"
            value={saleData.producto}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          IdSucursal:
          <input
            type="number"
            name="sucursal"
            value={saleData.sucursal}
            onChange={handleChange}
            required
          />
        </label>

        <div className="form-actions">
          <button type="submit" disabled={isSubmitting}>Guardar Venta</button>
          <button type="button" onClick={onClose}>Cancelar</button>
        </div>
      </form>
      {errorMessage && <p className="error-message">{errorMessage}</p>}
    </div>
  );
};

export default SaleForm;
