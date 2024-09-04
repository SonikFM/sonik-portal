import { createBrowserRouter, Navigate } from "react-router-dom";
import { AuthLayout, DashboardLayout } from "@/layout";
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
// import Organization from "./Organization";
import Support from "./Support";
import SupportAndTickets from "./SupportAndTickets";
import Settings from "./Settings";
import AttendeeAccount from "./AttendeeAccount";
import CreateVenue from "./CreateVenue";
import AttendeeAccounts from "./AttendeeAccounts";
import Venues from "./Venues";
import ResetPassword from "./ResetPassword";
import EventDetail from "./EventDetail";
import AdminAccount from "./AdminAccount";

// CONATINERS
import CreateEvent from "@/containers/Event";
import OrganizerAccount from "@/containers/OrganizerAccount";
import Organizations from "@/containers/Organizations";
import AdminAccounts from "@/containers/AdminAccounts";
import PublicRoute from "./PublicRoute";

const dashboardRoutes = [
  { path: "", element: <Dashboard />, index: true },
  { path: "/dashboard", element: <Dashboard /> },
  { path: "events", element: <Events /> },
  { path: "events/create-event", element: <CreateEvent /> },
  { path: "events/:id", element: <EventDetail /> },
  { path: "attendees", element: <AttendeeAccounts /> },
  { path: "attendees/create-attendee", element: <AttendeeAccount /> },
  { path: "producers", element: <Producers /> },
  { path: "producers/create-producer", element: <OrganizerAccount /> },
  { path: "admins", element: <AdminAccounts /> },
  { path: "admins/create-admin", element: <AdminAccount /> },
  { path: "venues", element: <Venues /> },
  { path: "venues/create-venue", element: <CreateVenue /> },
  { path: "calendar", element: <Calendar /> },
  { path: "tickets", element: <Tickets /> },
  { path: "organization", element: <Organizations /> },
  { path: "organization/create-organization", element: <OrganizerAccount /> },
  { path: "organization/:id", element: <OrganizerAccount /> },
  // { path: "organization/create-organization", element: <Organization /> },
  { path: "support-ticketing", element: <SupportAndTickets /> },
  { path: "settings", element: <Settings /> },
  { path: "support", element: <Support /> },
];

const authRoutes = [
  { path: "login", element: <Login /> },
  { path: "register", element: <SignUp /> },
  { path: "forget-password", element: <ForgetPassword /> },
  { path: "verification", element: <Verification /> },
  { path: "reset-password", element: <ResetPassword /> },
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
    element: <PublicRoute />,
    children: [
      {
        path: "/",
        element: <AuthLayout />,
        children: authRoutes,
      },
    ],
  },
  {
    path: "/logout",
    action: async () => {
      return <Navigate to="/login" replace />;
    },
  },
];

export const router = createBrowserRouter(routes);
