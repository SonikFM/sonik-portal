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
import BuildingIcon from "@/svgs/BuildingIcon";
import AppPagnization from "@/components/AppPagnization";

const Venues = () => {
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
  const handleRedirect = () => {
    navigate("/venues/create-venue");
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
        title="Explore Venues"
        description="See all our venues listed for arrange events"
        icon={<BuildingIcon className="text-grey-100" />}
      >
        <Button className="flex gap-1" onClick={handleRedirect}>
          <PlusIcon /> Add Venue
        </Button>
      </DashboardHeader>
      <div className="w-full px-4 py-6 md:px-8">
        <Header view={"list"} />
        <div className="">
          <Content table={table} view={"list"} />
        </div>
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

export default Venues;
