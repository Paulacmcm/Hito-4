import { useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Pizza from "./components/Pizza"; // Importamos el componente Pizza
// import RegisterPage from "./components/RegisterPage";
// import LoginPage from "./components/LoginPage";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [currentPage, setCurrentPage] = useState("home");

  return (
    <div>
      <Navbar setCurrentPage={setCurrentPage} />

      <div className="container mt-4">
        {/* Cambiar entre páginas según el valor de currentPage */}
        {currentPage === "home" && <Home />}
        {currentPage === "pizza" && <Pizza />} {/* Mostrar Pizza cuando currentPage es "pizza" */}
        {/* {currentPage === "register" && <RegisterPage />} */}
        {/* {currentPage === "login" && <LoginPage />} */}
      </div>

      <Footer />
    </div>
  );
}

export default App;
