import { cn } from "@/lib/utils";
import DeleteIcon from "@/svgs/DeleteIcon";
import MenuIcon from "@/svgs/MenuIcon";
import TimerIcon from "@/svgs/TimerIcon";
import { useRef } from "react";
import { useDrag, useDrop } from "react-dnd";

const ItemType = "ARTIST_START_TIME";
const ArtistTime = ({
  className,
  id,
  onMove,
  data,
  index,
  onDelete,
  ...rest
}) => {
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
    <div
      ref={ref}
      className={cn("flex gap-2 md:gap-3 items-center py-4", className)}
      style={{ opacity: isDragging ? 0.5 : 1 }}
      {...rest}
    >
      <MenuIcon className="cursor-pointer text-grey-100 shrink-0" />
      <div className="h-10 rounded-[10px] text-sm px-3 py-2.5 bg-grey-dark text-grey-100 w-2/3 shrink  tuncate ">
        {data.name}
      </div>
      <div className="h-10 rounded-[10px] text-sm px-3 py-2.5 bg-grey-dark text-grey-100 w-1/3  flex gap-2 tuncate ">
        {" "}
        <TimerIcon /> <span className="uppercase truncate">10:00 pm</span>{" "}
      </div>
      <DeleteIcon
        className="mr-2 cursor-pointer text-grey-100 shrink-0 hover:text-error"
        onClick={onDelete}
      />
    </div>
  );
};

export default ArtistTime;
