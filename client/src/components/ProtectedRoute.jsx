import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import LoadingPage from "./Loadings/LoadingPage";

const ProtectedRoute = ({ children }) => {
  const [isAuthorized, setAuthorized] = useState(null);

  useEffect(() => {
    
    const verifyAuthorization = async () => {
      const token = localStorage.getItem("ARENA_MOBILE_USER_TOKEN");

      try {
        if(!token){
          throw new Error(`El token no fue hallado o no esta almacenado, redireccionando al login`)
        }

        const resp = await fetch("http://127.0.0.1:8000/api/verify-token", {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
            Accept: "application/json",
            withCredentials: "true",
          },
        });

        const data = await resp.json()
        if(!resp.ok){ throw new Error(data.message) }

        return resp.ok
      } catch (error) {
        console.error(`Error al verificar la autenticacion del usuario: ${error.message}`)
        return false
      }
    };

    verifyAuthorization()
        .then(setAuthorized)
        .catch(setAuthorized)
  }, []);

  switch (isAuthorized) {
    case null:
      return <LoadingPage />;
    case true:
      return children;
    case false:
      return <Navigate to="/login" />;
  }
};

export default ProtectedRoute;
