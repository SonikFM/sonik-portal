import Login from "@/containers/Auth/Login";
import { AuthLayout } from "@/layout";
import React from "react";

const Index = () => {
	return (
		<AuthLayout>
			<Login />
		</AuthLayout>
	);
};

export default Index;
