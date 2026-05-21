import styles from "./TeamCard.module.css" 

function TeamCard ({nombre, puesto, imagen, email,telefono}) {


    return (

        <div className={styles.container}>
            <div className={styles.imageContainer}>
                <img className={styles.image} src={imagen}/>

            </div>
            <div className={styles.content}>
                <h2>{nombre}</h2>
                <p>{puesto}</p>
                <p>{email}</p>
                <p>{telefono}</p>
            </div>
            

        </div>
    )
};

export default TeamCard;