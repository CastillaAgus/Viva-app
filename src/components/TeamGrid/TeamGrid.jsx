import styles from "./TeamGrid.module.css"
import TeamCard from "../TeamCard/TeamCard";
import { useState, useEffect } from "react";


function TeamGrid () {
    const [equipo, setEquipo] = useState([]);
    const [error, setError] = useState(null);
    const [cargando, setCargando] = useState(true);
 
    useEffect ( ()=>{
        const fetchEquipo = async () => {

        try {
            const respuesta = await fetch ('/data/nosotros.json') ;
            if (!respuesta.ok){
                throw new Error("Error al cargar el equipo");
            }
            const data = await respuesta.json();
            setEquipo(data);
            } 
            catch(error) {
                setError(error.message);
            } 
            finally {
                setCargando(false);
            }
        };  
        
        fetchEquipo();
    },[]);

    if(cargando) return <p>Cargando equipo... </p>;
    if(error) return <p>Error: {error}</p>;

    return (
         <>
            <h1>Conoce a nuestro equipo</h1>
            <div>
                {equipo.map((persona) =>(
                    <TeamCard key={persona.id} {...persona}/>
                ))}
            </div>
         </>

    )
}

export default TeamGrid; 