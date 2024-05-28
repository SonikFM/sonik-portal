import AppCard from "@/components/AppCard";
import React from "react";
import { useTranslation } from "react-i18next";

const Dashboard = () => {
	const [t, i18n] = useTranslation('dashboard');
	return <div>
		<AppCard/>
	</div>;
};
export default Dashboard