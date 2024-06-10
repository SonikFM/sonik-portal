import AccountIcon from "@/svgs/AccountIcon";
import BuildingIcon from "@/svgs/BuildingIcon";
import CalendarIcon from "@/svgs/CalendarIcon";
import ChatIcon from "@/svgs/ChatIcon";
import DashboardIcon from "@/svgs/DashboardIcon";
import EventsIcon from "@/svgs/EventsIcon";
import OrganizationIcon from "@/svgs/OrganizationIcon";
import TicketIcon from "@/svgs/TicketIcon";
import UsersIcon from "@/svgs/UsersIcon";
import { HeadphonesIcon, SettingsIcon } from "lucide-react";

export const MAIN_NAVIGATION = [
    {
        id: "dashboard",
        label: "Dashboard",
        url: "/",
        icon: DashboardIcon
    },
    // {
    //     id: "calendar",
    //     label: "Calendar",
    //     url: "/calendar",
    //     icon: CalendarIcon
    // },
    {
        id: "events",
        label: "Events",
        url: "/events",
        icon: EventsIcon
    },
    {
        id: "attendee-accounts",
        label: "Attendee Accounts",
        url: "/attendees",
        icon: UsersIcon
    },
    {
        id: "producer-accounts",
        label: "Producer Accounts",
        url: "/producers",
        icon: AccountIcon
    },
    {
        id: "tickets",
        label: "Tickets",
        url: "/tickets",
        icon: TicketIcon
    },
    {
        id: "venues",
        label: "Venues",
        url: "/venues",
        icon: BuildingIcon
    },
    {
        id: "organization",
        label: "Organization",
        url: "/organization",
        icon: OrganizationIcon
    },
    {
        id: "support-ticketing",
        label: "Support Ticketing",
        url: "/support-ticketing",
        icon: ChatIcon
    },
]
export const SETTINGS_NAVIGATION = [
    {
        id: "settings",
        label: "Settings",
        url: "/settings",
        icon: SettingsIcon
    },
    // {
    //     id: "support",
    //     label: "Support",
    //     url: "/support",
    //     icon: HeadphonesIcon
    // },
]
export const FAVS_NAVIGATION = [
    {
        id: "user-1",
        label: "Yamaha Yearly Meetup",
        url: "/user/1",
        icon: 'bg-primary'
    },
    {
        id: "user-2",
        label: "Product Launch Event",
        url: "/user/2",
        icon: 'bg-error'
    },
    {
        id: "user-3",
        label: "New Year Concert",
        url: "/user/3",
        icon: 'bg-pink'
    },
]



// ES