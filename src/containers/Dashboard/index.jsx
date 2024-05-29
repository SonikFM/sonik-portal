import AppCard from "@/components/AppCard";
import EventsTable from "@/components/EventsTable";
import MesagesTable from "@/components/MessagesTable";
import NotificationsTable from "@/components/NotificationsTable";
import BellIcon from "@/svgs/BellIcon";
import BookIcon from "@/svgs/BookIcon";
import MessagesIcon from "@/svgs/MessagesIcon";
import React from "react";
import { useTranslation } from "react-i18next";

const Dashboard = () => {
	const [t, i18n] = useTranslation("dashboard");
	return (
		<div className="flex gap-6 py-4 text-white">
			<div className="flex flex-col w-4/6 gap-6 ">
				<EventsTable
					title="Events"
					icon={<BookIcon className="text-grey-100" />}
					buttonLabel="See All"
					hasSearch={true}
				/>
				<div className="flex gap-6 overflow-hidden">
					<div className="w-[calc(50%-12px)]">
						<NotificationsTable
							title="Notifications"
							icon={<BellIcon className="text-grey-100" />}
							buttonLabel="See All"
							className="h-full"
						/>
					</div>
					<div className="w-[calc(50%-12px)]">
						<MesagesTable
							title="Message Board"
							icon={<MessagesIcon className="text-grey-100" />}
							buttonLabel="View Details"
							className="h-full"
						/>
					</div>
				</div>
			</div>
			<div className="w-2/6">
				<NotificationsTable
					title="Notifications"
					icon={<BellIcon className="text-grey-100" />}
					buttonLabel="See All"
				/>
			</div>
		</div>
	);
};
export default Dashboard;
