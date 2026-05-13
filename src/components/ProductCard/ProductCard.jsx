import styles from "./ProductCard.module.css"
import Button from "../Button/Button";
import { Counter } from "../Counter/Counter";


function ProductCard ({producto, isFavorite , onToggleFavorite}) {
  const {id,imagen, nombre, precio, tipo,stock} = producto; 
  const setFavorite = ()=>{
    onToggleFavorite(id)
  };
        return (
          <div className={styles.card}>
            <div className={styles.imageContainer}>
                <img src={imagen}  className={styles.image}  alt={nombre}/>
               <div className={styles.cardContent}>
                  <h4  className={styles.title} >{nombre}</h4>
                     
                        <p className={styles.type}>Tipo : {tipo}</p>
                        
                      
                </div>
                <button className={styles.favBtn} onClick={setFavorite}>{isFavorite ? "❤️" : "🤍"}</button>
                
                
             </div>
             <div className={styles.subtitle}> 
               <p  className={styles.price} >$ {precio}</p>
               <Counter stock={stock}></Counter>
              </div>
                <Button texto="Agregar" clase="button"></Button>        
          </div> 
        )

}

export default ProductCard;