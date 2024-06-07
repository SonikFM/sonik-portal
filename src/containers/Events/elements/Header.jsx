import SearchInput from "@/components/SearchInput";
import { Button } from "@/components/ui/button";
import {
	DropdownMenu,
	DropdownMenuCheckboxItem,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import CalendarIcon from "@/svgs/CalendarIcon";
import FilterIcon from "@/svgs/FilterIcon";
import SettingsIcon from "@/svgs/SettingsIcon";
import UnOrderListIcon from "@/svgs/UnOrderListIcon";
import { ChevronDown } from "lucide-react";
import React, { useState } from "react";
const options = [
	"Last 7 days",
	"This week",
	"This month",
	"Last month",
	"Last 3 months",
];
const Header = ({ table }) => {
	const [value, setValue] = useState("Last 7 days");
	return (
		<div className="flex flex-wrap items-center gap-4 py-4 xl:flex-nowrap xl:justify-between">
			<div className="flex gap-3">
				<Button variant="outline" size="sm">
					Today
				</Button>
				<div className="flex shrink-0" >
					<DropdownMenu>
						<DropdownMenuTrigger asChild className="!rounded-r-none h-9">
							<Button variant="outline">
								{value} <ChevronDown className="w-4 h-4 ml-2" />
							</Button>
						</DropdownMenuTrigger>
						<DropdownMenuContent align="end">
							{options.map((i) => {
								return (
									<DropdownMenuItem key={i} onClick={(e) => setValue(i)}>
										{i}
									</DropdownMenuItem>
								);
							})}
						</DropdownMenuContent>
					</DropdownMenu>
					<div className="flex items-center gap-2 p-2 pr-4 text-sm font-medium border border-l-0 rounded-r-lg h-9 bg-grey-dark border-grey-light text-grey-100">
						<CalendarIcon/><span>Feb 04 - Feb 11 2024</span>
					</div>
				</div>
			</div>
			<div className="flex gap-3">
				<Button size="sm" className="gap-1">
					<UnOrderListIcon />
				</Button>
                <SearchInput className="h-9" />
				<Button variant="outline" size="sm" className="gap-1">
					<FilterIcon /> Filter
				</Button>
				<Button variant="outline" size="sm">
					<SettingsIcon />
				</Button>
			</div>
		</div>
	);
};

export default Header;
