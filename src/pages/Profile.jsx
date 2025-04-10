// src/pages/Profile.jsx
const Profile = ({ token }) => {
  if (!token) {
    return <h2 className="text-center mt-5">Acceso denegado. Por favor inicia sesión.</h2>;
  }

  const fakeEmail = "usuario@pizzeria.com";

  return (
    <div className="container mt-5">
      <h2>Perfil del Usuario</h2>
      <p>Email: {fakeEmail}</p>
      <button className="btn btn-danger">Cerrar sesión</button>
    </div>
  );
};

export default Profile;
