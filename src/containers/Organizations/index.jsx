import { useCallback, useEffect, useMemo, useState } from "react";
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
import { getColumns, transformOrganizationData } from "./elements/data";
import DashboardHeader from "@/layout/DashboardHeader";
import { useNavigate } from "react-router-dom";
import { PlusIcon } from "lucide-react";
import OrganizationIcon from "@/svgs/OrganizationIcon";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteOrganization,
  fetchOrganizations,
} from "@/store/organization/actions";
import AppPagnization from "@/components/AppPagnization";
import { updateMeta } from "@/store/organization/slice";

const SCROLL_THRESHOLD = 400;

const Organizations = () => {
  const dispatch = useDispatch();

  const [sorting, setSorting] = useState([]);
  const [columnFilters, setColumnFilters] = useState([]);
  const [rowSelection, setRowSelection] = useState({});
  const [pagination, setPagination] = useState({
    pageIndex: 0,
    pageSize: 12,
  });
  const [open, setIsOpen] = useState(false);

  const {
    data: apiData,
    meta,
    isLoading,
    searchTerm,
    view,
    grid: apiGridData,
    gridMeta,
    isFetching,
  } = useSelector(state => state.organization.organizations);
  const { isLoading: loading } = useSelector(state => state.organization);

  const fetchRecords = useCallback(
    (page, limit, s) => {
      return dispatch(
        fetchOrganizations({
          page,
          limit,
          searchTerm: s || searchTerm,
        }),
      );
    },
    [dispatch, searchTerm],
  );

  useEffect(() => {
    fetchRecords(pagination.pageIndex + 1, pagination.pageSize);
  }, []);

  const handlePageChange = value => {
    setPagination(prev => {
      return { pageSize: meta.limit, pageIndex: value };
    });
    if (typeof value === "number") {
      fetchRecords(value, pagination.pageSize, searchTerm);
    }
  };

  const handlePageSizeChange = value => {
    setPagination({ page: 0, pageSize: value });
    fetchRecords(1, value, searchTerm);
    dispatch(updateMeta({ key: "limit", value }));
  };

  useEffect(() => {
    if (open && !loading) {
      setIsOpen(false);
    }
  }, [loading]);

  const handleDelete = e => {
    dispatch(deleteOrganization(e.id));
  };
  const handleEdit = e => {
    console.log({ e });
    navigate(`/organization/${e.id}`);
  };

  const data = useMemo(() => transformOrganizationData(apiData), [apiData]);
  const grid = useMemo(
    () => transformOrganizationData(apiGridData),
    [apiGridData],
  );

  const columns = getColumns({
    onDelete: handleDelete,
    onEdit: handleEdit,
    isLoading,
    open,
    toggleOpen: setIsOpen,
    loading: loading,
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
    onRowSelectionChange: setRowSelection,
    onPaginationChange: setPagination,
    state: {
      sorting,
      columnFilters,
      rowSelection,
      pagination: {
        pageIndex: pagination.pageIndex,
        pageSize: pagination.pageSize,
      },
    },
  });

  const navigate = useNavigate();
  const redirectToCreateEvent = () => {
    navigate("/organization/create-organization");
  };

  const loadMoreData = useCallback(() => {
    if (gridMeta.page >= gridMeta.total / gridMeta.limit) return;

    dispatch(fetchRecords(gridMeta.page + 1, pagination.pageSize, searchTerm));
  }, [dispatch, gridMeta, isFetching, gridMeta.total, view]);

  useEffect(() => {
    if (view === "grid" && !isFetching) {
      const handleScroll = () => {
        if (
          window.innerHeight + document.documentElement.scrollTop >=
          document.documentElement.offsetHeight - SCROLL_THRESHOLD
        ) {
          loadMoreData();
        }
      };
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, [loadMoreData, view]);

  return (
    <>
      <DashboardHeader
        title="Organization"
        description="From here your can customize your organization’s data"
        icon={<OrganizationIcon className="text-grey-100" />}
      >
        <Button className="flex gap-1" onClick={redirectToCreateEvent}>
          <PlusIcon /> New Organizer Profile
        </Button>
      </DashboardHeader>
      {loading ? (
        <div className="box-border absolute z-10 flex items-center justify-center w-full h-[calc(100%-88px)]">
          <div className="border-4 rounded-full w-7 h-7 animate-spin border-t-primary border-primary/30"></div>
        </div>
      ) : null}
      <div className="box-border relative w-full px-4 py-6 md:px-8 ">
        <Header pagination={pagination} />
        <div className="">
          <Content table={table} view={view} columns={columns} grid={grid} />
        </div>
        {view === "list" && (
          <AppPagnization
            meta={{
              pageSize: pagination.pageSize,
              pageIndex: meta.page - 1,
              total: meta.total,
            }}
            onPageChange={handlePageChange}
            onPageSizeChange={handlePageSizeChange}
          />
        )}
      </div>
    </>
  );
};

export default Organizations;
