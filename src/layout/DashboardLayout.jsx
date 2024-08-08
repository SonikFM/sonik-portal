import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import { LoadScript } from "@react-google-maps/api";

const libraries = ["places"];
const googleMapsApiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;

export const DashboardLayout = () => {
  return (
    <div className="flex h-auto min-h-screen bg-grey-dark">
      <Sidebar />
      <div className="w-full lg:left-[266px] lg:w-[calc(100%-266px)] h-full flex flex-col pt-[88px] relative">
        <LoadScript googleMapsApiKey={googleMapsApiKey} libraries={libraries}>
          <Outlet />
        </LoadScript>
      </div>
    </div>
  );
};

export default DashboardLayout;
