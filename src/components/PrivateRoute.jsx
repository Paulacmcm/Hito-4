import { Navigate } from "react-router-dom";
import { useUser } from "../context/UserContext"; // 👈

const PrivateRoute = ({ children }) => {
  const { token, email } = useUser();

  // Si el token está siendo cargado o si es null, mostrar un spinner o un mensaje de carga
  if (token === null && email === null) {
    return <div>Cargando...</div>; // Aquí puedes poner un spinner o algo similar
  }

  return token ? children : <Navigate to="/login" replace />;
};

export default PrivateRoute;
