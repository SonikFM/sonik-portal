import { Label } from "@/components/ui/label";
import { CheckIcon, CrossIcon, XIcon } from "lucide-react";
import React from "react";

const Details = ({ title, description }) => {
	return (
		<div className="flex items-center justify-between">
			<div className="space-y-1" >
				<Label className="text-white">{title}</Label>
				{description && <p className="text-sm text-grey-100" >{description}</p>}
			</div>
			<div className="flex gap-3">
				<span className="flex items-center justify-center w-10 h-10 text-white border rounded-full cursor-pointer border-grey-300 hover:bg-grey-300 ">
					<CheckIcon className="w-4 h-4" />
				</span>
				<span className="flex items-center justify-center w-10 h-10 text-white border rounded-full cursor-pointer border-grey-300 hover:bg-grey-300 ">
					<XIcon className="w-4 h-4" />
				</span>
			</div>
		</div>
	);
};

export default Details;
