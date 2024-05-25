import { useGetTodosQuery } from "@/apis/todos";
import { Button } from "@/components/ui/button";
import React from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

export const DashboardLayout = () => {
	const state = useSelector((state) => state.app);
	const { data, error, isLoading } = useGetTodosQuery();
	const {i18n} = useTranslation();

	const handleLanguageChange = () => {
        i18n.changeLanguage(i18n.language === "en"? "fr": "en")
    };
	return (
		<div className="h-full">
			<Sidebar/>
			<div className="p-10 text-white">
				<Button onClick={handleLanguageChange} >Change language</Button>
				<Outlet />
			</div>
		</div>
	);
};

export default DashboardLayout;
