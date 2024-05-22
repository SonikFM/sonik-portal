"use client";

import * as React from "react";
import { Check, ChevronsUpDown } from "lucide-react";
import logo from "@/assets/images/logo.svg";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
	Command,
	CommandEmpty,
	CommandGroup,
	CommandInput,
	CommandItem,
} from "@/components/ui/command";
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@/components/ui/popover";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

export function OrganizationDropdown() {
	const [open, setOpen] = React.useState(false);
	const [value, setValue] = React.useState("");

	return (
		<Popover open={open} onOpenChange={setOpen}>
			<PopoverTrigger asChild>
				<Button
					variant="ghost"
					role="combobox"
					aria-expanded={open}
					className="justify-between w-full h-auto gap-3 p-3 text-white hover:bg-grey-200 hover:text-white "
				>
					<Avatar className="w-10 h-10 rounded-full">
						<AvatarImage src={logo} />
						<AvatarFallback>SO</AvatarFallback>
					</Avatar>
					<div className="flex flex-col text-left w-[calc(100%-80px)] truncate shrink">
						<h3 className="text-sm font-medium">Sonik</h3>
						<p className="mt-1 text-xs text-grey-100">Internal Portala</p>
					</div>
					<ChevronsUpDown className="w-6 h-6 p-[2px] border rounded-md text-grey-100 shrink-0 border-grey-100" />
				</Button>
			</PopoverTrigger>
			<PopoverContent className="w-[200px] p-0">
				<Command>
					<CommandInput placeholder="Search framework..." />
					<CommandEmpty>No framework found.</CommandEmpty>
					<CommandGroup></CommandGroup>
				</Command>
			</PopoverContent>
		</Popover>
	);
}
