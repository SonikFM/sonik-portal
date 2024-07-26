import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

export const DashboardLayout = () => {
  return (
    <div className="flex h-auto min-h-screen bg-grey-dark">
      <Sidebar />
      <div className="w-full lg:left-[266px] lg:w-[calc(100%-266px)] h-full flex flex-col pt-[88px] relative">
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
