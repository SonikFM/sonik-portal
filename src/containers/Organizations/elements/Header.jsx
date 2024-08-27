import SearchInput from "@/components/SearchInput";
import { Button } from "@/components/ui/button";
import FilterIcon from "@/svgs/FilterIcon";
import GridIcon from "@/svgs/GridIcon";
import SettingsIcon from "@/svgs/SettingsIcon";
import UnOrderListIcon from "@/svgs/UnOrderListIcon";
import { useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { debounce } from "lodash";
import { fetchOrganizations } from "@/store/organization/actions";
import { toggleView } from "@/store/organization/slice";

const Header = ({ pagination }) => {
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();
  const { meta, view } = useSelector(state => state.organization.organizations);

  const debouncedSearch = useCallback(
    debounce(query => {
      console.log({ query, a: "ASdfasdf" });
      if (query) {
        dispatch(
          fetchOrganizations({
            page: 1,
            limit: pagination.pageSize,
            searchTerm: query,
          }),
        );
      }
    }, 500),
    [pagination],
  );

  const toggleListView = v => e => {
    if (v !== view) {
      dispatch(toggleView(v));
    }
  };

  console.log({ meta, pagination });

  return (
    <div className="flex flex-wrap items-center gap-4 py-4 xl:flex-nowrap xl:justify-between">
      <div className="flex gap-3">
        <Button
          variant={view === "grid" ? "" : "outline"}
          size="sm"
          onClick={toggleListView("grid")}
        >
          <GridIcon />
        </Button>
        <Button
          variant={view === "list" ? "" : "outline"}
          size="sm"
          onClick={toggleListView("list")}
        >
          <UnOrderListIcon />
        </Button>
        <SearchInput
          className="h-9"
          value={query}
          onChange={e => {
            setQuery(e.target.value);
            debouncedSearch(e.target.value);
          }}
        />
      </div>
      <div className="flex gap-3">
        <Button variant="outline" size="sm" className="gap-1">
          <FilterIcon /> Filter
        </Button>
        <Button variant="outline" size="sm">
          <SettingsIcon />
        </Button>
      </div>
    </div>
  );
};

export default Header;
