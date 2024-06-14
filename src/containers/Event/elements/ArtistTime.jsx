import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import DeleteIcon from "@/svgs/DeleteIcon";
import MenuIcon from "@/svgs/MenuIcon";
import StarIcon from "@/svgs/StarIcon";
import TimerIcon from "@/svgs/TimerIcon";
import React from "react";

const ArtistTime = ({ className, ...rest }) => {
	return (
		<div className={cn("flex gap-2 md:gap-3 items-center py-4", className)} {...rest}>
			<MenuIcon className="text-grey-100 shrink-0" />
			<div className="h-10 rounded-[10px] text-sm px-3 py-2.5 bg-grey-dark text-grey-100 w-2/3 shrink  tuncate ">
				Daniel Sams{" "}
			</div>
			<div className="h-10 rounded-[10px] text-sm px-3 py-2.5 bg-grey-dark text-grey-100 w-1/3  flex gap-2 tuncate ">
				{" "}
				<TimerIcon /> <span className="truncate">Daniel Sams</span>{" "}
			</div>
			<DeleteIcon className="mr-2 text-grey-100 shrink-0" />
		</div>
	);
};

export default ArtistTime;
