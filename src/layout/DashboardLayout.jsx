import { useGetTodosQuery } from "@/apis/todos";
import React from "react";
import { useTranslation } from "react-i18next";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
export const DashboardLayout = () => {
	
	const { data, error, isLoading } = useGetTodosQuery();
	const { i18n } = useTranslation();

	const handleLanguageChange = () => {
		i18n.changeLanguage(i18n.language === "en" ? "fr" : "en");
	};


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
