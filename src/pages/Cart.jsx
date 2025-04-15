import { useCart } from "../context/CartContext";
import formatPrice from "../utils/formatPrice";

const Cart = () => {
  const { cart, increaseQuantity, decreaseQuantity, removeFromCart, getTotal } = useCart();

  return (
    <div className="container mt-4">
      <h2>🛒 Carrito de Compras</h2>
      {cart.length > 0 ? (
        <ul className="list-group">
          {cart.map((item) => (
            <li key={item.id} className="list-group-item d-flex justify-content-between align-items-center">
              <span>{item.name} - {formatPrice(item.price)}</span>
              <div>
                <button
                  className="btn btn-outline-danger btn-sm"
                  onClick={() => decreaseQuantity(item.id)}
                >
                  -
                </button>
                <span className="mx-2">{item.quantity}</span>
                <button
                  className="btn btn-outline-success btn-sm"
                  onClick={() => increaseQuantity(item.id)}
                >
                  +
                </button>
                <button
                  className="btn btn-outline-danger btn-sm ms-2"
                  onClick={() => removeFromCart(item.id)}
                >
                  Eliminar
                </button>
              </div>
            </li>
          ))}
          <li className="list-group-item text-end fw-bold">
            Total: {formatPrice(getTotal())}
          </li>
        </ul>
      ) : (
        <p className="text-muted">El carrito está vacío.</p>
      )}
    </div>
  );
};

export default Cart;

