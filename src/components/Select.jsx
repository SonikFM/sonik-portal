import { useState, useRef } from "react";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { ChevronDown, LoaderCircle, Plus } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import { twMerge } from "tailwind-merge";
import { useTranslation } from "react-i18next";
import TextField from "./TextField";

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
  onClose,
  ...rest
}) => {
  const { t } = useTranslation("events");
  const triggerRef = useRef(null);
  const [open, setOpen] = useState(false);
  const [customTitle, setCustomTitle] = useState("");
  const [customInputOpen, setCustomInputOpen] = useState(false);

  const toggleTitleInput = () => setCustomInputOpen(!customInputOpen);

  const selectOption = option => {
    setValue ? setValue(name, option.value) : onChange(option);
    setCustomInputOpen(false);
    setOpen(false);
  };

  const onOpenChange = () => {
    onClose?.();
    setOpen(!open);
  };

  return (
    <DropdownMenu.Root open={open} onOpenChange={onOpenChange}>
      <DropdownMenu.Trigger asChild>
        <Button
          variant="ghost"
          role="combobox"
          aria-expanded={open}
          className={cn(
            "justify-between relative w-full  gap-3 p-2.5 text-grey-light !hover:text-white hover:bg-grey-200 border border-grey-light h-10 font-normal",
            open &&
              "border-grey-50 border-2 text-white placeholder:text-grey-50",
            className,
          )}
          {...rest}
          ref={triggerRef}
        >
          <div
            className={twMerge(
              "flex text-left w-[calc(100%-80px)] truncate shrink gap-2",
              Icon && "pl-8",
            )}
          >
            {Icon && (
              <Icon className="absolute top-1/2 -translate-y-1/2 left-3 w-4 text-grey-100" />
            )}

            {valueLabel ? (
              <p className="text-sm text-white">{valueLabel}</p>
            ) : (
              <p className="text-sm text-grey-100 ">
                {placeholder || t("select")}
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
          <div className="bg-[#181B25] ">
            {hasSearch && (
              <input
                type="text"
                placeholder={`${t("search")}`}
                onChange={onSearch}
                autoFocus
                className="w-full px-4 py-2.5 border-b outline-none border-grey-light text-sm text-grey-100 bg-[#181B25] placeholder:text-grey-100"
              />
            )}
            {isLoading ? (
              <div className="flex px-5 py-2.5 items-center gap-2 text-grey-50">
                <LoaderCircle className="w-5" />
                <span className="text-sm text-grey-50">
                  {t("searching")}...
                </span>
              </div>
            ) : (
              <div>
                {options.length === 0 ? (
                  <div className="px-5 py-2.5 text-grey-50">
                    {t("noResultsFound")}

                    <div className="py-2 relative mt-4">
                      {!customInputOpen ? (
                        <>
                          <span className="font-medium leading-5 text-sm text-white">
                            Don’t see what you are looking for ?
                          </span>
                          <div
                            className="flex items-center gap-4 cursor-pointer"
                            onClick={toggleTitleInput}
                          >
                            <Button
                              variant="outline"
                              className="mt-2 p-0 flex items-center justify-center w-[32px] h-[32px] text-sm bg-transparent border-2 border-grey-50"
                              onClick={() => setOpen(false)}
                            >
                              <Plus
                                className="w-4 h-4 text-grey-100"
                                size={32}
                              />
                            </Button>
                            <span className="text-sm font-medium text-grey-100 mt-1">
                              Add custom value
                            </span>
                          </div>
                        </>
                      ) : (
                        <>
                          <TextField
                            label={t("title")}
                            required={true}
                            type="text"
                            placeholder={t("addTitle")}
                            id="customTitle"
                            name="customTitle"
                            onChange={e => setCustomTitle(e.target.value)}
                          />

                          <div className="flex mt-8 gap-3  items-center w-full">
                            <Button
                              variant="outline"
                              className="w-40 bg-transparent"
                              type="button"
                              size="sm"
                              onClick={toggleTitleInput}
                            >
                              {t("cancel")}
                            </Button>
                            <Button
                              className="w-40 bg-pink text-grey-dark"
                              onClick={() => selectOption(customTitle)}
                              type="button"
                              size="sm"
                            >
                              {t("save")}
                            </Button>
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                ) : (
                  options.map((option, index) => (
                    <div
                      key={`item-${option.value}-${index}`}
                      onClick={() => selectOption(option)}
                    >
                      {Option ? (
                        Option
                      ) : (
                        <div
                          className={cn(
                            "flex  gap-3 font-400 text-grey-50 cursor-pointer text-sm px-5 py-2.5 hover:bg-[#242630]",
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
