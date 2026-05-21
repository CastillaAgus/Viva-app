import React from 'react';

function FormularioProducto({ datosForm, manejarCambio, manejarEnvio, manejarCambioImagen, estadoCarga }) {
    const formStyle = {
        display: 'flex',
        flexDirection: 'column',
        maxWidth: '24rem',
        margin: '3rem auto',
        padding: '1.5rem',
        border: '1px solid #ddd',
        borderRadius: '8px',
        gap: '16px'
    };

    return (
        <form style={formStyle} onSubmit={manejarEnvio}>
            <h3>Agregar Nuevo Producto</h3>
            <div>
                <label>Nombre del Producto:</label>
                <input type="text" placeholder="Nombre de la planta" name="nombre"
                    value={datosForm.nombre}
                    onChange={manejarCambio} />
            </div>
            <div>
                <label>Precio: $</label>
                <input type="number" placeholder=" 9000" name="precio"
                    value={datosForm.precio}
                    onChange={manejarCambio} />
            </div>
            <div>
                <label>Stock:</label>
                <input type="number" placeholder=" 5" name="stock" value={datosForm.stock}
                    onChange={manejarCambio} />
            </div>
            <div>
                <label>Imagen:</label>
                <input type="file" placeholder="https://..." name="urlImagen" value={datosForm.urlImagen} onChange={manejarCambioImagen}/>
            </div>
            <button type="submit" disabled={estadoCarga}>{estadoCarga ? "Enviando..." : "Guardar Producto"}</button>
        </form>
    );
}

export default FormularioProducto;