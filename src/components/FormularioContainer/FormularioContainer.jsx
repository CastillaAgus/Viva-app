import FormularioProducto from "../FormularioProducto/FormularioProducto";
import { useState } from "react";

export function FormularioContainer() {

    const [datosForm, setDatosForm] = useState({
        nombre: '',
        precio: '',
        stock: ''
    });

    const [imagenFile, setImagenFile] = useState(null);
    const [estadoCarga, setEstadoCarga] = useState(false);


    const manejarCambio = (evento) => {
        const { name, value } = evento.target;
        setDatosForm({
            ...datosForm,
            [name]: value
        });
    }

        const manejarCambioImagen = (evento) => {
        setImagenFile(evento.target.files[0]);
    }



    const manejarEnvio = async (evento) => {
        evento.preventDefault();
        setEstadoCarga(true);
        if (!imagenFile) {
            alert("Por favor, selecciona una imagen para el producto");
            return;
        }

        const apiKey = 'f8c1518866f63246311105aa88a07beb';
        const formData = new FormData();
        formData.append('image', imagenFile);

        try {
            console.log('Subiendo imagen a Imgbb ...');
            const respuestaImgbb = await
                fetch(`https://api.imgbb.com/1/upload?key=${apiKey}`, {
                    method: 'POST',
                    body: formData,
                });

            const datosImgbb = await respuestaImgbb.json();

            if (datosImgbb.success) {
                console.log("Imagen subida con éxito. URL:", datosImgbb.data.url);
                const productoCompleto = {
                    ...datosForm,
                    urlImagen: datosImgbb.data.url
                };
                console.log('Enviando los siguientes datos COMPLETOS a la API:',
                    productoCompleto);
            } else {
                throw new Error("No se pudo subir la imagen.")

            }
        }
        catch (error) {
            console.error("Error en el proceso de envío:", error);
            alert("Hubo un error al subir la imagen. Por favor, intentá de nuevo.");
        }
        finally {
            setEstadoCarga(false);
        }
    };



return (
    <FormularioProducto datosForm={datosForm} estadoCarga={estadoCarga} manejarCambio={manejarCambio} manejarEnvio={manejarEnvio} manejarCambioImagen={manejarCambioImagen} />
);




}