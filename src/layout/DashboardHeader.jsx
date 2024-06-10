import React from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import SearchIcon from "@/svgs/SearchIcon";
import BellIcon from "@/svgs/BellIcon";
import CalendarCheckIcon from "@/svgs/CalendarCheckIcon";
import { Button } from "@/components/ui/button";
import { PlusIcon } from "lucide-react";

export const DashboardHeader = ({
	hasActionButton = false,
	title,
	description,
	icon,
	hasNotifications = true,
	hasSearch = true,
	children
}) => {
	const state = useSelector((state) => state.app);
	const { i18n } = useTranslation();

	const handleLanguageChange = () => {
		i18n.changeLanguage(i18n.language === "en" ? "fr" : "en");
	};
	return (
		<div className=" fixed top-0 left-[272px] w-[calc(100%-272px)] bg-grey-dark z-50  px-8">
			<div className="border-b border-grey-light flex items-center justify-between h-[88px] gap-5 bg-grey-dark w-full">
				<div className="flex items-center gap-3 shrink-0">
					{icon && (
						<div className="flex items-center justify-center w-12 h-12 border rounded-full border-grey-light shrink-0">
							{icon}
						</div>
					)}
					<div>
						<h4 className="text-lg font-medium leading-5 text-white">
							{title}
						</h4>
						{description && (
							<p className="mt-1 text-sm text-grey-100">{description}</p>
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
