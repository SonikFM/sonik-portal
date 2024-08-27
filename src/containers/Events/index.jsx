import { useMemo, useState } from "react";
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
import AppPagnization from "@/components/AppPagnization";

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
    data: useMemo(() => data, [data]),
    columns: useMemo(() => columns, [columns]),
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
      pagination,
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
      <div className="w-full px-4 py-6 md:px-8">
        <Header table={table} />
        <Content table={table} />
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
    </>
  );
};

export default Events;
