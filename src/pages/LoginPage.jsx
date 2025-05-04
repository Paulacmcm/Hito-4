import { useState } from "react";
import { useNavigate, Navigate } from "react-router-dom";
import { useUser } from "../context/UserContext";

const LoginPage = () => {
  const { token, login } = useUser();
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  if (token) {
    return <Navigate to="/profile" replace />;
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = formData;

    if (!email || !password) {
      setMessage("");
      setError("❌ Todos los campos son obligatorios.");
      return;
    }

    if (password.length < 6) {
      setMessage("");
      setError("❌ La contraseña debe tener al menos 6 caracteres.");
      return;
    }

    try {
      await login(email, password); // ✅ aquí pasas los datos al contexto
      setError("");
      setMessage("✅ Inicio de sesión exitoso.");
      navigate("/profile");
    } catch (err) {
      setMessage("");
      setError(`❌ ${err.message}`);
    }
  };

  return (
    <div className="container mt-4">
      <h2>Iniciar Sesión</h2>
      <form onSubmit={handleSubmit}>
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
        <button type="submit" className="btn btn-success">Iniciar Sesión</button>
      </form>
      {message && <p className="mt-3 text-success">{message}</p>}
      {error && <p className="mt-3 text-danger">{error}</p>}
    </div>
  );
};

export default LoginPage;
