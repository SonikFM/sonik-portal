import { ChevronDown, LoaderCircle, MapPin } from "lucide-react";

import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { useRef, useState } from "react";
import { Input } from "./ui/input";

export function Select({
  Icon,
  className,
  hasSearch,
  options = [],
  isLoading,
  onChange = e => console.log,
  placeholder,
  value: val,
  ...rest
}) {
  const triggerRef = useRef(null);
  const [open, setOpen] = useState(false);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <div className="relative">
          {Icon && (
            <Icon className="absolute top-1/2 -translate-y-1/2 left-3 w-4 text-grey-100" />
          )}
          <Input
            variant="ghost"
            role="combobox"
            aria-expanded={open}
            className={cn(
              "justify-between text-sm w-full text-grey-100 h-auto gap-3 p-2.5  !hover:text-white hover:bg-grey-200 border border-grey-light h-10 font-normal",
              className,
              open && "border-[#E1E4EA] text-white placeholder:text-white",
              Icon && "pl-10",
            )}
            value={val}
            placeholder={placeholder || "Select"}
            {...rest}
            ref={triggerRef}
          />

          <ChevronDown className="w-5 h-5 text-grey-100 shrink-0 border-grey-100 absolute top-1/2 right-2 -translate-y-1/2" />
        </div>
      </PopoverTrigger>
      <PopoverContent
        className="p-0 overflow-hidden min-w-full border border-[#E1E4EA] rounded-md"
        align="right"
        style={{ width: triggerRef.current?.offsetWidth }}
      >
        <Command className="bg-[#181B25] p-0">
          {isLoading ? (
            <div className="flex p-2.5 items-center gap-2 text-grey-50">
              <LoaderCircle className="w-5" />
              <span className="text-sm text-grey-50">Searching...</span>
            </div>
          ) : (
            <CommandList>
              <CommandEmpty>No results found.</CommandEmpty>
              <CommandGroup className="p-0">
                {options.map((option, index) => (
                  <CommandItem
                    key={`item-${option.value}-${index}`}
                    onSelect={() => {
                      setOpen(false);
                      onChange(option);
                    }}
                    value={option.value}
                    className={cn(
                      "flex gap-3 font-medium text-white rounded-md cursor-pointer text-sm px-2 py-2.5",
                      index !== 0 && "border-t border-grey-light",
                    )}
                  >
                    <MapPin className="w-5" /> {option.label}
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          )}
        </Command>
      </PopoverContent>
    </Popover>
  );
}
