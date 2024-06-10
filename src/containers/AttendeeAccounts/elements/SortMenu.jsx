

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuRadioGroup,
	DropdownMenuRadioItem,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import SortIcon from "@/svgs/SortIcon";

export const SortMenu = ({ handleChange, value }) => {
    const [sort, setSort] = useState('latest')
	const onChange = (value) => (e) => {
		setSort(value);
	};
	return (
		<DropdownMenu>
			<DropdownMenuTrigger
				asChild
				className="h-8 font-normal bg-grey-dark border-grey-light text-grey-100"
			>
				<Button variant="outline" className="gap-2" > <SortIcon/> Sort by</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent className="w-56">
				<DropdownMenuRadioGroup value={sort} onValueChange={onChange}>
					<DropdownMenuRadioItem value="lowest">Lowest</DropdownMenuRadioItem>
					<DropdownMenuRadioItem value="highest">Highest</DropdownMenuRadioItem>
					<DropdownMenuRadioItem value="latest">Latest</DropdownMenuRadioItem>
					<DropdownMenuRadioItem value="popular">Popular</DropdownMenuRadioItem>
				</DropdownMenuRadioGroup>
			</DropdownMenuContent>
		</DropdownMenu>
	);
};
