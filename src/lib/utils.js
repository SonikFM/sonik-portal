import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
	return twMerge(clsx(inputs));
}

export const generatePageNumbers = (table) => {
	const totalPages = table.getPageCount();
	const currentPage = table.getState().pagination.pageIndex + 1;
	const pages = [];

	if (totalPages <= 5) {
		for (let i = 1; i <= totalPages; i++) {
			pages.push(i);
		}
	} else {
		if (currentPage <= 3) {
			pages.push(1, 2, 3, 4, "...", totalPages);
		} else if (currentPage > 3 && currentPage < totalPages - 2) {
			pages.push(
				1,
				"...",
				currentPage - 1,
				currentPage,
				currentPage + 1,
				"...",
				totalPages
			);
		} else {
			pages.push(
				1,
				"...",
				totalPages - 3,
				totalPages - 2,
				totalPages - 1,
				totalPages
			);
		}
	}
	return pages;
};
