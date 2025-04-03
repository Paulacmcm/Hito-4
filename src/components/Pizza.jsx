import React, { useState, useEffect } from "react";

const Pizza = () => {
  const [pizza, setPizza] = useState(null);

  useEffect(() => {
    // Consumiendo la API para obtener la pizza por un ID específico
    fetch('http://localhost:5000/api/pizzas/p001') // Aquí p001 es un ID fijo por ahora
      .then((response) => response.json())
      .then((data) => setPizza(data))
      .catch((error) => console.error('Error al obtener la pizza:', error));
  }, []);  // El array vacío asegura que la petición solo se haga una vez

  if (!pizza) {
    return <div>Cargando pizza...</div>; // Muestra mientras la pizza se está cargando
  }

  return (
    <div className="pizza-detail">
      <h2>{pizza.name}</h2>
      <img src={pizza.img} alt={pizza.name} className="pizza-image" />
      <p><strong>Precio:</strong> {pizza.price}</p>
      <p><strong>Descripción:</strong> {pizza.description}</p>
      <p><strong>Ingredientes:</strong> {pizza.ingredients.join(", ")}</p>
      <button>Añadir al carrito</button> {/* Aún sin funcionalidad */}
    </div>
  );
};

export default Pizza;
