import * as React from "react";
import { ChevronsUpDown } from "lucide-react";
import logo from "@/assets/images/logo.svg";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { useDispatch, useSelector } from "react-redux";
import { switchOrganization } from "@/store/global/actions";

export function OrganizationDropdown() {
  const { user } = useSelector(state => state.app);
  const dispatch = useDispatch();
  const [open, setOpen] = React.useState(false);

  const switchOrganizationNow = organization => {
    dispatch(
      switchOrganization({ _organization: organization.organization._id }),
    );
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="ghost"
          role="combobox"
          aria-expanded={open}
          className="justify-between w-full h-auto gap-3 p-3 text-white hover:bg-grey-200 hover:text-white "
        >
          <Avatar className="w-10 h-10 rounded-full">
            <AvatarImage
              src={user.organization?.image || logo}
              className="object-cover"
            />
            <AvatarFallback>SO</AvatarFallback>
          </Avatar>
          <div className="flex flex-col text-left w-[calc(100%-80px)] truncate shrink">
            <h3 className="text-sm font-medium">
              {user.defaultOrganization?.name}
            </h3>
            <p className="mt-1 text-xs capitalize text-grey-100">
              {user.defaultRole?.name}
            </p>
          </div>
          <ChevronsUpDown className="w-6 h-6 p-[2px] border rounded-md text-grey-100 shrink-0 border-grey-100" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0 ">
        <Command>
          <CommandInput placeholder="Search framework..." />
          <CommandList>
            <CommandEmpty>No results found.</CommandEmpty>
            <CommandGroup>
              {user?.organizations.map(organization => (
                <CommandItem
                  key={organization.organization._id}
                  onSelect={() => switchOrganizationNow(organization)}
                  className="cursor-pointer"
                >
                  {organization.organization.name}
                  <span className="capitalize">({organization.role.name})</span>
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
