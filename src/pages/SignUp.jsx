import SignUp from "@/containers/Auth/SignUp";
import { AuthLayout } from "@/layout";
import React from "react";

const Index = () => {
	return (
		<AuthLayout>
			<SignUp />
		</AuthLayout>
	);
};

export default Index;
