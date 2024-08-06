import { Outlet } from "react-router-dom";

export const Layout = () => {
  return (
    <div className="flex min-h-screen bg-grey-dark">
      {/* <Sidebar/> */}
      <Outlet />
    </div>
  );
};

export default Layout;
