

import * as React from "react";
import { ChevronDown } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
	Command,
	CommandEmpty,
	CommandGroup,
	CommandInput,
	CommandItem,
	CommandList,
	CommandSeparator,
} from "@/components/ui/command";
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";

export function Select({
	icon,
	className,
	hasSearch,
	options = [],
	placeholder,
	...rest
}) {
	const [open, setOpen] = React.useState(false);
	const [value, setValue] = React.useState(options?.[0] || "");

	return (
		<Popover open={open} onOpenChange={setOpen}>
			<PopoverTrigger asChild>
				<Button
					variant="ghost"
					role="combobox"
					aria-expanded={open}
					className={cn(
						"justify-between w-full h-auto gap-3 p-2.5 text-grey-light !hover:text-white hover:bg-grey-200 border border-grey-light h-10 font-normal",
						className
					)}
					{...rest}
				>
					<div className="flex text-left w-[calc(100%-80px)] truncate shrink gap-2">
						{icon}{" "}
						{value?.label ? (
							<p className="text-sm text-white ">
								{value?.label}
							</p>
						) : (
							<p className="text-sm text-grey-100 ">
								{placeholder || "Select"}
							</p>
						)}
					</div>
					<ChevronDown className="w-5 h-5 text-grey-100 shrink-0 border-grey-100" />
				</Button>
			</PopoverTrigger>
			<PopoverContent className="p-0 min-w-72" align="right">
				<Command>
					{hasSearch && (
						<CommandInput placeholder="Type a command or search..." />
					)}
					<CommandList>
						<CommandEmpty>No results found.</CommandEmpty>
						<CommandGroup>
							{options.map((option, index) => (
								<CommandItem
									key={`item-${option.value}-${index}`}
									onSelect={() => {
										setOpen(false);
										setValue(option.value);
									}}
									value={option.value}
								>
									{option.label}
								</CommandItem>
							))}
						</CommandGroup>
					</CommandList>
				</Command>
			</PopoverContent>
		</Popover>
	);
}
