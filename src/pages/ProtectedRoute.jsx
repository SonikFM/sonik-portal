import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import AppLoader from "@/components/AppLoader";

const ProtectedRoute = () => {
  const { user, isLoading } = useSelector(state => state.app);
  const { pathname } = useLocation();
  if (!user?.id && isLoading) {
    return <AppLoader />;
  }
  return user?._id ? (
    <Outlet />
  ) : (
    <Navigate to={pathname ? `/login?redirect=${pathname}` : "/login"} />
  );
};

export default ProtectedRoute;
