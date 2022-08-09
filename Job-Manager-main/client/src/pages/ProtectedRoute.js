import { useAppContext } from "../context/appContext";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const { user } = useAppContext();
  if (!user) {
    //   return <div>there is no user</div>;
    return <Navigate to="/landing" />;
  }
  return children;
};

export default ProtectedRoute;
