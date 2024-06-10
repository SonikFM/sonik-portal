

import * as React from "react";
import {
	flexRender,
	getCoreRowModel,
	getFilteredRowModel,
	getPaginationRowModel,
	getSortedRowModel,
	useReactTable,
} from "@tanstack/react-table";
import {
	ArrowUpDown,
	ChevronDown,
	ChevronRight,
	MoreHorizontal,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
	DropdownMenu,
	DropdownMenuCheckboxItem,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";
import DotsIcon from "@/svgs/DotsIcon";
import { Avatar, AvatarImage } from "./ui/avatar";
import userImg from "@/assets/images/users/1.png";
import ClockIcon from "@/svgs/ClockIcon";
import VerifiedIcon from "@/svgs/VerifiedIcon";
import { cn } from "@/lib/utils";
import SearchInput from "./SearchInput";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import CheckedIcon from "@/svgs/CheckedIcon";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import EditIcon from "@/svgs/EditIcon";

const data = [
	{
		id: "1231",
		status: "complete",
		organizer: {
			profile: userImg,
			title: "Entrepreneur / CEO",
			name: "Nuray Aksoy",
		},
		details: {
			name: "SXSW | Austin, TX",
			date: "March 8–16, 2024",
		},
	},
	{
		id: "1232",
		status: "complete",
		organizer: {
			profile: userImg,
			title: "Entrepreneur / CEO",
			name: "Nuray Aksoy",
		},
		details: {
			name: "SXSW | Austin, TX",
			date: "March 8–16, 2024",
		},
	},
	{
		id: "1233",
		status: "success",
		organizer: {
			profile: userImg,
			title: "Entrepreneur / CEO",
			name: "Nuray Aksoy",
		},
		details: {
			name: "SXSW | Austin, TX",
			date: "March 8–16, 2024",
		},
	},
	{
		id: "1234",
		status: "success",
		organizer: {
			profile: userImg,
			title: "Entrepreneur / CEO",
			name: "Nuray Aksoy",
		},
		details: {
			name: "SXSW | Austin, TX",
			date: "March 8–16, 2024",
		},
	},
];

export const columns = [
	{
		accessorKey: "organizer",
		header: () => (
			<div className="text-sm font-normal text-grey-100">Organizer</div>
		),
		cell: ({ row }) => {
			console.log({ row }, "org");
			const org = row.original.organizer;
			return (
				<div className="flex gap-3">
					<Avatar>
						<AvatarImage src={org.profile} />
					</Avatar>
					<div className="">
						<h4 className="text-sm font-medium text-white">{org.name}</h4>
						<p className="text-xs text-grey-100 ">{org.title}</p>
					</div>
				</div>
			);
		},
	},
	{
		accessorKey: "details",
		header: () => (
			<div className="text-sm font-normal text-grey-100">Event Details</div>
		),
		cell: ({ row }) => {
			const details = row.original.details;

			return (
				<div className="">
					<h4 className="text-sm font-normal text-white">{details.name}</h4>
					<p className="text-xs text-grey-100 ">{details.date}</p>
				</div>
			);
		},
	},
	{
		accessorKey: "status",
		header: () => (
			<div className="text-sm font-normal text-grey-100">Status</div>
		),
		cell: ({ row }) => {
			const status = row.original.status;

			return (
				<div className="font-medium">
					<Button
						variant="oultined"
						className="h-6 gap-1.5 text-xs border-grey-light text-grey-100 rounded-md border px-2"
					>
						{status === "success" ? (
							<>
								<ClockIcon className="text-warning" /> In Progress
							</>
						) : (
							<>
								<CheckedIcon /> Completed
							</>
						)}
					</Button>
				</div>
			);
		},
	},
	{
		id: "actions",
		enableHiding: false,
		cell: ({ row }) => {
			const payment = row.original;

			return (
				<DropdownMenu className="">
					<DropdownMenuTrigger asChild>
						<Button variant="ghost" className="w-6 h-6 p-0">
							<span className="sr-only">Open menu</span>
							<DotsIcon className="w-4 h-4" />
						</Button>
					</DropdownMenuTrigger>
					<DropdownMenuContent align="end">
						<DropdownMenuLabel>Actions</DropdownMenuLabel>
						<DropdownMenuItem
							onClick={() => navigator.clipboard.writeText(payment.id)}
						>
							Copy payment ID
						</DropdownMenuItem>
						<DropdownMenuSeparator />
						<DropdownMenuItem>View customer</DropdownMenuItem>
						<DropdownMenuItem>View payment details</DropdownMenuItem>
					</DropdownMenuContent>
				</DropdownMenu>
			);
		},
	},
];

export function MesagesTable({ icon, title, buttonLabel, className }) {

	return (
		<Card className={cn("p-4 bg-dark", className)}>
			<CardHeader className="flex flex-row items-center justify-between h-12 p-0 pb-4 space-y-0 border-b border-grey-light">
				<CardTitle className="flex items-center gap-2 text-base font-medium text-white ">
					{icon} {title}
				</CardTitle>
				<div className="flex gap-3">
					{buttonLabel ? (
						<Button variant="outline" size="sm" className="px-2.5">
							{buttonLabel}
						</Button>
					) : null}
				</div>
			</CardHeader>
			<CardContent className="p-0 pt-4">
				<div className="flex flex-col w-full gap-4">
					<Tabs defaultValue="messages" className="w-full ">
						<TabsList className="flex justify-around w-full p-1 rounded-lg bg-grey-200 h-9">
							<TabsTrigger className="rounded-md h" value="new">
								New
							</TabsTrigger>
							<TabsTrigger className="rounded-md h"
								value="messages"
							>
								Messages
							</TabsTrigger>
							<TabsTrigger className="rounded-md h" value="tags">
								Tags
							</TabsTrigger>
						</TabsList>
						<TabsContent value="new">
							{[1, 2, 3].map((item, index) => {
								return (
									<div className={cn("flex items-center justify-between gap-3 py-3  hover:bg-grey-light/60", index > 0 ? 'border-t border-grey-light':"")}>
										<div className="flex gap-3 truncate">
											<Avatar>
												<AvatarImage src={userImg} />
											</Avatar>
											<div className="truncate">
												<h4 className="text-sm font-medium text-white">
													Kristin Watson
												</h4>
												<p className="text-xs truncate text-grey-100">
													Created New Event
													<span className="ml-1 text-pink">
														‘Ultra Music Festival | Miami, FL’
													</span>
												</p>
											</div>
										</div>
										<div className="flex gap-3 text-xs text-right w-fit content whitespace-nowrap text-grey-100">
											<span>Feb 12</span>
											<ChevronRight className="h-4 text-grey-100" />
										</div>
									</div>
								);
							})}
						</TabsContent>
						<TabsContent value="messages">
							{[1, 2, 3].map((item, index) => {
								return (
									<div className={cn("flex items-center justify-between gap-3 py-3  hover:bg-grey-light/60", index > 0 ? 'border-t border-grey-light':"")}>
										<div className="flex gap-3 truncate">
											<Avatar>
												<AvatarImage src={userImg} />
											</Avatar>
											<div className="truncate">
												<h4 className="text-sm font-medium text-white">
													Kristin Watson
												</h4>
												<p className="text-xs truncate text-grey-100">
													Created New Event
													<span className="ml-1 text-pink">
														‘Ultra Music Festival | Miami, FL’
													</span>
												</p>
											</div>
										</div>
										<div className="flex gap-3 text-xs text-right w-fit content whitespace-nowrap text-grey-100">
											<span>Feb 12</span>
											<ChevronRight className="h-4 text-grey-100" />
										</div>
									</div>
								);
							})}
						</TabsContent>
						<TabsContent value="tags">
							{[1, 2, 3].map((item, index) => {
								return (
									<div className={cn("flex items-center justify-between gap-3 py-3  hover:bg-grey-light/60", index > 0 ? 'border-t border-grey-light':"")}>
										<div className="flex gap-3 truncate">
											<Avatar>
												<AvatarImage src={userImg} />
											</Avatar>
											<div className="truncate">
												<h4 className="text-sm font-medium text-white">
													Kristin Watson
												</h4>
												<p className="text-xs truncate text-grey-100">
													Created New Event
													<span className="ml-1 text-pink">
														‘Ultra Music Festival | Miami, FL’
													</span>
												</p>
											</div>
										</div>
										<div className="flex gap-3 text-xs text-right w-fit content whitespace-nowrap text-grey-100">
											<span>Feb 12</span>
											<ChevronRight className="h-4 text-grey-100" />
										</div>
									</div>
								);
							})}
						</TabsContent>
					</Tabs>
					<Button variant="outline" className="w-full gap-2 h-9" > <EditIcon className="text-grey-100" /> New Message </Button>
				</div>
			</CardContent>
		</Card>
	);
}
export default MesagesTable;
