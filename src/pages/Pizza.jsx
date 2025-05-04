import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useCart } from "../context/CartContext";
import formatPrice from "../utils/formatPrice";

const Pizza = () => {
  const { id } = useParams();
  const { addToCart } = useCart();
  const [pizza, setPizza] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:5000/api/pizzas/${id}`)
      .then((response) => response.json())
      .then((data) => setPizza(data))
      .catch((error) => {
        console.error("Error al obtener la pizza:", error);
        setError("No se pudo cargar la pizza. Intenta más tarde.");
      });
  }, [id]);

  if (error) return <div className="text-danger">{error}</div>;
  if (!pizza) return <div>Cargando pizza...</div>;

  return (
    <div className="pizza-detail text-center container mt-4">
      <h2>{pizza.name}</h2>
      <img src={pizza.img} alt={pizza.name} className="img-fluid" style={{ maxWidth: 300 }} />
      <p><strong>Precio:</strong> {formatPrice(pizza.price)}</p>
      <p><strong>Descripción:</strong> {pizza.description}</p>
      <p><strong>Ingredientes:</strong> {pizza.ingredients.join(", ")}</p>
      <button className="btn btn-success" onClick={() => addToCart(pizza)}>
        Añadir al carrito
      </button>
    </div>
  );
};

export default Pizza;
