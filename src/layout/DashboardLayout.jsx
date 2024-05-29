import { useGetTodosQuery } from "@/apis/todos";
import { Button } from "@/components/ui/button";
import React from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import DashboardHeader from "./DashboardHeader";

export const DashboardLayout = () => {
	const state = useSelector((state) => state.app);
	const { data, error, isLoading } = useGetTodosQuery();
	const { i18n } = useTranslation();

	const handleLanguageChange = () => {
		i18n.changeLanguage(i18n.language === "en" ? "fr" : "en");
	};
	return (
		<div className="flex h-auto min-h-screen bg-grey-dark">
			<Sidebar />
			<div className="w-[calc(100%-272px)] h-full flex flex-col pt-[88px]">
				<DashboardHeader />
				<div className="px-8" >
					<Outlet />
				</div>
			</div>
		</div>
	);
};

export default DashboardLayout;
