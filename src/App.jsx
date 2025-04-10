import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Pizza from "./pages/Pizza";
import Register from "./pages/Register";
import LoginPage from "./pages/LoginPage";
import Cart from "./pages/Cart";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [token, setToken] = useState(false); // Estado simulado para el login

  return (
    <>
      <Navbar token={token} setToken={setToken} />

      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pizza/p001" element={<Pizza />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/profile" element={<Profile token={token} />} />
          <Route path="/404" element={<NotFound />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>

      <Footer />
    </>
  );
}

export default App;
