import React from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import SearchIcon from "@/svgs/SearchIcon";
import BellIcon from "@/svgs/BellIcon";
import CalendarCheckIcon from "@/svgs/CalendarCheckIcon";
import { Button } from "@/components/ui/button";
import { PlusIcon } from "lucide-react";
import MenuIcon from "@/svgs/MenuIcon";
import { toggleSidebar } from "@/store/global/slice";

export const DashboardHeader = ({
	hasActionButton = false,
	title,
	description,
	icon,
	hasNotifications = true,
	hasSearch = true,
	onIconClick,
	children,
}) => {
	const { i18n } = useTranslation();

	const handleLanguageChange = () => {
		i18n.changeLanguage(i18n.language === "en" ? "fr" : "en");
	};
	
	const dispatch = useDispatch()
	const {app:{sidebar}} = useSelector(state=>state) 
	console.log({sidebar})

	const toggleDrawer = () => {
		dispatch(toggleSidebar())
	}
	return (
		<div className=" fixed top-0 left-0 lg:left-[272px] w-full lg:w-[calc(100%-272px)] bg-grey-dark z-[48]  px-4 md:px-8">
			<div className="border-b border-grey-light flex items-center justify-between h-[88px] gap-5 bg-grey-dark w-full">
				<div className="flex items-center gap-3 shrink">
					<div
						className="flex items-center justify-center w-10 h-12 text-white border rounded-md cursor-pointer lg:hidden border-grey-light shrink-0"
						onClick={toggleDrawer}
					>
						<MenuIcon />
					</div>

					{icon && (
						<div
							className="items-center justify-center hidden w-12 h-12 border rounded-full cursor-pointer lg:flex border-grey-light shrink-0 "
							onClick={onIconClick}
						>
							{icon}
						</div>
					)}
					<div className="shrink">
						<h4 className="h-6 overflow-hidden text-lg font-medium leading-5 text-white ">
							{title}
						</h4>
						{description && (
							<p className="h-5 overflow-hidden text-sm text-grey-100">
								{description}
							</p>
						)}
					</div>
				</div>
				<div className="flex gap-3 text-grey-100">
					{hasSearch && (
						<div className="flex items-center justify-center w-10 shrink-0">
							<SearchIcon />
						</div>
					)}
					{hasNotifications && (
						<div className="flex items-center justify-center w-10 shrink-0">
							<BellIcon />
						</div>
					)}
					{children ||
						(hasActionButton && (
							<>
								<Button variant="outline" className="flex gap-1 bg-transparent">
									<CalendarCheckIcon /> Schedule
								</Button>
								<Button className="flex gap-1">
									<PlusIcon /> New Event
								</Button>
							</>
						))}
				</div>
			</div>
		</div>
	);
};

export default DashboardHeader;
