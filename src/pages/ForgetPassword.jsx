import ForgetPassword from "@/containers/Auth/ForgetPassword";
import { AuthLayout } from "@/layout";
import React from "react";

const Index = () => {
	return (
		<AuthLayout>
			<ForgetPassword />
		</AuthLayout>
	);
};

export default Index;
