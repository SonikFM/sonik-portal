

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
	CommandList,
} from "@/components/ui/command";
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@/components/ui/popover";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { portals } from "@/contants/portals";

export function OrganizationDropdown() {
	const [open, setOpen] = React.useState(false);
	const [value, setValue] = React.useState("internal");
	const currentPortal = portals.find((i) => i.value === value) || {};
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
						<h3 className="text-sm font-medium">{currentPortal.label}</h3>
						<p className="mt-1 text-xs capitalize text-grey-100">
							{currentPortal.value}
						</p>
					</div>
					<ChevronsUpDown className="w-6 h-6 p-[2px] border rounded-md text-grey-100 shrink-0 border-grey-100" />
				</Button>
			</PopoverTrigger>
			<PopoverContent className="w-[200px] p-0 ">
				<Command>
					<CommandInput placeholder="Search framework..." />
					<CommandList>
						<CommandEmpty>No results found.</CommandEmpty>
						<CommandGroup>
							{portals.map((portal) => (
								<CommandItem
									key={portal.value}
									onSelect={() => {
										setValue(portal.value);
										setOpen(false);
									}}
								>
									{portal.label}
									<span className="capitalize">({portal.key})</span>
								</CommandItem>
							))}
						</CommandGroup>
					</CommandList>
				</Command>
			</PopoverContent>
		</Popover>
	);
}
