import { Navigate } from "react-router-dom";
import { useAppSelector } from "../redux/hooks";

const UserProtectedRoute = ({ children }: { children: JSX.Element }) => {
  const { isAuthenticated, user } = useAppSelector((state) => state.auth);

  return isAuthenticated && user?.role === "user" ? (
    children
  ) : isAuthenticated ? (
    <Navigate to={`/dashboard/${user?.role}`} replace />
  ) : (
    <Navigate to="/login" replace />
  );
};

export default UserProtectedRoute;
