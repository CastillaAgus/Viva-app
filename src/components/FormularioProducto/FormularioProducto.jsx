import React from 'react';
import styles from './FormularioProducto.module.css';

function FormularioProducto({
  datosForm,
  manejarCambio,
  manejarEnvio,
  manejarCambioImagen,
  estadoCarga
}) {

  return (
    <form className={styles.form} onSubmit={manejarEnvio}>
      
      <h3 className={styles.titulo}>
        Agregar Nuevo Producto
      </h3>

      <div className={styles.inputGroup}>
        <label className={styles.label}>
          Nombre del Producto
        </label>

        <input
          className={styles.input}
          type="text"
          placeholder="Nombre de la planta"
          name="nombre"
          value={datosForm.nombre}
          onChange={manejarCambio}
        />
      </div>

      <div className={styles.inputGroup}>
        <label className={styles.label}>
          Precio $
        </label>

        <input
          className={styles.input}
          type="number"
          placeholder="9000"
          name="precio"
          value={datosForm.precio}
          onChange={manejarCambio}
        />
      </div>

      <div className={styles.inputGroup}>
        <label className={styles.label}>
          Stock
        </label>

        <input
          className={styles.input}
          type="number"
          placeholder="5"
          name="stock"
          value={datosForm.stock}
          onChange={manejarCambio}
        />
      </div>

      <div className={styles.inputGroup}>
        <label className={styles.label}>
          Imagen
        </label>

        <input
          className={styles.input}
          type="file"
          name="urlImagen"
          onChange={manejarCambioImagen}
        />
      </div>

      <button
        className={styles.button}
        type="submit"
        disabled={estadoCarga}
      >
        {estadoCarga
          ? "Enviando..."
          : "Guardar Producto"}
      </button>

    </form>
  );
}

export default FormularioProducto;