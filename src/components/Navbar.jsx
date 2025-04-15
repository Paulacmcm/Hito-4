import React from "react";
import { Link, useNavigate } from "react-router-dom";
import formatPrice from "../utils/formatPrice";
import { useCart } from "../context/CartContext"; // 👈 Importa el hook del contexto

const Navbar = ({ token, setToken }) => {
  const { getTotal } = useCart(); // 👈 Obtén el total desde el contexto
  const navigate = useNavigate();

  const handleLogout = () => {
    setToken(false);
    navigate("/");
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <Link className="navbar-brand" to="/">🍕 Pizzería Mamma Mia!</Link>

        <div className="ms-auto d-flex align-items-center">
          <Link className="btn btn-outline-primary me-2" to="/">🏠 Home</Link>

          {token ? (
            <>
              <Link className="btn btn-outline-secondary me-2" to="/profile">🔓 Profile</Link>
              <button className="btn btn-outline-danger me-2" onClick={handleLogout}>🔒 Logout</button>
            </>
          ) : (
            <>
              <Link className="btn btn-outline-success me-2" to="/login">🔐 Login</Link>
              <Link className="btn btn-outline-warning me-2" to="/register">📝 Register</Link>
            </>
          )}

          <Link className="btn btn-outline-dark" to="/cart">
            🛒 Total: {formatPrice(getTotal())}
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
