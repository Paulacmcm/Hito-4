import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = ({ setToken }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, password } = formData;

    if (!name || !email || !password) {
      setMessage("❌ Todos los campos son obligatorios.");
      return;
    }

    if (password.length < 6) {
      setMessage("❌ La contraseña debe tener al menos 6 caracteres.");
      return;
    }

    // Simulamos registro exitoso
    setMessage("✅ Registro exitoso.");
    setToken(true);        // Activamos el token simulado
    navigate("/profile");  // Redirigimos al perfil
  };

  return (
    <div className="container mt-4" style={{ maxWidth: "400px" }}>
      <h2>Registro de Usuario</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label>Nombre:</label>
          <input
            type="text"
            name="name"
            className="form-control"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label>Email:</label>
          <input
            type="email"
            name="email"
            className="form-control"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label>Contraseña:</label>
          <input
            type="password"
            name="password"
            className="form-control"
            value={formData.password}
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="btn btn-primary w-100">Registrarse</button>
      </form>
      {message && <p className="mt-3">{message}</p>}
    </div>
  );
};

export default Register;
