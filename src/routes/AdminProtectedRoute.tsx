import { Navigate } from "react-router-dom";
import { useAppSelector } from "../redux/hooks";

const AdminProtectedRoute = ({ children }: { children: JSX.Element }) => {
  const { isAuthenticated, user } = useAppSelector((state) => state.auth);

  return isAuthenticated && user?.role === "admin" ? (
    children
  ) : isAuthenticated ? (
    <Navigate to={`/dashboard/${user?.role}`} replace />
  ) : (
    <Navigate to="/login" replace />
  );
};

export default AdminProtectedRoute;
