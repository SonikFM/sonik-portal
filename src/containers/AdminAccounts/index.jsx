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
import { Tabs, TabsContent } from "@/components/ui/tabs";
import CalendarIcon from "@/svgs/CalendarIcon";
import AppPagnization from "@/components/AppPagnization";

const AdminAccounts = () => {
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
    navigate("/admins/create-admin");
  };
  const onIconClick = () => {
    navigate(-1);
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
        icon={<CalendarIcon className="w-5 h-5 text-grey-100" />}
        description={"You have 2 meetings and 1 events today 🗓️"}
        title="February 04, 2024"
        hasNotifications={true}
        hasSearch={true}
        onIconClick={onIconClick}
      >
        <Button
          variant="outline"
          className="flex gap-2"
          onClick={handleRedirect}
        >
          <CalendarIcon /> Schedule
        </Button>
        <Button className="flex gap-1" onClick={handleRedirect}>
          <PlusIcon /> Create Account
        </Button>
      </DashboardHeader>

      <Tabs defaultValue="all" className="w-full px-4 py-6 md:px-8">
        <Header table={table} />

        <TabsContent value="all">
          <Content table={table} />
        </TabsContent>
        <TabsContent value="active">
          <Content table={table} />
        </TabsContent>
        <TabsContent value="inactive">
          <Content table={table} />
        </TabsContent>
        <AppPagnization
          meta={{
            pageSize: pagination.pageSize,
            pageIndex: pagination.pageIndex,
            total: data.length,
          }}
          onPageChange={handlePageChange}
          onPageSizeChange={handlePageSizeChange}
        />
      </Tabs>
    </>
  );
};

export default AdminAccounts;
