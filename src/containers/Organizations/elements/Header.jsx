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
import GridIcon from "@/svgs/GridIcon";
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
const Header = ({ view, toggleView }) => {
	const toggleListView = (v) => (e) => {
		toggleView(v);
	};
	return (
		<div className="flex flex-wrap items-center gap-4 py-4 xl:flex-nowrap xl:justify-between">
			<div className="flex gap-3">
				<Button
					variant={view === "grid" ? "" : "outline"}
					size="sm"
					onClick={toggleListView("grid")}
				>
					<GridIcon />
				</Button>
				<Button
					variant={view === "list" ? "" : "outline"}
					size="sm"
					onClick={toggleListView("list")}
				>
					<UnOrderListIcon />
				</Button>
				<SearchInput className="h-9" />
			</div>
			<div className="flex gap-3">
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
