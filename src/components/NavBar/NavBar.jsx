import styles from "./NavBar.module.css";
import { Link } from 'react-router-dom';
import { FaSearch, FaShoppingCart, FaUser, FaBars } from "react-icons/fa";
import { useState } from "react";
import { useCart } from "../../context/CartContext";

function NavBar() {

  const [menuOpen, setMenuOpen] = useState(false);
  const { getCartQuantity } = useCart();
  const totalItems = getCartQuantity();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (

    <nav className={styles.navbar} >

      <div className={styles.logodiv}><Link to="/"><img
        className={styles.logo}
        src="./images/logo-grande.png"
        alt="Logo Viva"
      /></Link><p>Viva!</p></div>
      <div
        className={`${styles.menuContent} ${menuOpen ? styles.active : ""
          }`}
      >

        <ul
          className={`${styles["nav-links"]} ${menuOpen ? styles.active : ""
            }`}>
          <li onClick={closeMenu}><Link to="/">Inicio</Link></li>
          <li onClick={closeMenu}><Link to="/productos">Productos</Link></li>
          <li onClick={closeMenu}><Link to="/nosotros">Nosotros</Link></li>
          <li onClick={closeMenu}><Link to="/alta">Agregar Productos</Link></li>
        </ul>

        <ul className={styles.actions}>
          <li><FaSearch /></li>
          <li onClick={closeMenu}><Link to="/carrito"><FaShoppingCart /> {totalItems > 0 && <span>{totalItems}</span>}</Link></li>
          <li><FaUser /></li>
        </ul>
      </div>
      <div
        className={styles["menu-toggle"]}
        onClick={toggleMenu}
      >
        <FaBars />
      </div>

    </nav>


  )
}
export default NavBar