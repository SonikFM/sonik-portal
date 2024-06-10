

import * as React from "react";
import {
	flexRender,
	getCoreRowModel,
	getFilteredRowModel,
	getPaginationRowModel,
	getSortedRowModel,
	useReactTable,
} from "@tanstack/react-table";
import { Button } from "@/components/ui/button";
import {
	DropdownMenu,
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
import { cn } from "@/lib/utils";
import SearchInput from "./SearchInput";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import CheckedIcon from "@/svgs/CheckedIcon";

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

export function EventsTable({ icon, title, buttonLabel, hasSearch }) {
	const [sorting, setSorting] = React.useState([]);
	const [columnFilters, setColumnFilters] = React.useState([]);
	const [columnVisibility, setColumnVisibility] = React.useState({});
	const [rowSelection, setRowSelection] = React.useState({});

	const table = useReactTable({
		data,
		columns,
		onSortingChange: setSorting,
		onColumnFiltersChange: setColumnFilters,
		getCoreRowModel: getCoreRowModel(),
		getPaginationRowModel: getPaginationRowModel(),
		getSortedRowModel: getSortedRowModel(),
		getFilteredRowModel: getFilteredRowModel(),
		onColumnVisibilityChange: setColumnVisibility,
		onRowSelectionChange: setRowSelection,
		state: {
			sorting,
			columnFilters,
			columnVisibility,
			rowSelection,
		},
	});

	return (
		<Card className="bg-dark">
			<CardHeader className="flex flex-row items-center justify-between">
				<CardTitle className="flex items-center gap-2 text-base font-medium text-white ">
					{icon} {title}
				</CardTitle>
				<div className="flex gap-3">
					{hasSearch ? (
						<SearchInput
							placeholder="Search for Event..."
							onChange={(event) =>
								table.getColumn("organizer.name")?.setFilterValue(event.target.value)
							}
							value={table.getColumn("organizer.name")?.getFilterValue() ?? ""}
						/>
					) : null}
					{buttonLabel ? (
						<Button variant="outline" size="sm" className="px-2.5">
							{buttonLabel}
						</Button>
					) : null}
				</div>
			</CardHeader>
			<CardContent>
				<div className="w-full">
					<div className="border-0">
						<Table>
							<TableHeader>
								{table.getHeaderGroups().map((headerGroup) => (
									<TableRow
										key={headerGroup.id}
										className="!border-b-0 hover:bg-grey-light/60 rounded-lg"
									>
										{headerGroup.headers.map((header, index) => {
											return (
												<TableHead
													key={header.id}
													className={cn(
														"h-8 bg-grey-200 ",
														index === 0
															? "rounded-l-lg"
															: index === headerGroup.headers.length - 1
															? "rounded-r-lg"
															: ""
													)}
												>
													{header.isPlaceholder
														? null
														: flexRender(
																header.column.columnDef.header,
																header.getContext()
														  )}
												</TableHead>
											);
										})}
									</TableRow>
								))}
							</TableHeader>
							<TableBody>
								{table.getRowModel().rows?.length ? (
									table.getRowModel().rows.map((row) => (
										<TableRow
											key={row.id}
											data-state={row.getIsSelected() && "selected"}
											className={cn(
												"!border-b-0 hover:bg-grey-light/60 rounded-lg "
											)}
										>
											{row.getVisibleCells().map((cell, index) => (
												<TableCell
													key={cell.id}
													className={cn(
														"p-3 ",
														index === 0
															? "rounded-l-lg"
															: index === row.getVisibleCells().length - 1
															? "rounded-r-lg"
															: ""
													)}
												>
													{flexRender(
														cell.column.columnDef.cell,
														cell.getContext()
													)}
												</TableCell>
											))}
										</TableRow>
									))
								) : (
									<TableRow>
										<TableCell
											colSpan={columns.length}
											className="h-24 text-center"
										>
											No results.
										</TableCell>
									</TableRow>
								)}
							</TableBody>
						</Table>
					</div>
				</div>
			</CardContent>
		</Card>
	);
}
export default EventsTable;
