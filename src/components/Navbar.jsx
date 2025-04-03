import React from "react";
import formatPrice from "../utils/formatPrice";

const Navbar = ({ setCurrentPage }) => {
  const total = 25000;
  const token = false; // Esto se manejará con estado más adelante

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <a className="navbar-brand" href="#">🍕 Pizzería Mamma Mia!</a>
        
        <div className="ml-auto">
          <button className="btn btn-outline-primary me-2" onClick={() => setCurrentPage("home")}>🏠 Home</button>

          {token ? (
            <>
              <button className="btn btn-outline-secondary me-2">🔓 Profile</button>
              <button className="btn btn-outline-danger me-2">🔒 Logout</button>
            </>
          ) : (
            <>
              {/* <button className="btn btn-outline-success me-2" onClick={() => setCurrentPage("login")}>🔐 Login</button>
              <button className="btn btn-outline-warning me-2" onClick={() => setCurrentPage("register")}>🔐 Register</button> */}
            </>
          )}

          <button className="btn btn-outline-dark">🛒 Total: {formatPrice(total)}</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

