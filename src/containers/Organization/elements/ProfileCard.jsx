import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import React from "react";
import event_img from "@/assets/images/events/event-1.png";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { MoreVerticalIcon } from "lucide-react";

const ProfileCard = () => {
	return (
		<div className="flex items-center justify-between p-3 border border-grey-light rounded-xl">
			<div className="flex items-center gap-3">
				<Avatar className="w-10 h-10 p-1.5 border-2 rounded-full border-grey-light ">
					<AvatarImage src={event_img} />
					<AvatarFallback>GO</AvatarFallback>
				</Avatar>
				<h3 className="text-sm font-medium text-white">Goodlayers.com</h3>
			</div>
			<DropdownMenu>
				<DropdownMenuTrigger asChild>
					<Button
						variant="ghost"
						className="w-8 h-8 p-0 border border-transparent text-grey-100 hover:text-grey-100 hover:bg-transparent hover:border-grey-light"
					>
						<span className="sr-only">Open menu</span>
						<MoreVerticalIcon className="w-4 h-4" />
					</Button>
				</DropdownMenuTrigger>
				<DropdownMenuContent align="end">
					<DropdownMenuLabel>Actions</DropdownMenuLabel>
					<DropdownMenuItem>Edit</DropdownMenuItem>
					<DropdownMenuItem>View</DropdownMenuItem>
					<DropdownMenuItem>Delete</DropdownMenuItem>
				</DropdownMenuContent>
			</DropdownMenu>
		</div>
	);
};

export default ProfileCard;
