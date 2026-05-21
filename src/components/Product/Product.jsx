import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import styles from "./Product.module.css";
import {
    FaHeart,
    FaLeaf,
    FaTint,
    FaSun,
    FaThermometerHalf
} from "react-icons/fa";

function Product() {
    const [producto, setProducto] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        fetch('/data/productos.json')
            .then(respuesta => respuesta.json())
            .then(data => {
                const productoBuscado = data.find(p => p.id === parseInt(id));
                setProducto(productoBuscado);
            })
            .catch(error => console.error("Error al cargar el producto:", error));
    }, [id]);
    if (!producto) {
        return <h2>Cargando producto...</h2>;
    }
    if (!producto.id) {
        return <h2>No se encontró el producto.</h2>;
    }

return (

        <div className={styles.container}>
            <div className={styles.card}>
                <div className={styles.imageContainer}>
                    <img
                        src={producto.imagen}
                        alt={producto.nombre}
                        className={styles.image}
                    />
                    <div className={styles.overlay}>
                        <h1 className={styles.title}>
                            {producto.nombre}
                        </h1>
                        <p className={styles.type}>
                            Tipo: {producto.tipo}
                        </p>
                        <p className={styles.price}>
                            ${producto.precio}
                        </p>
                    </div>
                </div>
            </div>

            <div className={styles.info}>
                <h2>Descripción</h2>
                <p className={styles.description}>
                    {producto.descripcion}
                </p>
                <div className={styles.tags}>
                    <div>
                        <div className={styles.iconCircle}>
                            <FaSun />
                        </div>

                        <span>{producto.luz}</span>

                    </div>
                    <div>
                        <div className={styles.iconCircle}>
                            <FaTint />
                    </div>
                        <span>{producto.riego}</span>
                    </div>
                    <div>

                       <div className={styles.iconCircle}>
                            <FaThermometerHalf />
                        </div>

                        <span>{producto.temperatura}</span>
                    </div>
                </div>

                <h2>Cuidados</h2>

                <ul className={styles.cuidados}>

                    {  producto.cuidados.map(cuidado => (
                            <li key={cuidado}>
                                <FaLeaf />
                                {cuidado}

                            </li>

                        ))
                    }
                </ul>
            </div>
       </div>
    )

}
export default Product; 