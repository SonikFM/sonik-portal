

import React, { useState } from "react";
import {
	getCoreRowModel,
	getFilteredRowModel,
	getPaginationRowModel,
	getSortedRowModel,
	useReactTable,
} from "@tanstack/react-table";

import { Button } from "@/components/ui/button";

import Content from "./elements/Content";
import Header from "./elements/Header";
import { data, columns } from "./elements/data";
import DashboardHeader from "@/layout/DashboardHeader";
import { useNavigate } from "react-router-dom";
import { PlusIcon } from "lucide-react";
import {
	Pagination,
	PaginationContent,
	PaginationEllipsis,
	PaginationItem,
	PaginationLink,
} from "@/components/ui/pagination";
import ChevronLeftDoubletIcon from "@/svgs/ChevronLeftDoubletIcon";
import ChevronRightDoubletIcon from "@/svgs/ChevronRightDoubletIcon";
import ChevronRightIcon from "@/svgs/ChevronRightIcon";
import ChevronLefttIcon from "@/svgs/ChevronLefttIcon";
import { generatePageNumbers } from "@/lib/utils";
import { PaginationMenu } from "./elements/PaginationMenu";

const Events = () => {
	const [sorting, setSorting] = useState([]);
	const [columnFilters, setColumnFilters] = useState([]);
	const [columnVisibility, setColumnVisibility] = useState({});
	const [rowSelection, setRowSelection] = useState({});
	const [pagination, setPagination] = useState({
		pageIndex: 0,
		pageSize: 8,
	});

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
		onPaginationChange: setPagination,
		initialState: {
			pagination: {
				pageIndex: 2,
				pageSize: 25,
			},
		},
		state: {
			sorting,
			columnFilters,
			columnVisibility,
			rowSelection,
			pagination,
		},
	});
	const navigate = useNavigate();
	const redirectToCreateEvent = () => {
		navigate("/events/create-event");
	};

	const pc =
		"h-8 w-8 rounded-lg border border-grey-light flex items-center justify-center text-grey-100 cursor-pointer hover:bg-grey-light/50 ";
	const pbc =
		"h-8 w-8 flex items-center justify-center text-grey-100 cursor-pointer hover:bg-grey-light/50 rounded-lg";

	const totalPages = table.getPageCount();
	const currentPage = table.getState().pagination.pageIndex + 1;

	return (
		<>
			<DashboardHeader
				title="February 04, 2024"
				hasNotifications={false}
				hasSearch={false}
			>
				<Button className="flex gap-1" onClick={redirectToCreateEvent}>
					<PlusIcon /> New Event
				</Button>
			</DashboardHeader>
			<div className="w-full px-8 py-6">
				<Header table={table} />
				<div className="">
					<Content table={table} />
				</div>
				<div className="flex items-center justify-end gap-3 py-3">
					<div className="text-sm text-grey-100">
						Page {currentPage} of {totalPages}
					</div>
					<Pagination className="w-auto">
						<PaginationContent className="gap-2">
							<PaginationItem
								className={pbc}
								onClick={() =>
									table.getCanPreviousPage() && table.setPageIndex(0)
								}
							>
								<ChevronLeftDoubletIcon />
							</PaginationItem>
							<PaginationItem
								className={pbc}
								onClick={() =>
									table.getCanPreviousPage() && table.previousPage()
								}
							>
								<ChevronLefttIcon />
							</PaginationItem>
							{generatePageNumbers(table).map((page, index) =>
								page === "..." ? (
									<PaginationItem key={index} className={pc}>
										<PaginationEllipsis />
									</PaginationItem>
								) : (
									<PaginationItem
										key={index}
										className={`${pc} ${
											table.getState().pagination.pageIndex + 1 === page
												? "bg-grey-light"
												: ""
										}`}
										onClick={() => table.setPageIndex(page - 1)}
									>
										{page}
									</PaginationItem>
								)
							)}
							<PaginationItem
								className={pbc}
								onClick={() => table.getCanNextPage() && table.nextPage()}
							>
								<ChevronRightIcon />
							</PaginationItem>
							<PaginationItem
								className={pbc}
								onClick={() =>
									table.getCanNextPage() &&
									table.setPageIndex(table.getPageCount() - 1)
								}
							>
								<ChevronRightDoubletIcon />
							</PaginationItem>
						</PaginationContent>
					</Pagination>
					<div><PaginationMenu handleChange={(value)=>table.setPageSize(Number(value))} pagination={table.getState().pagination}  /></div>
				</div>
			</div>
		</>
	);
};

export default Events;
