

import React from "react";
import { Button } from "@/components/ui/button";
import {
	DropdownMenu,
	DropdownMenuCheckboxItem,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export const PaginationMenu = ({ handleChange, pagination }) => {
	const onChange = (value) => (e) => {
		handleChange(value);
	};
	return (
		<DropdownMenu>
			<DropdownMenuTrigger
				asChild
				className="h-8 font-normal bg-grey-dark border-grey-light text-grey-100"
			>
				<Button variant="outline">{pagination.pageSize} / Page</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent className="w-56">
				<DropdownMenuLabel>Rows per page</DropdownMenuLabel>
				<DropdownMenuSeparator />
				<DropdownMenuItem onClick={onChange("8")}>8</DropdownMenuItem>
				<DropdownMenuItem onClick={onChange("12")}>12</DropdownMenuItem>
				<DropdownMenuItem onClick={onChange("16")}>16</DropdownMenuItem>
				<DropdownMenuItem onClick={onChange("20")}>20</DropdownMenuItem>
				<DropdownMenuItem onClick={onChange("32")}>32</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	);
};
