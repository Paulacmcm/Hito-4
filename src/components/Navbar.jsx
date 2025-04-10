import React from "react";
import { Link, useNavigate } from "react-router-dom";
import formatPrice from "../utils/formatPrice";

const Navbar = ({ token, setToken }) => {
  const total = 25000;
  const navigate = useNavigate();

  const handleLogout = () => {
    setToken(false); // "Cerrar sesión"
    navigate("/");   // Redirige al inicio
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
            🛒 Total: {formatPrice(total)}
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
