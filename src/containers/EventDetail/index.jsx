
import DashboardHeader from "@/layout/DashboardHeader";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ChevronLefttIcon from "@/svgs/ChevronLefttIcon";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import eventImg from "@/assets/images/events/event-1.png"

const EventDetail = () => {
	const [isDrawerOpen, setDrawerOpen] = useState(false);

	const toggleDrawer = () => {
		setDrawerOpen(!isDrawerOpen);
	};

	const navigate = useNavigate();
	const onIconClick = () => {
		navigate(-1);
	};

	return (
		<>
			<DashboardHeader
				title="Event Details"
				description="Check your event details below"
				icon={<ChevronLefttIcon className="w-5 h-5 text-grey-100" />}
				onIconClick={onIconClick}
				toggleDrawer={toggleDrawer}
			></DashboardHeader>
			<div className="flex items-center justify-between gap-3 p-4 md:p-8" >
				<div className="flex items-center gap-3">
					<Avatar>
						<AvatarImage src={eventImg} />
						<AvatarFallback>Event Profile</AvatarFallback>
					</Avatar>
				</div>

			</div>
		</>
	);
};
export default EventDetail;
