import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
} from "./ui/pagination";
import { generatePageNumbers } from "@/lib/utils";
import ChevronLeftDoubletIcon from "@/svgs/ChevronLeftDoubletIcon";
import ChevronLefttIcon from "@/svgs/ChevronLefttIcon";
import PageSizeMenu from "./PageSizeMenu";
import ChevronRightIcon from "@/svgs/ChevronRightIcon";
import ChevronRightDoubletIcon from "@/svgs/ChevronRightDoubletIcon";

const AppPagnization = ({ meta, onPageChange, onPageSizeChange }) => {
  const pc =
    "h-8 w-8 rounded-lg border border-grey-light flex items-center justify-center text-grey-100 cursor-pointer hover:bg-grey-light/50 ";
  const pbc =
    "h-8 w-8 flex items-center justify-center text-grey-100 cursor-pointer hover:bg-grey-light/50 rounded-lg";

  const currentPage = meta.pageIndex + 1;
  const totalPages = Math.ceil(meta.total / meta.pageSize);
  return (
    <div className="flex items-center justify-end gap-3 py-3">
      <div className="text-sm text-grey-100">
        Page {currentPage} of {totalPages}
      </div>
      <Pagination className="w-auto">
        <PaginationContent className="gap-2">
          {currentPage > 1 && (
            <>
              <PaginationItem className={pbc} onClick={() => onPageChange(1)}>
                <ChevronLeftDoubletIcon />
              </PaginationItem>
              <PaginationItem
                className={pbc}
                onClick={() => onPageChange(currentPage - 1)}
              >
                <ChevronLefttIcon />
              </PaginationItem>
            </>
          )}
          {generatePageNumbers(totalPages, currentPage).map((page, index) =>
            page === "..." ? (
              <PaginationItem key={index} className={pc}>
                <PaginationEllipsis />
              </PaginationItem>
            ) : (
              <PaginationItem
                key={index}
                className={`${pc} ${
                  currentPage === page ? "bg-grey-light" : ""
                }`}
                onClick={() => onPageChange(page)}
              >
                {page}
              </PaginationItem>
            ),
          )}
          {currentPage < totalPages && (
            <>
              <PaginationItem
                className={pbc}
                onClick={() => onPageChange(currentPage + 1)}
              >
                <ChevronRightIcon />
              </PaginationItem>
              <PaginationItem
                className={pbc}
                onClick={() => onPageChange(totalPages)}
              >
                <ChevronRightDoubletIcon />
              </PaginationItem>
            </>
          )}
        </PaginationContent>
      </Pagination>
      <div>
        <PageSizeMenu handleChange={onPageSizeChange} pagination={meta} />
      </div>
    </div>
  );
};

export default AppPagnization;
