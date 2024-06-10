

import * as React from "react";
import {
	BadgeCheckIcon,
	Check,
	ChevronRight,
	ChevronsUpDown,
} from "lucide-react";
import profile from "@/assets/images/profile.png";

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

export function UserDropdown() {
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
					<Avatar className="w-10 h-10 rounded-full bg-warning">
						<AvatarImage src={profile} />
						<AvatarFallback>SO</AvatarFallback>
					</Avatar>
					<div className="flex flex-col text-left w-[calc(100%-80px)] truncate shrink">
						<h3 className="flex text-sm font-medium gap-1.5 ">
							Sophia Williams
							<BadgeCheckIcon className="w-5 h-5 stroke-grey-dark fill-pink" />
						</h3>
						<p className="mt-1 text-xs text-grey-100">sophia@alignui.com</p>
					</div>
					<ChevronRight className="w-6 h-6 p-[2px] text-grey-100 shrink-0" />
				</Button>
			</PopoverTrigger>
			<PopoverContent className="w-[200px] p-0">
				<Command>
					<CommandGroup>
						<CommandList>
							<CommandItem>Porfile</CommandItem>
							<CommandItem>Settings</CommandItem>
							<CommandItem>Logout</CommandItem>
						</CommandList>
					</CommandGroup>
				</Command>
			</PopoverContent>
		</Popover>
	);
}
