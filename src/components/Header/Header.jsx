import styles from './Header.module.css'
import NavBar from '../NavBar/NavBar';
import Hero from '../Hero/Hero';
function Header()   {
    return(
       <> 
        <header className={styles.header}>
             <NavBar />
          </header>
        </>
    )
}

export default Header;