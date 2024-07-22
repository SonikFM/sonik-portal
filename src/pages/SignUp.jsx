import SignUp from "@/containers/Auth/SignUp";
import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const Index = () => {
	const { user } = useSelector((state) => state.app);
	if (user?._id) {
		const queryParams = new URLSearchParams(location.search);
		const redirectTo = queryParams.get("redirect") || "/dashboard";
		return <Navigate to={redirectTo} />;
	}
	return <SignUp />;
};

export default Index;
