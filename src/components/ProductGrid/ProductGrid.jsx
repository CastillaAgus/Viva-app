import styles from "./ProductGrid.module.css"
import ProductCard from "../ProductCard/ProductCard";
import { useState } from "react";

 function ProductGrid(){

const productos = [
  {
    id: 1,
    nombre: "Ficus Lyrata",
    precio: 12000,
    tipo: "Interior",
    imagen: "/images/ficus.jpg",
    stock:5
  },
  {
    id: 2,
    nombre: "Monstera Deliciosa",
    precio: 15000,
    tipo: "Interior",
    imagen: "/images/monstera.jpg",
    stock:5
  },
  {
    id: 3,
    nombre: "Sansevieria",
    precio: 9000,
    tipo: "Interior",
    imagen: "/images/sansevieria.jpg",
    stock:5
  },
  {
    id: 4,
    nombre: "Lavanda",
    precio: 7000,
    tipo: "Exterior",
    imagen: "/images/lavanda.jpg",
    stock:8
  },
  {
    id: 5,
    nombre: "Helecho",
    precio: 8000,
    tipo: "Interior",
    imagen: "/images/helecho.jpg",
    stock:10
  },
  {
    id: 6,
    nombre: "Helecho",
    precio: 8000,
    tipo: "Interior",
    imagen: "/images/helecho.jpg",
    stock:10
  },
  {
    id: 7,
    nombre: "Helecho",
    precio: 8000,
    tipo: "Interior",
    imagen: "/images/helecho.jpg",
    stock:10
  },
  {
    id: 8,
    nombre: "Helecho",
    precio: 8000,
    tipo: "Interior",
    imagen: "/images/helecho.jpg",
    stock:10
  }
];
    const [favorites, setFavorites] = useState([])
    const toggleFavorite = (id) =>{
        if(favorites.includes(id)){
          setFavorites(favorites.filter(f => f !==id));

        }else {
          setFavorites([...favorites,id]);
        }
   }


    return (

    <> 
    <h1 className={styles.h1}>Conoce nuestros productos</h1>
        <div className={styles.grid}>
        {productos.map((producto) => (
            <ProductCard  key={producto.id} producto={producto} isFavorite={favorites.includes(producto.id)}
          onToggleFavorite={toggleFavorite} />
        ))}
        </div>
    </>
    )
} 
export default ProductGrid

