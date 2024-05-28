import { useGetTodosQuery } from "@/apis/todos";
import { Button } from "@/components/ui/button";
import React from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import pattren from "@/assets/images/bg-pattren.png";
import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

export const AuthLayout = ({ children }) => {
	const state = useSelector((state) => state.app);
	const { data, error, isLoading } = useGetTodosQuery();

	return (
		<div className="relative flex items-center justify-center w-full h-auto min-h-screen bg-grey-dark ">
			<img
				className="absolute top-0 bottom-0 left-0 right-0 w-full max-w-6xl m-auto "
				src={pattren}
				alt="bg-pattren"
			></img>
			<div className="relative w-full max-w-md py-16 z-1"><Outlet/></div>
			<Footer/>
		</div>
	);
};

export default AuthLayout;
