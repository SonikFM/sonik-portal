import { twMerge } from "tailwind-merge";

const TabMenu = ({
  tabs = [],
  onSelect,
  activeTab,
  title,
  align = "column",
}) => {
  return (
    <div className="flex h-fit flex-col gap-2 border border-grey-light rounded-2xl p-2.5">
      <h6 className="text-grey px-2.5 font-500 text-xs w-[238px]">{title}</h6>
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
            isActive={activeTab.id === tab.id}
            onClick={() => onSelect(tab)}
          />
        ))}
      </div>
    </div>
  );
};

const MenuItem = ({ tab, isActive, onClick }) => {
  return (
    <div
      className={twMerge(
        "flex min-w-[238px] items-center cursor-pointer justify-between text p-2.5 text-sm rounded-lg text-grey-100",
        isActive && "bg-grey-200 text-white cursor-auto",
      )}
      onClick={() => onClick(tab)}
    >
      <span className="text-sm text-inherit">{tab.label}</span>

      <i
        className={twMerge(
          "fa-solid fa-circle-check hidden",
          tab.checked
            ? "text-success-light inline"
            : isActive && "text-[#525866] inline",
        )}
      ></i>
    </div>
  );
};

export default TabMenu;
