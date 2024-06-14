import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import DeleteIcon from "@/svgs/DeleteIcon";
import MenuIcon from "@/svgs/MenuIcon";
import StarIcon from "@/svgs/StarIcon";
import React from "react";

const Artist = ({ className, ...rest }) => {
	return (
		<div className={cn("flex gap-3 items-center py-4", className)} {...rest}>
			<MenuIcon className="text-grey-100 shrink-0" />
			<Avatar className="shrink-0">
				<AvatarImage src="https://github.com/shadcn.png" />
				<AvatarFallback>CN</AvatarFallback>
			</Avatar>
			<Label className="w-full font-medium text-white shrink">Shophia Williams</Label>
			<StarIcon className="text-grey-100 shrink-0" />{" "}
			<DeleteIcon className="text-grey-100 shrink-0" />
		</div>
	);
};

export default Artist;
