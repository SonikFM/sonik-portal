import {
	createBrowserRouter,
	RouterProvider,
	Navigate,
} from "react-router-dom";
import Dashboard from "./Dashboard";
import Login from "./Login";
import SignUp from "./SignUp";
import ForgetPassword from "./ForgetPassword";
import Verification from "./Verification";
import Events from "./Events";
import Tickets from "./Tickets";
import Attendee from "./Attendee";
import Producer from "./Producer";
import Calendar from "./Calendar";
import Venues from "./Venues";
import Organization from "./Organization";
import Support from "./Support";
import SupportAndTickets from "./SupportAndTickets";
import Settings from "./Settings";
import { AuthLayout, DashboardLayout } from "@/layout";
import ProtectedRoute from "./ProtectedRoute";

export const router = createBrowserRouter([
	{
		path: "/",
		element: <ProtectedRoute />,
		children: [
			{
				path: "/",
				element: <DashboardLayout />,
				children: [
					{ path: "dashboard", element: <Dashboard /> },
					{ path: "events", element: <Events /> },
					{ path: "calendar", element: <Calendar /> },
					{ path: "attendee-accounts", element: <Attendee /> },
					{ path: "producer-accounts", element: <Producer /> },
					{ path: "tickets", element: <Tickets /> },
					{ path: "venues", element: <Venues /> },
					{ path: "organization", element: <Organization /> },
					{ path: "support-ticketing", element: <SupportAndTickets /> },
					{ path: "settings", element: <Settings /> },
					{ path: "support", element: <Support /> },
				],
			},
		],
	},
	{
		path: "/",
		element: <AuthLayout />,
		children: [
			{ path: "login", element: <Login /> },
			{ path: "register", element: <SignUp /> },
			{ path: "forget-password", element: <ForgetPassword /> },
			{ path: "verification", element: <Verification /> },
		],
	},
	{
		path: "/logout",
		action: async () => {
			await fakeAuthProvider.signout();
			return Navigate({ to: "/login" });
		},
	},
]);
