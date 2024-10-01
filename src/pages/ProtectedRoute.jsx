import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import AppLoader from "@/components/AppLoader";

const ProtectedRoute = () => {
  const { user, isLoading } = useSelector(state => state.app);
  const { pathname } = useLocation();

  if (isLoading) {
    return <AppLoader />;
  }
  // if (user?._id) {
  return <Outlet />;
  // }
  // return <Navigate to={`/login?redirect=${pathname}`} />;
};

export default ProtectedRoute;
