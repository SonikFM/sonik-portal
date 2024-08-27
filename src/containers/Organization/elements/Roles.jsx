import {
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { useMemo, useState } from "react";
import RolesContent from "./RolesContent";
import { data, columns } from "./data";
import AppPagnization from "@/components/AppPagnization";

const Roles = () => {
  const [sorting, setSorting] = useState([]);
  // eslint-disable-next-line no-unused-vars
  const [columnFilters, setColumnFilters] = useState([]);
  const [pagination, setPagination] = useState({
    pageIndex: 0,
    pageSize: 8,
  });

  const table = useReactTable({
    data: useMemo(() => data, [data]),
    columns: useMemo(() => columns, [columns]),
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onPaginationChange: setPagination,
    initialState: {
      pagination,
    },
    state: {
      sorting,
      pagination,
      columnFilters,
    },
  });

  const handlePageChange = value => {
    setPagination(prev => {
      return { pageSize: pagination.pageSize, pageIndex: value };
    });
    if (typeof value === "number") {
      /* API CALL  */
    }
  };

  const handlePageSizeChange = value => {
    setPagination({ pageIndex: 0, pageSize: parseInt(value) });
    /* API CALL  */
  };

  return (
    <div>
      <RolesContent table={table} />
      <AppPagnization
        meta={{
          pageSize: pagination.pageSize,
          pageIndex: pagination.pageIndex,
          total: data.length,
        }}
        onPageChange={handlePageChange}
        onPageSizeChange={handlePageSizeChange}
      />
    </div>
  );
};

export default Roles;
