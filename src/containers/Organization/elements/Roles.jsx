import {
	getCoreRowModel,
	getFilteredRowModel,
	getPaginationRowModel,
	getSortedRowModel,
	useReactTable,
} from "@tanstack/react-table";
import React, { useState } from "react";
import RolesContent from "./RolesContent";
import {
	Pagination,
	PaginationContent,
	PaginationEllipsis,
	PaginationItem,
} from "@/components/ui/pagination";
import ChevronLeftDoubletIcon from "@/svgs/ChevronLeftDoubletIcon";
import { generatePageNumbers } from "@/lib/utils";
import { PaginationMenu } from "./PaginationMenu";
import { data, columns } from "./data";
import ChevronRightDoubletIcon from "@/svgs/ChevronRightDoubletIcon";
import ChevronRightIcon from "@/svgs/ChevronRightIcon";
import ChevronLefttIcon from "@/svgs/ChevronLefttIcon";

const Roles = () => {
    const [sorting, setSorting] = useState([]);
    const [columnFilters, setColumnFilters] = useState([]);
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
		onPaginationChange: setPagination,
		initialState: {
			pagination: {
				pageIndex: 2,
				pageSize: 25,
			},
		},
		state: {
			sorting,
			pagination,
		},
	});

    const pc =
		"h-8 w-8 rounded-lg border border-grey-light flex items-center justify-center text-grey-100 cursor-pointer hover:bg-grey-light/50 ";
	const pbc =
		"h-8 w-8 flex items-center justify-center text-grey-100 cursor-pointer hover:bg-grey-light/50 rounded-lg";

	const totalPages = table.getPageCount();
	const currentPage = table.getState().pagination.pageIndex + 1;
	return (
		<div>
			<RolesContent table={table} />
			<div className="flex items-center justify-end gap-3 mt-6">
				<div className="text-sm text-grey-100">
					{/* Page {currentPage} of {totalPages} */}
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
							onClick={() => table.getCanPreviousPage() && table.previousPage()}
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
				<div>
					{/* <PaginationMenu
						handleChange={(value) => table.setPageSize(Number(value))}
						pagination={table.getState().pagination}
					/> */}
				</div>
			</div>
		</div>
	);
};

export default Roles;
