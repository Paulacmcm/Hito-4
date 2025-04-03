import React, { useState, useEffect } from 'react';
import Header from "./Header";
import CardPizza from "./CardPizza";

const Home = () => {
  const [pizzas, setPizzas] = useState([]);  // Estado para almacenar las pizzas

  useEffect(() => {
    // Realizar la petición a la API para obtener las pizzas
    fetch('http://localhost:5000/api/pizzas')
      .then((response) => response.json())
      .then((data) => setPizzas(data))  // Establecer las pizzas obtenidas
      .catch((error) => console.error('Error al obtener las pizzas:', error));
  }, []);  // El array vacío asegura que la llamada solo se haga una vez al cargar el componente

  return (
    <div className="container">
      <Header />
      <div className="row">
        {pizzas.map((pizza) => (
          <CardPizza
            key={pizza.id}  // Cambié el key por pizza.id, que es único
            name={pizza.name}
            price={pizza.price}
            ingredients={pizza.ingredients}
            img={pizza.img}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
