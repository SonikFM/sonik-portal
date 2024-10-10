import * as Popover from "@radix-ui/react-popover";
import { ChevronDown } from "lucide-react";
import { twMerge } from "tailwind-merge";

const TabMenu = ({
  tabs = [],
  onSelect,
  activeTab,
  currentTab,
  title,
  align = "column",
}) => {
  return (
    <>
      <div className="md:hidden">
        <Popover.Root>
          <Popover.Trigger asChild>
            <button
              className="w-full border border-grey-light flex p-2.5 gap-5 relative items-center rounded-xl text-grey-100 bg-grey-200"
              aria-label="Update dimensions"
            >
              <i className="fa-solid fa-circle-check text-disabled-300 text-[1.5rem]"></i>
              <div className="flex flex-col text-start max-w-60">
                <h3 className="text-[20px] leading-8 text-white">
                  {activeTab.label}
                </h3>
                <p className="text-xs text-[#FFFFFF99]">{activeTab.desc}</p>
              </div>
              <ChevronDown className="w-5 h-5 absolute right-3 text-grey-100 shrink-0 border-grey-100" />
            </button>
          </Popover.Trigger>
          <Popover.Portal>
            <Popover.Content
              sideOffset={5}
              style={{ width: "100vw", padding: "0 1rem 0 1rem" }}
            >
              <Menu
                tabs={tabs}
                onSelect={onSelect}
                activeTab={activeTab}
                currentTab={currentTab}
                title={title}
                align={align}
              />
            </Popover.Content>
          </Popover.Portal>
        </Popover.Root>
      </div>
      <div className="hidden md:block">
        <Menu
          tabs={tabs}
          onSelect={onSelect}
          activeTab={activeTab}
          currentTab={currentTab}
          title={title}
          align={align}
        />
      </div>
    </>
  );
};

const Menu = ({ tabs, onSelect, activeTab, currentTab, title, align }) => {
  return (
    <div className="flex w-full h-fit bg-[#181B25] md:bg-transparent  flex-col gap-2 border border-grey-light rounded-2xl p-2.5 shadow-[0_1px_2px_0_rgba(10,13,20,0.08)]">
      <h6 className="text-grey px-2.5 font-500 text-xs w-full md:w-[238px]">
        {title}
      </h6>
      <div
        className={twMerge(
          "flex flex-col gap-2",
          align === "row" && "flex-row",
        )}
      >
        {tabs?.map((tab, index) => (
          <MenuItem
            key={index}
            tab={tab}
            currentTab={currentTab}
            isActive={activeTab.id === tab.id}
            isCurrentTab={currentTab === tab.id}
            onClick={() => onSelect(tab)}
            activeTab={activeTab}
          />
        ))}
      </div>
    </div>
  );
};

const MenuItem = ({
  tab,
  isActive,
  onClick,
  isCurrentTab,
  currentTab,
  activeTab,
}) => {
  return (
    <div
      className={twMerge(
        "flex w-full md:w-auto min-w-[238px] items-center cursor-pointer justify-between text p-2.5 text-sm rounded-lg text-grey-100",
        isActive && "bg-[#242630] md:bg-grey-200 text-white cursor-auto",
        tab.id < currentTab || activeTab.id !== currentTab
          ? "cursor-pointer"
          : "cursor-auto",
      )}
      onClick={() => onClick(tab)}
    >
      <span className="text-sm text-inherit">{tab.label}</span>

      <i
        className={twMerge(
          "fa-solid fa-circle-check hidden",
          tab.checked
            ? "text-success-light inline"
            : isCurrentTab && "text-[#525866] inline",
        )}
      ></i>
    </div>
  );
};

export default TabMenu;
