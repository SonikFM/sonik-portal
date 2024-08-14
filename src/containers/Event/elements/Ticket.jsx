import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import DeleteIcon from "@/svgs/DeleteIcon";
import MenuIcon from "@/svgs/MenuIcon";
import TicketIcon from "@/svgs/TicketIcon";
import { useRef } from "react";
import { useDrag, useDrop } from "react-dnd";

const ItemType = "TICKET";
const Ticket = ({ className, index, onMove, id, data, onDelete, ...rest }) => {
  const ref = useRef(null);

  const [, drop] = useDrop({
    accept: ItemType,
    hover(item, monitor) {
      if (!ref.current) {
        return;
      }
      const dragIndex = item.index;
      const hoverIndex = index;

      if (dragIndex === hoverIndex) {
        return;
      }

      const hoverBoundingRect = ref.current?.getBoundingClientRect();
      const hoverMiddleY =
        (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
      const clientOffset = monitor.getClientOffset();
      const hoverClientY = clientOffset.y - hoverBoundingRect.top;

      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return;
      }

      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return;
      }

      onMove(dragIndex, hoverIndex);
      item.index = hoverIndex;
    },
  });

  const [{ isDragging }, drag] = useDrag({
    type: ItemType,
    item: { id, index },
    collect: monitor => ({
      isDragging: monitor.isDragging(),
    }),
  });

  drag(drop(ref));
  return (
    <>
      <div
        ref={ref}
        className={cn(
          "flex gap-2 md:gap-3 items-center justify-between py-4 md:hidden",
          className,
        )}
        style={{ opacity: isDragging ? 0.5 : 1 }}
        {...rest}
      >
        <MenuIcon className="cursor-pointer text-grey-100 shrink-0" />
        <div className="flex items-center gap-2 w-[calc(100%-60px)]">
          <div className="flex items-center justify-center w-10 h-10 rounded-full bg-grey-dark shrink-0">
            <TicketIcon className="w-5 h-5 text-pink" />
          </div>
          <div className="flex flex-col gap-2 overflow-hidden shrink ">
            <Label className="w-full font-medium text-white truncate ">
              General admission presale
            </Label>
            <div className="flex gap-2">
              <div className="flex items-center w-20 gap-2">
                <p className="text-xs text-grey-100">Quality</p>
                <Label className="font-medium text-white">
                  {data.tickets || "500"}
                </Label>
              </div>
              <div className="flex items-center w-20 gap-2">
                <p className="text-xs text-grey-100">Price</p>
                <Label className="font-medium text-white">100$</Label>
              </div>
            </div>
          </div>
        </div>
        <Button
          variant="destructive"
          className="flex gap-2 p-2 cursor-pointer shrink-0 hover:text-error"
        >
          <DeleteIcon className="text-white" onClick={onDelete} />
        </Button>
      </div>
      <div
        ref={ref}
        className={cn(
          " gap-2 hidden md:flex  md:gap-3 items-center py-4",
          className,
        )}
        style={{ opacity: isDragging ? 0.5 : 1 }}
        {...rest}
      >
        <MenuIcon className="cursor-pointer text-grey-100 shrink-0" />
        <div className="flex items-center justify-center w-10 h-10 rounded-full bg-grey-dark shrink-0">
          <TicketIcon className="w-5 h-5 text-pink" />
        </div>
        <div className="w-full shrink">
          <p className="text-xs text-grey-100"></p>
          <Label className="font-medium text-white">
            General addmission presale
          </Label>
        </div>
        <div className="w-20">
          <p className="text-xs text-grey-100">Quality</p>
          <Label className="font-medium text-white">500</Label>
        </div>
        <div className="w-20">
          <p className="text-xs text-grey-100">Price</p>
          <Label className="font-medium text-white">100$</Label>
        </div>
        <Button variant="destructive" className="flex gap-2" onClick={onDelete}>
          {" "}
          <DeleteIcon className="text-white" /> Delete
        </Button>
      </div>
    </>
  );
};

export default Ticket;

{
  /* <div className={cn("flex gap-2  md:gap-3 items-center py-4", className)} {...rest}>
	<MenuIcon className="text-grey-100 shrink-0" />
	<div className="flex items-center justify-center w-10 h-10 rounded-full bg-grey-dark shrink-0">
		<TicketIcon className="w-5 h-5 text-pink" />
	</div>
	<div className="w-full shrink">
		<p className="text-xs text-grey-100"></p>
		<Label className="font-medium text-white">
			General addmission presale
		</Label>
	</div>
	<div className="w-20">
		<p className="text-xs text-grey-100">Quality</p>
		<Label className="font-medium text-white">
			500
		</Label>
	</div>
	<div className="w-20">
		<p className="text-xs text-grey-100">Price</p>
		<Label className="font-medium text-white">
			100$
		</Label>
	</div>
	<Button variant="destructive" className="flex gap-2" > <DeleteIcon className="text-white" />  Delete</Button>
</div> */
}
