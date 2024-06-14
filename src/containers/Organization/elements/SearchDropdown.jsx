import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
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
import MacbookIcon from "@/svgs/MacbookIcon";
import React from "react";
import user from "@/assets/images/users/1.png";
import ClockIcon from "@/svgs/ClockIcon";
import MinusIcon from "@/svgs/MinusIcon";

const SearchDropdown = ({ value, onValueChange }) => {
	const [open, setOpen] = React.useState(false);
	const handleChange = (e) => {
		onValueChange(e);
		if (e.length > 0) {
			setOpen(true);
		} else {
			setOpen(false);
		}
	};
	return (
		<Command
			className="bg-transparent cmdk-input-wrapper:bg-primary"
			open={open}
			onOpenChange={setOpen}
		>
			<CommandInput
				placeholder="Search..."
				value={value}
				onValueChange={handleChange}
				className="border-grey-light text-grey-100 bg-grey-dark"
				wrapperClass="border border-grey-light rounded-md text-grey-100"
			/>
			{open && (
				<CommandList className="w-[418px] max-h-96 rounded-xl border border-grey-light p-4 bg-grey-dark mt-3 text-grey-100">
					<div className="flex justify-between w-full p-0 pb-4 text-grey-100">
						<div className="flex items-center gap-2">
							<MacbookIcon />
							<h4 className="text-sm font-medium text-white">Status Tracker</h4>
						</div>
						<Button size="xs" variant="outline">
							See all
						</Button>
					</div>
					<CommandEmpty>No results found.</CommandEmpty>
					<CommandGroup heading="Absent" className="p-0">
						<CommandItem className="gap-3.5 justify-between data-[selected=true]:bg-grey-light">
							<div className="flex items-center gap-3.5">
								<Avatar>
									<AvatarImage src={user} /> <AvatarFallback>AB</AvatarFallback>
								</Avatar>
								<div>
									<h3 className="mb-1 text-sm font-medium text-white">
										James Brown 🧠
									</h3>
									<p className="text-xs text-grey-100">Replaced by Arthur T.</p>
								</div>
							</div>
							<div className="flex items-center h-5 gap-1 pl-1 pr-2 text-xs rounded-full bg-grey-100/[16%] text-grey">
								<MinusIcon className="w-3 h-3" /> Absent
							</div>
						</CommandItem>
					</CommandGroup>
					<CommandSeparator className="my-2 bg-grey-light" />
					<CommandGroup heading="Away" className="gap-4">
						<CommandItem className="gap-3.5 justify-between data-[selected=true]:bg-grey-light mb-4 ">
							<div className="flex items-center gap-3.5">
								<Avatar>
									<AvatarImage src={user} /> <AvatarFallback>AB</AvatarFallback>
								</Avatar>
								<div>
									<h3 className="mb-1 text-sm font-medium text-white">
										James Brown 🧠
									</h3>
									<p className="text-xs text-grey-100">Replaced by Arthur T.</p>
								</div>
							</div>
							<div className="flex items-center gap-1 text-xs rounded-full h-5 pl-1 pr-2 bg-warning-light/[16%] text-warning">
								<ClockIcon className="w-3 h-3" />
								25m
							</div>
						</CommandItem>
						<CommandItem className="gap-3.5 justify-between data-[selected=true]:bg-grey-light ">
							<div className="flex items-center gap-3.5">
								<Avatar>
									<AvatarImage src={user} /> <AvatarFallback>AB</AvatarFallback>
								</Avatar>
								<div>
									<h3 className="mb-1 text-sm font-medium text-white">
										James Brown 🧠
									</h3>
									<p className="text-xs text-grey-100">Replaced by Arthur T.</p>
								</div>
							</div>
							<div className="flex items-center gap-1 text-xs rounded-full h-5 pl-1 pr-2 bg-warning-light/[16%] text-warning">
								<ClockIcon className="w-3 h-3" />
								25m
							</div>
						</CommandItem>
					</CommandGroup>
				</CommandList>
			)}
		</Command>
	);
};

export default SearchDropdown;
