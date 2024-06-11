import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import DashboardHeader from "@/layout/DashboardHeader";
import AccountIcon from "@/svgs/AccountIcon";
import OrganizationIcon from "@/svgs/OrganizationIcon";
import ProfileCardIcon from "@/svgs/ProfileCardIcon";
import UsersIcon from "@/svgs/UsersIcon";
import { PlusIcon } from "lucide-react";
import React, { useState } from "react";
import OrganizationTab from "./elements/OrganizationTab";
import TeamTab from "./elements/TeamTab";

const Oranization = () => {
    const [active, setActive] = useState('organization')
	return (
		<>
			<DashboardHeader
				title="Organization"
				description="From here your can customize your organization’s data"
				hasNotifications={true}
				hasSearch={true}
				icon={<OrganizationIcon className="text-grey-100" />}
			>
				<Button className="flex gap-1">
					<PlusIcon /> Create Organizer Profile
				</Button>
			</DashboardHeader>
			<Tabs className="px-8 py-6" defaultValue={active} onValueChange={setActive} >
				<div className="relative">
					<TabsList className="relative flex gap-6 justify-start bg-transparent rounded-none z-[2]">
						<TabsTrigger
							className="rounded-none px-0 py-3 gap-2 w-fit border-b-2 border-transparent data-[state=active]:border-primary  data-[state=active]:text-white  "
							value="organization"
						>
							<ProfileCardIcon className={`${active === "organization" ? "text-primary": ""}`} />
							Oranization Profile
						</TabsTrigger>
						<TabsTrigger
							className="rounded-none gap-2 px-0 py-3 w-fit border-b-2 border-transparent data-[state=active]:border-primary  data-[state=active]:text-white "
							value="team"
						>
							<UsersIcon className={`${active === "team" ? "text-primary": ""}`} />
							Team Management
						</TabsTrigger>
					</TabsList>
					<Separator className="absolute h-[1px] bg-grey-light -bottom-[3px] z-[1]" />
				</div>
                <TabsContent value="organization" className="mt-6" >
                    <OrganizationTab/>
				</TabsContent>
                <TabsContent value="team" className="mt-6" >
                    <TeamTab/>
				</TabsContent>
			</Tabs>
		</>
	);
};

export default Oranization;
