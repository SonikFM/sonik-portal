import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import DeleteIcon from "@/svgs/DeleteIcon";
import MenuIcon from "@/svgs/MenuIcon";
import MessageIcon from "@/svgs/MessageIcon";
import StarIcon from "@/svgs/StarIcon";
import TicketIcon from "@/svgs/TicketIcon";
import React from "react";

const Guest = ({ className, ...rest }) => {
	return (
		<div className={cn("flex gap-3 items-center py-4", className)} {...rest}>
			<div className="flex items-center justify-center w-10 h-10 rounded-full bg-grey-dark shrink-0">
				<MessageIcon className="w-5 h-5 text-pink" />
			</div>
			<div className="w-full shrink">
				<Label className="font-medium text-white">Add your first guest</Label>
				<p className="text-xs text-grey-100">
					Invite guests to collaborate in this event
				</p>
			</div>
			<Button variant="destructive" className="flex gap-2 text-xs bg-pink">
				Add Guest
			</Button>
		</div>
	);
};

export default Guest;
