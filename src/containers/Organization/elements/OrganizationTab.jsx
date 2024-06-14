import React from "react";
import ProfileCard from "./ProfileCard";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

const OrganizationTab = () => {
	return (
		<>
			<div className="mb-10">
				<div className="pb-4">
					<h3 className="mb-1 font-medium text-white">Organizer Profiles</h3>
					<p className="text-grey-100">
						Each profile describes a unique organizer and shows all of their
						events on one page. Having a complete profile can encourage
						attendees to follow you. Learn more
					</p>
				</div>
				<div className="flex flex-col gap-2">
					<ProfileCard />
					<ProfileCard />
				</div>
			</div>
			<div className="mb-10">
				<div className="pb-4 mb-6 border-b border-grey-light">
					<h3 className="mb-1 font-medium text-white"> Organization Details</h3>
					<p className="text-grey-100">
						Details that apply across your events and venues
					</p>
				</div>
				<div className="flex flex-col gap-7">
					<div className="flex flex-col w-full gap-1">
						<Label className="flex justify-between text-white">
							<span>
								Organizer name <span className="text-primary">*</span>
							</span>
						</Label>
						<Input
							className="text-white bg-transparent border-grey-light placeholder:text-grey-100"
							placeholder="Sophia Williams"
						/>
					</div>
					<div className="flex flex-col w-full gap-1">
						<Label className="flex justify-between text-white">
							<span>
								Organization Email <span className="text-primary">*</span>
							</span>
						</Label>
						<Input
							className="text-white bg-transparent border-grey-light placeholder:text-grey-100"
							placeholder="Organization@gmail.com"
						/>
					</div>
				</div>
			</div>
		</>
	);
};

export default OrganizationTab;
