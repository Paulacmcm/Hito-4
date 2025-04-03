import formatPrice from "../utils/formatPrice";

const CardPizza = ({ name, price, ingredients, img }) => {
  const handleViewMore = () => {
    alert(`Mostrando detalles de ${name}`);
  };

  const handleAddToCart = () => {
    alert(`${name} añadida al carrito`);
  };

  return (
    <div className="col-md-4 mb-4">
      <div className="card shadow-sm">
        <img src={img} className="card-img-top" alt={name} />
        <div className="card-body text-center">
          <h5 className="card-title fw-bold">{name}</h5>
          <p className="card-text"><strong>Ingredientes:</strong> {ingredients.join(", ")}</p>
          <p className="card-text"><strong>Precio:</strong> {formatPrice(price)}</p>
          <div className="d-flex justify-content-center gap-2">
            <button className="btn btn-primary" onClick={handleViewMore}>Ver más</button>
            <button className="btn btn-success" onClick={handleAddToCart}>Añadir</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardPizza;
