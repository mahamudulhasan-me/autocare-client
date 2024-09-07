import { Navigate } from "react-router-dom";
import { useAppSelector } from "../redux/hooks";

const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
  const { isAuthenticated } = useAppSelector((state) => state.auth);

  return isAuthenticated ? children : <Navigate to="/login" replace />;
};

export default ProtectedRoute;
