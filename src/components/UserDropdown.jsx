import { BadgeCheckIcon, ChevronRight } from "lucide-react";
import profile from "@/assets/images/profile.png";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { useDispatch } from "react-redux";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { logout } from "@/store/global/actions";
import { useState } from "react";
import { useTranslation } from "react-i18next";

export function UserDropdown() {
  const { t } = useTranslation("navigations");
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const handleLogout = e => {
    e.stopPropagation();
    dispatch(logout());
  };

  return (
    <DropdownMenu open={open} onOpenChange={setOpen}>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          role="combobox"
          aria-expanded={open}
          className="justify-between w-full h-auto gap-3 p-3 text-white hover:bg-grey-200 hover:text-white "
        >
          <Avatar className="w-10 h-10 rounded-full bg-warning">
            <AvatarImage src={profile} />
            <AvatarFallback>SO</AvatarFallback>
          </Avatar>
          <div className="flex flex-col text-left w-[calc(100%-80px)] truncate shrink">
            <h3 className="flex text-sm font-medium gap-1.5 ">
              Sophia Williams
              <BadgeCheckIcon className="w-5 h-5 stroke-grey-dark fill-pink" />
            </h3>
            <p className="mt-1 text-xs text-grey-100">sophia@alignui.com</p>
          </div>
          <ChevronRight className="w-6 h-6 p-[2px] text-grey-100 shrink-0" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-[200px]">
        <DropdownMenuLabel>{t("myAccount")}</DropdownMenuLabel>
        <DropdownMenuItem>{t("profile")}</DropdownMenuItem>
        <DropdownMenuItem>{t("settings")}</DropdownMenuItem>
        <DropdownMenuItem onClick={handleLogout}>
          {t("logout")}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
