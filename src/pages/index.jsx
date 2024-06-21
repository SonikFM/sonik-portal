import {
	createBrowserRouter,
	Navigate,
} from "react-router-dom";
import {
	AuthLayout,
	DashboardLayout,
} from "@/layout";
import ProtectedRoute from "./ProtectedRoute";

// PAGES
import Dashboard from "./Dashboard";
import Login from "./Login";
import SignUp from "./SignUp";
import ForgetPassword from "./ForgetPassword";
import Verification from "./Verification";
import Events from "./Events";
import Tickets from "./Tickets";
import Producers from "./ProducerAccounts";
import Calendar from "./Calendar";
import Organization from "./Organization";
import Support from "./Support";
import SupportAndTickets from "./SupportAndTickets";
import Settings from "./Settings";
import AttendeeAccount from "./AttendeeAccount";
import CreateVenue from "./CreateVenue";
import AttendeeAccounts from "./AttendeeAccounts";

// CONATINERS

import CreateEvent from "@/containers/Event";
import OrganizerAccount from "@/containers/OrganizerAccount";
import Organizations from "@/containers/Organizations";

const dashboardRoutes = [
	{ path: "", element: <Dashboard />, index: true },
	{ path: "events", element: <Events /> },
	{ path: "events/create-event", element: <CreateEvent /> },
	{ path: "attendees", element: <AttendeeAccounts /> },
	{ path: "attendees/create-attendee", element: <AttendeeAccount /> },
	{ path: "producers", element: <Producers /> },
	{ path: "producers/create-producer", element: <OrganizerAccount /> },
	{ path: "venues", element: <CreateVenue /> },
	{ path: "calendar", element: <Calendar /> },
	{ path: "tickets", element: <Tickets /> },
	{ path: "organization", element: <Organizations /> },
	{ path: "organization/create-organization", element: <Organization /> },
	{ path: "support-ticketing", element: <SupportAndTickets /> },
	{ path: "settings", element: <Settings /> },
	{ path: "support", element: <Support /> },
];

const authRoutes = [
	{ path: "login", element: <Login /> },
	{ path: "register", element: <SignUp /> },
	{ path: "forget-password", element: <ForgetPassword /> },
	{ path: "verification", element: <Verification /> },
];

const routes = [
	{
		path: "/",
		element: <ProtectedRoute />,
		children: [
			{
				path: "/",
				element: <DashboardLayout />,
				children: dashboardRoutes,
			},
		],
	},
	{
		path: "/",
		element: <AuthLayout />,
		children: authRoutes,
	},
	{
		path: "/logout",
		action: async () => {
			await fakeAuthProvider.signout();
			return Navigate({ to: "/login" });
		},
	},
];

export const router = createBrowserRouter(routes);
