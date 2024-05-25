import Dashboard from "./Dashboard";
import Auth from "./Login";
import Layout, { AuthLayout } from "@/layout";
import { createBrowserRouter, redirect } from "react-router-dom";
import { fakeAuthProvider } from "@/lib/auth";
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
import Login from "./Login";
import SignUp from "./SignUp";
import ForgetPassword from "./ForgetPassword";
import Verification from "./Verification";

export const router = createBrowserRouter([
	{
		id: "root",
		path: "/",
		Component: Layout,
		children: [
			{
				index: true,
				// async action() {
				// 	await fakeAuthProvider.signin('qasim');
				// 	return redirect("/dashboard");
				// },
				// loader: loginLoader,
				Component: Dashboard,
			},
			{
				path: "/events",
				Component: Events,
			},
			{
				path: "/calendar",
				Component: Calendar,
			},

			{
				path: "/attendee-accounts",
				Component: Attendee,
			},
			{
				path: "/producer-accounts",
				Component: Producer,
			},
			{
				path: "/tickets",
				Component: Tickets,
			},
			{
				path: "/venues",
				Component: Venues,
			},
			{
				path: "/organization",
				Component: Organization,
			},
			{
				path: "/support-ticketing",
				Component: SupportAndTickets,
			},
			{
				path: "/settings",
				Component: Settings,
			},
			{
				path: "/support",
				Component: Support,
			},
			{
				path: "/dashboard",
				Component: Dashboard,
			},
			{
				path: "/login",
				action: loginAction,
				loader: loginLoader,
				Component: Login,
			},
			{
				path: "/register",
				action: loginAction,
				loader: loginLoader,
				Component: SignUp,
			},
			{
				path: "/forget-password",
				Component: ForgetPassword,
			},
			{
				path: "/verification",
				Component: Verification,
			},
			// {
			// 	path: "/dashboard",
			// 	loader: protectedLoader,
			// 	Component: Dashboard,
			// },
		],
	},
	{
		id: "user",
		path: "/",
		Component: AuthLayout,
		children: [
			
		],
	},
	{
		path: "/logout",
		async action() {
			await fakeAuthProvider.signout();
			return redirect("/login");
		},
	},
]);

function protectedLoader({ request }) {
	if (!fakeAuthProvider.isAuthenticated) {
		let params = new URLSearchParams();
		params.set("from", new URL(request.url).pathname);
		return redirect("/?" + params.toString());
	}
	return null;
}

async function loginAction({ request }) {
	let formData = await request.formData();
	let username = formData.get("username");
	console.log({ a: localStorage.getItem("i18nextLng") });

	if (!username) {
		return {
			error: "You must provide a username to log in",
		};
	}

	try {
		await fakeAuthProvider.signin(username);
	} catch (error) {
		return {
			error: "Invalid login attempt",
		};
	}

	let redirectTo = formData.get("redirectTo");
	return redirect(redirectTo || "/");
}

async function loginLoader() {
	if (fakeAuthProvider.isAuthenticated) {
		return redirect("/dashboard");
	}
	return null;
}
