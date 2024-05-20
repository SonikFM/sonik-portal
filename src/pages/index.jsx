import Dashboard from "./Dashboard";
import Auth from "./Auth";
import Layout from "@/layout";
import {
	Route,
	createBrowserRouter,
	createRoutesFromElements,
} from "react-router-dom";

export const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path="/" element={<Layout />}>
			<Route index element={<Dashboard />}></Route>
			<Route path="/login" element={<Auth />}></Route>
		</Route>
	)
);
