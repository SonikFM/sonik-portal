import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import DeleteIcon from "@/svgs/DeleteIcon";
import EditIcon from "@/svgs/EditIcon";
import MenuIcon from "@/svgs/MenuIcon";
import TicketIcon from "@/svgs/TicketIcon";

const Ticket = ({ className, onDelete, onEdit, ...rest }) => {
  return (
    <div
      className={cn(
        "flex gap-2 md:gap-4 items-center justify-between py-4",
        className,
      )}
      {...rest}
    >
      <MenuIcon className="text-grey-100 shrink-0" />
      <div className="flex justify-between items-center gap-3 w-[calc(100%-60px)]">
        <div className="flex gap-3 items-center">
          <div className="flex items-center justify-center w-10 h-10 rounded-full bg-grey-dark shrink-0">
            <TicketIcon className="w-5 h-5 text-pink" />
          </div>
          <div className="flex flex-col gap-1 overflow-hidden shrink">
            <Label className="w-full text-xs font-medium text-grey-100 truncate ">
              Ticket name
            </Label>
            <span className="text-sm text-white font-medium">
              General admission presale
            </span>
          </div>
        </div>

        <div className="flex gap-3">
          <div className="flex justify-start flex-col gap-1">
            <Label className="w-full text-xs font-medium text-grey-100 shrink">
              Quantity
            </Label>
            <span className="text-sm text-white font-medium">500</span>
          </div>
          <div className="flex justify-start flex-col gap-1">
            <Label className="w-full text-xs font-medium text-grey-100 shrink">
              Price
            </Label>
            <span className="text-sm text-white font-medium">5</span>
          </div>
        </div>
      </div>

      <div className="flex gap-2 items-center ml-5">
        <EditIcon
          className="cursor-pointer text-[#525866] shrink-0 hover:text-warning"
          onClick={onEdit}
        />
        <DeleteIcon
          className="cursor-pointer text-grey-100 shrink-0 hover:text-error"
          onClick={onDelete}
        />
      </div>
    </div>
    // <div className={cn("flex gap-2  md:gap-3 items-center py-4", className)} {...rest}>
    // 	<MenuIcon className="text-grey-100 shrink-0" />
    // 	<div className="flex items-center justify-center w-10 h-10 rounded-full bg-grey-dark shrink-0">
    // 		<TicketIcon className="w-5 h-5 text-pink" />
    // 	</div>
    // 	<div className="w-full shrink">
    // 		<p className="text-xs text-grey-100"></p>
    // 		<Label className="font-medium text-white">
    // 			General addmission presale
    // 		</Label>
    // 	</div>
    // 	<div className="w-20">
    // 		<p className="text-xs text-grey-100">Quality</p>
    // 		<Label className="font-medium text-white">
    // 			500
    // 		</Label>
    // 	</div>
    // 	<div className="w-20">
    // 		<p className="text-xs text-grey-100">Price</p>
    // 		<Label className="font-medium text-white">
    // 			100$
    // 		</Label>
    // 	</div>
    // 	<Button variant="destructive" className="flex gap-2" > <DeleteIcon className="text-white" />  Delete</Button>
    // </div>
  );
};

export default Ticket;
