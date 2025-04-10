import { useState } from "react";
import formatPrice from "../utils/formatPrice";

const Cart = () => {
  const [cart, setCart] = useState([
    { id: 1, name: "Napolitana", price: 5950, quantity: 1 },
    { id: 2, name: "Pepperoni", price: 6950, quantity: 2 }
  ]);

  const increaseQuantity = (id) => {
    setCart(cart.map(item => 
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    ));
  };

  const decreaseQuantity = (id) => {
    setCart(cart.map(item => 
      item.id === id && item.quantity > 1 
        ? { ...item, quantity: item.quantity - 1 } 
        : item
    ));
  };

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="container mt-4">
      <h2>🛒 Carrito de Compras</h2>
      {cart.length > 0 ? (
        <ul className="list-group">
          {cart.map((item) => (
            <li key={item.id} className="list-group-item d-flex justify-content-between align-items-center">
              <span>{item.name} - {formatPrice(item.price)}</span>
              <div>
                <button className="btn btn-outline-danger btn-sm" onClick={() => decreaseQuantity(item.id)}>-</button>
                <span className="mx-2">{item.quantity}</span>
                <button className="btn btn-outline-success btn-sm" onClick={() => increaseQuantity(item.id)}>+</button>
              </div>
            </li>
          ))}
          <li className="list-group-item text-end fw-bold">
            Total: {formatPrice(total)}
          </li>
        </ul>
      ) : (
        <p className="text-muted">El carrito está vacío.</p>
      )}
    </div>
  );
};

export default Cart;
