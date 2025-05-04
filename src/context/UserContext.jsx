import { createContext, useContext, useState } from "react";

// Creamos el contexto
const UserContext = createContext();

// Hook para usar el contexto
export const useUser = () => useContext(UserContext);

// Componente Provider
export const UserProvider = ({ children }) => {
  const [token, setToken] = useState(null); // ahora inicializamos en null
  const [email, setEmail] = useState(null); // nuevo estado para guardar el email

  const login = async (emailInput, password) => {
    const res = await fetch("http://localhost:5000/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: emailInput, password }),
    });
    const data = await res.json();
    if (res.ok) {
      setToken(data.token);
      setEmail(data.email);
    } else {
      throw new Error(data.message || "Error al iniciar sesión");
    }
  };

  const register = async (emailInput, password) => {
    const res = await fetch("http://localhost:5000/api/auth/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: emailInput, password }),
    });
    const data = await res.json();
    if (res.ok) {
      setToken(data.token);
      setEmail(data.email);
    } else {
      throw new Error(data.message || "Error al registrarse");
    }
  };

  const logout = () => {
    setToken(null);
    setEmail(null);
  };

  const getProfile = async () => {
    const res = await fetch("http://localhost:5000/api/auth/me", {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const data = await res.json();
    if (res.ok) {
      setEmail(data.email); // 👈 actualiza el estado
      return data;
    } else {
      throw new Error(data.message || "Error al obtener el perfil");
    }
  };
  

  return (
    <UserContext.Provider value={{ token, email, login, register, logout, getProfile }}>
      {children}
    </UserContext.Provider>
  );
};
