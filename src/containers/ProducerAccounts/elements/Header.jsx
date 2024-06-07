import SearchInput from "@/components/SearchInput";
import { Button } from "@/components/ui/button";
import { TabsList, TabsTrigger } from "@/components/ui/tabs";
import FilterIcon from "@/svgs/FilterIcon";
import SettingsIcon from "@/svgs/SettingsIcon";
import ShareIcon from "@/svgs/ShareIcon";
import UnOrderListIcon from "@/svgs/UnOrderListIcon";
import { PlusIcon } from "lucide-react";
import React from "react";
import { SortMenu } from "./SortMenu";

const Header = ({ table }) => {
	return (
		<>
			<div className="flex items-center justify-between pb-5 border-b border-grey-light">
				<div className="">
					<h3 className="text-lg font-medium text-white">Producer Accounts</h3>
					<p className="text-sm text-grey-100">
						Display all the producer and essential details.
					</p>
				</div>
				<div className="flex gap-3">
					<Button variant="outline" className="gap-2">
						<ShareIcon /> Export
					</Button>
					<Button className="gap-1">
						<PlusIcon /> Invite Producer
					</Button>
				</div>
			</div>
			<div className="flex flex-wrap items-center gap-4 py-4 xl:flex-nowrap xl:justify-between">
				<div className="flex gap-3">
					<TabsList className="flex justify-around w-full p-1 rounded-lg bg-grey-200 h-9">
						<TabsTrigger className="w-24 rounded-md" value="all">
							All
						</TabsTrigger>
						<TabsTrigger className="w-24 rounded-md" value="active">
							Active
						</TabsTrigger>
						<TabsTrigger className="w-24 rounded-md" value="inactive">
							Inactive
						</TabsTrigger>
					</TabsList>
				</div>
				<div className="flex gap-3">
					<SearchInput className="h-9" />
					<Button variant="outline" size="sm" className="gap-1">
						<FilterIcon /> Filter
					</Button>
					<SortMenu/>
				</div>
			</div>
		</>
	);
};

export default Header;
