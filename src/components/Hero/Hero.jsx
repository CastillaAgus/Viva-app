import styles from "./Hero.module.css"

function Hero () {

    return (
        <div className={styles.hero} >
          <div className={styles.heroContent}>
                <h1>Llevá naturaleza a tu vida</h1>
                <p>Plantas seleccionadas con amor</p>
                 <button>Ver plantas</button>
          </div>
        </div>
        
    )
}

export default Hero;