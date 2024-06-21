import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";
import { flexRender } from "@tanstack/react-table";
import React from "react";
import { columns } from "./data";
import OrganizerCard from "@/components/OrganizerCard";

const Content = ({ table, view = "list" }) => {
	if (view === "list") {
		return (
			<Table>
				<TableHeader className="border-0">
					{table.getHeaderGroups().map((headerGroup) => (
						<TableRow
							key={headerGroup.id}
							className="px-3 !border-0 h-9 bg-grey-200"
						>
							{headerGroup.headers.map((header, index) => {
								return (
									<TableHead
										key={header.id}
										className={`${index === 0 ? "rounded-l-lg" : ""}`}
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
				<TableBody className="text-white">
					{table.getRowModel().rows?.length ? (
						table.getRowModel().rows.map((row) => (
							<TableRow
								key={row.id}
								data-state={row.getIsSelected() && "selected"}
								className="!border-b border-grey-light"
							>
								{row.getVisibleCells().map((cell) => (
									<TableCell key={cell.id} className="py-3">
										{flexRender(cell.column.columnDef.cell, cell.getContext())}
									</TableCell>
								))}
							</TableRow>
						))
					) : (
						<TableRow>
							<TableCell colSpan={columns.length} className="h-24 text-center">
								No results.
							</TableCell>
						</TableRow>
					)}
				</TableBody>
			</Table>
		);
	} else {
		return <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-x-6 gap-y-5">
			{table.getRowModel().rows?.length ? (
				table.getRowModel().rows.map((row) => <OrganizerCard data={row.original} />)
			) : (
				<div className="h-24 text-center">
					No results.
				</div>
			)}
		</div>;
	}
};

export default Content;
