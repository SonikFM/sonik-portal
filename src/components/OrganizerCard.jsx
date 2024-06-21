import { cn } from "@/lib/utils";
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import PhoneIcon from "@/svgs/PhoneIcon";

const OrganizerCard = ({ className, data }) => {
	return (
		<div className={cn("rounded-2xl border-grey-light border p-4", className)}>
			<div className="flex items-center w-full gap-3">
				<div className="flex items-center justify-center w-10 h-10 border-2 rounded-full border-grey-light shrink-0">
					<Avatar className="w-10 h-10 border-2 border-grey-light shrink-0">
						<AvatarImage src={data.organization.image} alt="event image" />
						<AvatarFallback>AB</AvatarFallback>
					</Avatar>
				</div>
				<h3 className="font-medium text-white truncate shrink">{data.organization.name}</h3>
			</div>
			<div className="mt-3.5 py-3.5  border-t border-grey-light">
				<div className="flex items-center w-full gap-3">
					<div className="flex items-center justify-center w-10 h-10 border-2 rounded-full border-grey-light shrink-0">
						<Avatar className="w-10 h-10 border-2 border-grey-light shrink-0">
							<AvatarImage src={data.organizer.image} alt="event image" />
							<AvatarFallback>AB</AvatarFallback>
						</Avatar>
					</div>
					<div className="flex flex-col justify-center">
						<h3 className="text-sm font-medium truncate shrink mb-[2px] text-white">
							{data.organizer.name}
						</h3>
						<p className="text-xs text-grey-100">Owner</p>
					</div>
				</div>
			</div>
			<p className="text-xs text-grey-100 mb-1.5">Phone number</p>
			<div className="text-sm  text-white truncate shrink mb-[2px] flex gap-2">
                <PhoneIcon/>
				<span>+ 1 (702) 555-3890</span>
			</div>
		</div>
	);
};

export default OrganizerCard;
