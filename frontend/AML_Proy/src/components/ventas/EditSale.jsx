import React, { useState, useEffect } from "react";

const EditSale = ({ sale, onSave, onClose }) => {
  const [formData, setFormData] = useState({
    numero_venta: sale?.numero_venta || "",
    fecha_venta: sale?.fecha_venta || "",
    precio_venta: sale?.precio_venta || "",
    cantidad: sale?.cantidad || "",
    cliente: sale?.cliente || "",
    producto: sale?.producto || "",
    sucursal: sale?.sucursal || "",
  });

  useEffect(() => {
    if (sale) {
      setFormData({
        numero_venta: sale.numero_venta ?? "",
        fecha_venta: sale.fecha_venta ?? "",
        precio_venta: sale.precio_venta ?? "",
        cantidad: sale.cantidad ?? "",
        cliente: sale.cliente ?? "",
        producto: sale.producto ?? "",
        sucursal: sale.sucursal ?? "",
      });
    }
  }, [sale]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <div className="sale-form-container">
      <h2>Editar Venta</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Numero Venta:
          <input
            type="number"
            name="numero_venta"
            value={formData.numero_venta}
            onChange={handleChange}
            readOnly
          />
        </label>
        <label>
          Fecha:
          <input
            type="date"
            name="fecha_venta"
            value={formData.fecha_venta}
            onChange={handleChange}
          />
        </label>
        <label>
          Precio:
          <input
            type="number"
            name="precio_venta"
            value={formData.precio_venta}
            onChange={handleChange}
          />
        </label>
        <label>
          Cantidad:
          <input
            type="number"
            name="cantidad"
            value={formData.cantidad}
            onChange={handleChange}
            min="1"
          />
        </label>
        <label>
          Cliente:
          <input
            type="number"
            name="cliente"
            value={formData.cliente}
            onChange={handleChange}
          />
        </label>
        <label>
          Producto:
          <input
            type="number"
            name="producto"
            value={formData.producto}
            onChange={handleChange}
          />
        </label>
        <label>
          Sucursal:
          <input
            type="number"
            name="sucursal"
            value={formData.sucursal}
            onChange={handleChange}
          />
        </label>
        <div className="form-actions">
          <button type="submit" onClick={onSave}>Guardar Cambios</button>
          <button type="button" onClick={onClose}>
            Cancelar
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditSale;
