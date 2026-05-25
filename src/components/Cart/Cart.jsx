import { useCart } from "../../context/CartContext";
import styles from "./Cart.module.css";
import Button from "../Button/Button.jsx"
function Cart() {
    const { cart, clearCart, getCartTotal } = useCart();
    if (cart.length === 0) {
        return (
            <div className={styles.container}>
                <h1>El carrito está vacío</h1>
                <p>Agrega productos para continuar la compra.</p>
            </div>
        );
    } else {

        return (
            <div className={styles.container}>
                <h1>Carrito de Compras</h1>
                {cart.map(item => (
                    <div key={item.id} >
                        <h4>{item.nombre}</h4>
                        <p>Cantidad: {item.quantity}</p>
                        <p>Precio unitario: ${item.precio}</p>
                        <p>Subtotal: ${item.precio * item.quantity}</p>
                    </div>
                ))}
                <hr />
                <h3>Total a pagar: ${getCartTotal()}</h3>
                <Button texto="Vaciar carrito" className="addButton" accion={clearCart}></Button>
            </div>
        );
    }
};

export default Cart;