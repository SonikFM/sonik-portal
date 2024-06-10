import AccountIcon from "./AccountIcon";
import BuildingIcon from "./BuildingIcon";
import ChatIcon from "./ChatIcon";
import DashboardIcon from "./DashboardIcon";
import EventsIcon from "./EventsIcon";
import OrganizationIcon from "./OrganizationIcon";
import SettingsIcon from "./SettingsIcon";
import TicketIcon from "./TicketIcon";
import UsersIcon from "./UsersIcon";

const icons = {
	DashboardIcon: DashboardIcon,
	EventsIcon: EventsIcon,
	UsersIcon:UsersIcon,
	AccountIcon:AccountIcon,
	TicketIcon:TicketIcon,
	BuildingIcon:BuildingIcon,
	OrganizationIcon:OrganizationIcon,
	ChatIcon:ChatIcon,
	SettingsIcon:SettingsIcon
};
const Fake = () => <></>;
export const Icon = (props) => {
	const Icon = icons[props.name] || Fake;
	return <Icon {...props} />;
};
