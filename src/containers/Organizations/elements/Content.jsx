import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { flexRender } from "@tanstack/react-table";
import OrganizerCard from "@/components/OrganizerCard";
import { useSelector } from "react-redux";
import { RowSkeleton } from "./RowSkeleton";
import { GridSkeleton } from "./GridSkeleton";

const Content = ({ table, view = "list", columns = [], grid = [] }) => {
  const { isLoading, isFetching } = useSelector(
    state => state.organization.organizations,
  );
  console.log({ isLoading, isFetching });
  if (view === "list") {
    if (isLoading) {
      return (
        <>
          {[1, 2, 3, 4, 5, 6, 7, 8].map(i => (
            <RowSkeleton key={`${i + 1}`} />
          ))}
        </>
      );
    }
    return (
      <Table>
        <TableHeader className="border-0">
          {table.getHeaderGroups().map((headerGroup, ind) => (
            <TableRow
              key={`header-${headerGroup.id}-${ind}`}
              className="px-3 !border-0 h-9 bg-grey-200"
            >
              {headerGroup.headers.map((header, index) => {
                return (
                  <TableHead
                    key={`headercell-${header.id}-${index}`}
                    className={`${index === 0 ? "rounded-l-lg" : ""}`}
                  >
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext(),
                        )}
                  </TableHead>
                );
              })}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody className="text-white">
          {table.getRowModel().rows?.length ? (
            table.getRowModel().rows.map((row, ind) => (
              <TableRow
                key={`row-${row.id}-${ind}`}
                data-state={row.getIsSelected() && "selected"}
                className="!border-b border-grey-light"
              >
                {row.getVisibleCells().map((cell, index) => (
                  <TableCell key={`cell-${row.id}-${index}`} className="py-3">
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
    if (isLoading) {
      return (
        <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-x-6 gap-y-5">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(i => (
            <GridSkeleton key={`${i + 1}`} />
          ))}
        </div>
      );
    }
    return (
      <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-x-6 gap-y-5">
        {grid?.length ? (
          grid.map((row, index) => (
            <OrganizerCard key={`grid-row-${row.id}-${index}`} data={row} />
          ))
        ) : (
          <div className="h-24 text-center">No results.</div>
        )}
        {isFetching && (
          <div className="flex items-center justify-center gap-2">
            Fetching data
            <div className="border-4 rounded-full w-7 h-7 animate-spin border-t-primary border-primary/30"></div>
          </div>
        )}
      </div>
    );
  }
};

export default Content;
