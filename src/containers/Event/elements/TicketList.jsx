import { useCallback } from "react";
import Ticket from "./Ticket";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { useTranslation } from "react-i18next";

const TicketList = ({
  tickets,
  updateList,
  onDelete,
  onEdit,
  setActiveTicketTier,
}) => {
  const { t } = useTranslation("events");
  const moveTicket = useCallback(
    (dragIndex, hoverIndex) => {
      const updatedTickets = [...tickets];
      const [draggedTickets] = updatedTickets.splice(dragIndex, 1);
      updatedTickets.splice(hoverIndex, 0, draggedTickets);
      updateList(updatedTickets);
    },
    [tickets],
  );

  if (tickets.length === 0)
    return <div className="p-2 text-white text-center">No Results Found</div>;

  return (
    <div className=" px-2 md:px-4 flex flex-col gap-3 w-full py-1 mt-2 bg-grey-200 rounded-2xl">
      {tickets.map((ticket, ind) => {
        return (
          <Ticket
            className={
              tickets.length - 1 > ind ? "py-4 border-b border-grey-light " : ""
            }
            key={ticket.id}
            ticket={ticket}
            index={ind}
            moveTicket={moveTicket}
            onDelete={() => onDelete(ticket)}
            onEdit={() => onEdit(ticket)}
          />
        );
      })}

      <Button
        variant="outline"
        className="w-[220px] ml-6 md:ml-0 flex gap-3 font-medium bg-transparent"
        type="button"
        onClick={() => setActiveTicketTier("form")}
      >
        <Plus className="w-3.5 text-white" /> {t("addATicketType")}
      </Button>
    </div>
  );
};

export default TicketList;
