import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import AppLoader from "@/components/AppLoader";

const PublicRoute = () => {
  const { isLoading, user } = useSelector(state => state.app);
  const location = useLocation();

  if (isLoading) {
    return <AppLoader />;
  }

  if (user?._id) {
    const queryParams = new URLSearchParams(location.search);
    const redirectTo = queryParams.get("redirect") || "/dashboard";
    return <Navigate to={redirectTo} />;
  }

  return <Outlet />;
};

export default PublicRoute;
