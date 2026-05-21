import styles from "./ProductGrid.module.css"
import ProductCard from "../ProductCard/ProductCard";
import { useState, useEffect } from "react";

function ProductGrid({ mensaje, destacados}) {

  const [productos, setProductos] = useState([]);
  const [error, setError] = useState(null);
  const [cargando, setCargando] = useState(true);
  const [favorites, setFavorites] = useState([])

  useEffect(() => {
    fetch('/data/productos.json')
      .then((respuesta) => {
        if (!respuesta.ok) {
          throw new Error('No se pudo cargar la información de los productos')
        }
        return respuesta.json();
      })
      .then((datos) => {
        setProductos(datos);
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => {
        setCargando(false);
      });
  }, []);

  if (cargando) {
    return <p>Cargando productos, por favor espere ... </p>;
  }

  if (error) {
    return <p> Error : {error}</p>;
  }




  const toggleFavorite = (id) => {
    if (favorites.includes(id)) {
      setFavorites(favorites.filter(f => f !== id));

    } else {
      setFavorites([...favorites, id]);
    }
  }


  const productosAMostrar = destacados ? productos.filter(prod => prod.destacado) : productos;


  return (

    <div className={styles.container}>
      <h1 className={styles.h1}>{mensaje}</h1>
      <div className={styles.grid}>
        {productosAMostrar.map((producto) => (
          <ProductCard key={producto.id} producto={producto} isFavorite={favorites.includes(producto.id)}
            onToggleFavorite={toggleFavorite} />
        ))}
      </div>
    </div>
  )
}
export default ProductGrid

