import styles from "./ProductCard.module.css"
import Button from "../Button/Button";
import { Counter } from "../Counter/Counter";
import { Link } from "react-router-dom";

function ProductCard ({producto, isFavorite , onToggleFavorite}) {
  const {id,imagen, nombre, precio, tipo,stock} = producto; 
  const setFavorite = (e)=>{
    e.preventDefault();
    onToggleFavorite(id)
  };

  function manejarClick(){
    alert("Se agrego al carrito");
  }

        return (
          <div className={styles.card}>
            <Link to={`/producto/${producto.id}`}>
            <div className={styles.imageContainer}>
                <img src={imagen}  className={styles.image}  alt={nombre}/>
               <div className={styles.cardContent}>
                  <h4  className={styles.title} >{nombre}</h4>                    
                        <p className={styles.type}>Tipo : {tipo}</p>  
                </div>
                <button className={styles.favBtn} onClick={setFavorite}>{isFavorite ? "❤️" : "🤍"}</button>                 
             </div>
             </Link> 
             <div className={styles.subtitle}> 
               <p  className={styles.price} >$ {precio}</p>
               <Counter stock={stock}></Counter>
              </div>           
                <Button texto="Agregar" accion={manejarClick} className="addButton"></Button>        
          </div> 
        )

}

export default ProductCard;