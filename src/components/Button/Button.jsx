 import { FaLeaf } from "react-icons/fa";
import styles from "./Button.module.css";
export default function Button({texto, className, accion}) {
 

  return (
  <button className={className} onClick={accion}><FaLeaf/>{texto}</button>
  )

}