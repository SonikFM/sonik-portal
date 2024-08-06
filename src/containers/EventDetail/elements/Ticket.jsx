import { cn } from "@/lib/utils";
import TicketIcon from "@/svgs/TicketIcon";
import { MinusIcon, PlusIcon } from "lucide-react";
import { useState } from "react";

const Ticket = ({ className }) => {
  const price = 100;
  const [seats, setSeats] = useState(0);
  const handleSeats = seat => () => {
    if (seat == "add") {
      setSeats(seats + 1);
    } else {
      setSeats(seats - 1);
    }
  };
  return (
    <div
      className={cn(
        "py-4 border-grey-light flex gap-4 justify-between",
        className,
      )}
    >
      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/20">
          <TicketIcon className="transform -rotate-45 text-primary" />
        </div>
        <h4 className="text-sm font-medium text-white">General Seats</h4>
      </div>
      <div>
        <p className="text-xs text-grey-100">Available tickets</p>
        <p className="text-sm text-white">250/500</p>
      </div>
      <div>
        <p className="text-xs text-grey-100">Price</p>
        <p className="text-sm text-white">${price}</p>
      </div>
      <div className="flex items-center justify-between gap-3">
        <div
          className="flex items-center justify-center w-10 h-10 border rounded-full cursor-pointer hover:border-grey-100 hover:text-white border-grey-light text-grey-100 "
          onClick={handleSeats("minus")}
        >
          <MinusIcon className="w-4 h-4" />
        </div>
        <p className="text-sm text-white text-medium">{seats}</p>
        <div
          className="flex items-center justify-center w-10 h-10 border rounded-full cursor-pointer hover:border-grey-100 hover:text-white border-grey-light text-grey-100 "
          onClick={handleSeats("add")}
        >
          <PlusIcon className="w-4 h-4" />
        </div>
      </div>
      <div>
        <p className="text-xs text-grey-100">Total Price</p>
        <p className="text-sm text-white">${price * seats}</p>
      </div>
    </div>
  );
};

export default Ticket;
