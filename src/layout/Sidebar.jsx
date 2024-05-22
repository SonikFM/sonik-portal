import { OrganizationDropdown } from "@/components/OrganizationDropdown";
import { UserDropdown } from "@/components/UserDropdown";
import { FAVS_NAVIGATION, MAIN_NAVIGATION, SETTINGS_NAVIGATION } from "@/contants/navigation";
import { cn } from "@/lib/utils";
import { ChevronRight } from "lucide-react";
import React from "react";
import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
	const location = useLocation();
	const activeRoute = location?.pathname;
	console.log({ location, activeRoute });
	return (
		<div className="w-full border-r max-w-272 border-r-grey-light">
			<div className="p-3">
				<OrganizationDropdown />
			</div>
			<div className="max-h-[calc(100%-178px)] h-full ">
				<div className="flex flex-col justify-between h-full py-5 mx-5 border-black border-y ">
					<div className="w-full">
						<div className="p-1 mb-2">
							<h2 className="text-xs font-medium text-grey">MAIN</h2>
						</div>
						<div className="flex flex-col gap-1">
							{MAIN_NAVIGATION.map((navigate) => {
								const navCls = `flex gap-2 px-3 text-sm font-medium items-center rounded-lg h-9 relative hover:bg-grey-200 ${
									activeRoute === navigate.url
										? "text-white bg-grey-200 before:block before:absolute before:w-1 before:h-5 before:bg-primary before:-left-5 before:rounded-r"
										: "text-grey-100"
								}`;
								const iconCls = ` h-5 w-5 ${
									activeRoute === navigate.url
										? "text-primary"
										: "text-grey-100"
								}`;
								return (
									<Link key={navigate.id} to={navigate.url} className={navCls}>
										<navigate.icon className={iconCls} /> {navigate.label}{" "}
										<span className="absolute right-3">
											{navigate.id == "dashboard" && (
												<ChevronRight className="h-4 text-grey-100" />
											)}
										</span>
									</Link>
								);
							})}
						</div>
                        <div className="p-1 mt-5 mb-2">
							<h2 className="text-xs font-medium text-grey">FAVS</h2>
						</div>
						<div className="flex flex-col gap-1">
							{FAVS_NAVIGATION.map((navigate, index) => {
								const navCls = `flex gap-2 px-3 text-sm font-medium items-center rounded-lg h-9 relative hover:bg-grey-200 ${
									activeRoute === navigate.url
										? "text-white bg-grey-200 before:block before:absolute before:w-1 before:h-5 before:bg-primary before:-left-5 before:rounded-r"
										: "text-grey-100"
								}`;
								return (
									<Link key={navigate.id} to={navigate.url} className={navCls}>
										<div className={cn("w-3 h-3 border-2 border-transparent rounded-full", navigate.icon)}></div> {navigate.label}{" "}
										<span className="absolute w-8 h-5 text-center border-2 rounded right-3 border-grey-200">
                                            ⌘{index+1}
										</span>
									</Link>
								);
							})}
						</div>
					</div>
					<div className="flex flex-col gap-1 mt-5">
						{SETTINGS_NAVIGATION.map((navigate) => {
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
									<navigate.icon className={iconCls} /> {navigate.label}{" "}
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
