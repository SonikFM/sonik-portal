import Login from "@/containers/Auth/Login";
import React from "react";
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

const Index = () => {
	const { user } = useSelector((state) => state.app);
	const pathname = useLocation();

	if (user?._id) {
		const queryParams = new URLSearchParams(location.search);
		const redirectTo = queryParams.get("redirect") || "/dashboard";
		return <Navigate to={redirectTo} />;
	}
	return <Login />;
};

export default Index;
