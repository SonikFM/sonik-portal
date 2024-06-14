import React, { useState } from "react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TabsContent } from "@radix-ui/react-tabs";
import ManagementEmptyState from "./ManagementEmptyState";
import InputWithIcon from "@/components/InputWithIcon";
import SearchIcon from "@/svgs/SearchIcon";
import Roles from "./Roles";
import { Button } from "@/components/ui/button";
import SearchDropdown from "./SearchDropdown";

const TeamTab = () => {
	const [active, setActive] = useState("users");
	const [searchTerm, setSearchTerm] = useState("");
	return (
		<>
			<div className="mb-10">
				<div className="pb-4 mb-6 border-b border-grey-light">
					<h3 className="mb-1 font-medium text-white">Members</h3>
					<p className="text-grey-100">
						Display all the team members and essential details.
					</p>
				</div>
				<div className="flex flex-col gap-2">
					<Tabs defaultValue={active} onValueChange={setActive}>
						<div className="flex justify-between w-full gap-3">
							<TabsList className="flex justify-around p-1 rounded-lg bg-grey-200 h-9 w-80">
								<TabsTrigger className="w-1/2 rounded-md" value="users">
									Users
								</TabsTrigger>
								<TabsTrigger className="w-1/2 rounded-md" value="roles">
									Roles
								</TabsTrigger>
							</TabsList>
							<div className="flex gap-3">
								{/* <div className="relative" >
									<SearchDropdown value={searchTerm} onValueChange={(e)=>{console.log(e);setSearchTerm(e)}} />
								</div> */}
								{active === "roles" && (
									<Button variant="pink" size="sm">
										Assign Role
									</Button>
								)}
							</div>
						</div>
						<TabsContent
							value="users"
							className="flex justify-center w-full  data-[state=active]:mt-6"
						>
							<ManagementEmptyState />
						</TabsContent>
						<TabsContent
							value="roles"
							className="w-full  data-[state=active]:mt-6"
						>
							<Roles />
						</TabsContent>
					</Tabs>
				</div>
			</div>
		</>
	);
};

export default TeamTab;
