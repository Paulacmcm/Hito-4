import { useEffect, useState } from "react";
import { useUser } from "../context/UserContext";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const { token, email, logout, getProfile } = useUser();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        await getProfile(); // 🔐 Obtener perfil con token
        setLoading(false);
      } catch (err) {
        setError("❌ No se pudo cargar el perfil.");
        setLoading(false);
      }
    };

    if (token) {
      fetchProfile();
    }
  }, [token, getProfile]);

  if (!token) {
    return (
      <h2 className="text-center mt-5">Acceso denegado. Por favor inicia sesión.</h2>
    );
  }

  if (loading) {
    return <p className="text-center mt-5">Cargando perfil...</p>;
  }

  if (error) {
    return <p className="text-center mt-5 text-danger">{error}</p>;
  }

  return (
    <div className="container mt-5">
      <h2>Perfil del Usuario</h2>
      <p>Email: {email}</p>
      <button
        className="btn btn-danger"
        onClick={() => {
          logout();
          navigate("/");
        }}
      >
        Cerrar sesión
      </button>
    </div>
  );
};

export default Profile;
