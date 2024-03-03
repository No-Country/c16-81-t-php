import { useCallback, useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import LoadingPage from "./Loadings/LoadingPage";
import { verifyAuthorization } from "../helpers/callsToAPI"

const ProtectedRoute = ({ children }) => {
  const [isAuthorized, setAuthorized] = useState(null);

  const fetchAuthorization = useCallback(async () => {
    const verification = await verifyAuthorization();
    setAuthorized(verification);
  }, [])

  useEffect(() => {
        
    fetchAuthorization()
      .catch(console.error);

  }, [fetchAuthorization]);

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
