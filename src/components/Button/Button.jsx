 import { FaLeaf } from "react-icons/fa";

export default function Button({texto,clase}) {
 
  function manejarClick() {
    alert('Botón clickeado!');
  }

  return (
  <button className={clase} onClick={manejarClick}><FaLeaf/>{texto}</button>
  )

}