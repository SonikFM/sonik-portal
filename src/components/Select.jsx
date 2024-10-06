import { useState, useRef } from "react";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { ChevronDown, LoaderCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";

export const Select = ({
  Icon,
  Option,
  OptionIcon,
  name,
  className,
  hasSearch,
  options = [],
  isLoading,
  onChange,
  onSearch,
  placeholder,
  type = "single-select",
  selectedOptions,
  setValue,
  valueLabel,
  value: val,
  ...rest
}) => {
  const triggerRef = useRef(null);
  const [open, setOpen] = useState(false);

  return (
    <DropdownMenu.Root open={open} onOpenChange={setOpen}>
      <DropdownMenu.Trigger asChild>
        <Button
          variant="ghost"
          role="combobox"
          aria-expanded={open}
          className={cn(
            "justify-between relative w-full h-auto gap-3 p-2.5 text-grey-light !hover:text-white hover:bg-grey-200 border border-grey-light h-10 font-normal",
            open &&
              "border-grey-50 border-2 text-white placeholder:text-grey-50",
            className,
          )}
          {...rest}
          ref={triggerRef}
        >
          <div className="flex text-left w-[calc(100%-80px)] truncate shrink gap-2">
            {Icon && (
              <Icon className="absolute top-1/2 -translate-y-1/2 left-3 w-4 text-grey-100" />
            )}
            {valueLabel ? (
              <p className="text-sm text-white">{valueLabel}</p>
            ) : (
              <p className="text-sm text-grey-100 ">
                {placeholder || "Select"}
              </p>
            )}
          </div>
          <ChevronDown className="w-5 h-5 text-grey-100 shrink-0 border-grey-100" />
        </Button>
      </DropdownMenu.Trigger>
      <DropdownMenu.Portal>
        <DropdownMenu.Content
          className="p-0 mt-1 overflow-hidden min-w-full border border-[#E1E4EA] rounded-md max-h-[350px] overflow-y-auto"
          align="right"
          style={{ width: triggerRef.current?.offsetWidth }}
        >
          <div className="bg-[#181B25] px-2">
            {hasSearch && (
              <input
                type="text"
                placeholder="Search..."
                onChange={onSearch}
                autoFocus
                className="w-full p-2.5 border-b outline-none border-grey-light text-sm text-grey-100 bg-[#181B25] placeholder:text-grey-100"
              />
            )}
            {isLoading ? (
              <div className="flex p-2.5 items-center gap-2 text-grey-50">
                <LoaderCircle className="w-5" />
                <span className="text-sm text-grey-50">Searching...</span>
              </div>
            ) : (
              <div>
                {options.length === 0 ? (
                  <div className="p-2.5 text-grey-50">No results found.</div>
                ) : (
                  options.map((option, index) => (
                    <div
                      key={`item-${option.value}-${index}`}
                      onClick={() => {
                        setOpen(false);
                        setValue
                          ? setValue(name, option.value)
                          : onChange(option);
                      }}
                    >
                      {Option ? (
                        Option
                      ) : (
                        <div
                          className={cn(
                            "flex gap-3 font-400 text-grey-50 cursor-pointer text-sm px-2 py-2.5",
                            index !== 0 && "border-t border-grey-light",
                          )}
                        >
                          {OptionIcon && (
                            <OptionIcon className="w-5 text-grey-100" />
                          )}
                          <span>{option.label}</span>
                          <span className="text-grey-100">
                            {option.subValue}
                          </span>
                        </div>
                      )}
                    </div>
                  ))
                )}
              </div>
            )}
          </div>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
};
