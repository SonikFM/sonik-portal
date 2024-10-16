import { useDrag, useDrop } from "react-dnd";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import DeleteIcon from "@/svgs/DeleteIcon";
import MenuIcon from "@/svgs/MenuIcon";
import { useRef } from "react";
import EditIcon from "@/svgs/EditIcon";

const ItemType = "ARTIST";

const Artist = ({
  id,
  index,
  moveArtist,
  artist,
  onDelete,
  onEdit,
  className,
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

      moveArtist(dragIndex, hoverIndex);
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
      className={cn("flex w-full justify-between items-center py-4", className)}
      style={{ opacity: isDragging ? 0.5 : 1 }}
    >
      <div className="flex gap-3 items-center">
        <MenuIcon className="cursor-move text-grey-100 shrink-0" />
        {artist.images?.length > 0 && (
          <Avatar className="w-10 h-10 overflow-hidden border rounded-full shrink-0 border-grey">
            <AvatarImage src={artist.images?.[1]?.url} />

            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        )}{" "}
        <div className="flex flex-col gap-1">
          <Label className="w-full text-xs font-medium text-grey-100 shrink">
            Artist name
          </Label>
          <span className="text-sm text-white font-medium">{artist.name}</span>
        </div>
      </div>
      <div className="flex gap-5 items-center">
        {artist.start_time && (
          <div className="flex justify-start flex-col gap-1">
            <Label className="w-full text-xs font-medium text-grey-100 shrink">
              Time
            </Label>
            <span className="text-sm text-white font-medium">
              {artist.start_time}
            </span>
          </div>
        )}
        <div className="flex gap-3 items-center">
          <EditIcon
            className="cursor-pointer text-[#525866] shrink-0 hover:text-warning"
            onClick={onEdit}
          />{" "}
          <DeleteIcon
            className="cursor-pointer text-grey-100 shrink-0 hover:text-error"
            onClick={onDelete}
          />
        </div>
      </div>
    </div>
  );
};

export default Artist;
