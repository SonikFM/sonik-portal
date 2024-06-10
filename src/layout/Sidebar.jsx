import { OrganizationDropdown } from "@/components/OrganizationDropdown";
import { UserDropdown } from "@/components/UserDropdown";
import { cn } from "@/lib/utils";
import { Icon } from "@/svgs";
import { ChevronRight } from "lucide-react";
import React from "react";
import { useTranslation } from "react-i18next";
import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
	const location = useLocation();
	const activeRoute = location?.pathname;
	const { t } = useTranslation("navigations");
	const navigations = t("mainNavigation", { returnObjects: true });
	const settings = t("settingsNavigation", { returnObjects: true });
	return (
		<div className="w-full border-r max-w-272 border-r-grey-light">
			<div className="p-3">
				<OrganizationDropdown />
			</div>
			<div className="max-h-[calc(100%-178px)] h-full ">
				<div className="flex flex-col justify-between h-full py-5 mx-5 border-black border-y ">
					<div className="w-full">
						<div className="p-1 mb-2">
							<h2 className="text-xs font-medium text-grey">{t("main")}</h2>
						</div>
						<div className="flex flex-col gap-1">
							{navigations.map((navigate) => {
								const navCls = cn(
									"flex gap-2 px-3 text-sm font-medium items-center rounded-lg h-9 relative hover:bg-grey-200",
									activeRoute === navigate.url
										? "text-white bg-grey-200 before:block before:absolute before:w-1 before:h-5 before:bg-primary before:-left-5 before:rounded-r"
										: "text-grey-100"
								);
								const iconCls = cn(
									"h-5 w-5",
									activeRoute === navigate.url
										? "text-primary"
										: "text-grey-100"
								);
								return (
									<Link key={navigate.id} to={navigate.url} className={navCls}>
										<Icon className={iconCls} name={navigate.icon} />
										{navigate.label}
										<span className="absolute right-3">
											{navigate.id == "dashboard" && (
												<ChevronRight className="h-4 text-grey-100" />
											)}
										</span>
									</Link>
								);
							})}
						</div>
					</div>
					<div className="flex flex-col gap-1 mt-5">
						{settings.map((navigate) => {
							const navCls = `flex gap-2 px-3 text-sm font-medium items-center rounded-lg h-9 relative hover:bg-grey-200 ${
								activeRoute === navigate.url
									? "text-white bg-grey-200 before:block before:absolute before:w-1 before:h-5 before:bg-primary before:-left-5 before:rounded-r"
									: "text-grey-100"
							}`;
							const iconCls = ` h-5 w-5 ${
								activeRoute === navigate.url ? "text-primary" : "text-grey-100"
							}`;
							return (
								<Link key={navigate.id} to={navigate.url} className={navCls}>
									<Icon className={iconCls} name={navigate.icon} /> {navigate.label}
								</Link>
							);
						})}
					</div>
				</div>
			</div>
			<div className="p-3">
				<UserDropdown />
			</div>
		</div>
	);
};

export default Sidebar;
