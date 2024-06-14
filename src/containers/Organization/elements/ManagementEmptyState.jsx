import React from "react";
import img from "@/assets/images/empty-states/hr-managment.png";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const ManagementEmptyState = () => {
	return (
		<div className="flex flex-col items-center justify-center max-w-[480px] p-5 text-center">
			<img src={img} alt="empty-management" className="mb-8 w-36 h-36" />
			<h3 className="mb-1 text-2xl font-medium text-white">Build your team</h3>
			<p className="mb-6 text-sm text-grey-100">
				<Link to="#" className="mr-1 underline w-fit whitespace-nowrap">
					Create new custom roles 
				</Link>
				and assign them to team members, or invite users into an all access
				role.
			</p>
			<Button variant="pink" size="sm">
				Invite Users
			</Button>
		</div>
	);
};

export default ManagementEmptyState;
