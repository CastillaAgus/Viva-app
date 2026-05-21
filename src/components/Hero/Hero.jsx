import styles from "./Hero.module.css"
import { Link } from "react-router-dom";
import Button from "../Button/Button";
import { useNavigate } from "react-router-dom"

function Hero () {
    const navigate = useNavigate()
    function irProductos() {
    navigate("/productos")
  }
    return (
        <div className={styles.hero} >
          <div className={styles.heroContent}>
                <h1>Llevá naturaleza a tu vida</h1>
                <p>De nuestro vivero a tu hogar</p>
                <Button texto="Ver Plantas" accion={irProductos} className="heroButton"></Button>
          </div>
        </div>
        
    )
}

export default Hero;