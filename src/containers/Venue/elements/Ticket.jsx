import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import DeleteIcon from "@/svgs/DeleteIcon";
import MenuIcon from "@/svgs/MenuIcon";
import StarIcon from "@/svgs/StarIcon";
import TicketIcon from "@/svgs/TicketIcon";
import React from "react";

const Ticket = ({ className, ...rest }) => {
	return (
		<div className={cn("flex gap-3 items-center py-4", className)} {...rest}>
			<MenuIcon className="text-grey-100 shrink-0" />
			<div className="flex items-center justify-center w-10 h-10 rounded-full bg-grey-dark shrink-0">
				<TicketIcon className="w-5 h-5 text-pink" />
			</div>
			<div className="w-full shrink">
				<p className="text-xs text-grey-100"></p>
				<Label className="font-medium text-white">
					General addmission presale
				</Label>
			</div>
			<div className="w-20">
				<p className="text-xs text-grey-100">Quality</p>
				<Label className="font-medium text-white">
					500
				</Label>
			</div>
			<div className="w-20">
				<p className="text-xs text-grey-100">Price</p>
				<Label className="font-medium text-white">
					100$
				</Label>
			</div>
			<Button variant="destructive" className="flex gap-2" > <DeleteIcon className="text-white" />  Delete</Button>
		</div>
	);
};

export default Ticket;
