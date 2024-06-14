import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import React from "react";

const Profile = ({ className, ...rest }) => {
	return (
		<div className={cn("flex gap-3 items-center", className)} {...rest}>
			<Avatar className="w-12 h-12 shrink-0">
				<AvatarImage   src="https://github.com/shadcn.png" />
				<AvatarFallback>CN</AvatarFallback>
			</Avatar>
			<div className="grid gap-1" >
				<Label className="w-full text-base font-medium text-white shrink">
					Image
				</Label>
				<p className="text-sm text-grey-100">Upload a photo of you</p>
			</div>
		</div>
	);
};

export default Profile;
