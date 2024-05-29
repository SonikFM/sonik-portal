import SearchIcon from "@/svgs/SearchIcon";
import React from "react";
import { Input } from "./ui/input";

const SearchInput = ({ placeholder, ...rest }) => {
	return (
		<div className="relative flex items-center">
			<SearchIcon className="absolute w-4 h-4 text-grey left-2 " />
			<Input
				placeholder={placeholder || "Search"}
				className="h-8 pl-8 pr-12 text-sm font-normal text-white placeholder:text-grey bg-grey-dark border-grey-light"
				{...rest}
			/>
			<span className="absolute w-8 h-5 text-xs text-center border rounded text-grey right-2 border-grey-light">
				⌘1
			</span>
		</div>
	);
};

export default SearchInput;
