import { useCallback } from "react";
import { useSelector } from "react-redux";
import Ticket from "./Ticket";

const TicketList = ({ list = [], updateList = e => console.log }) => {
  const { isLoading } = useSelector(state => state.app.spotify);
  const onMove = useCallback(
    (dragIndex, hoverIndex) => {
      const updatedArtists = [...list];
      const [draggedArtist] = updatedArtists.splice(dragIndex, 1);
      updatedArtists.splice(hoverIndex, 0, draggedArtist);
      updateList(updatedArtists);
    },
    [list],
  );

  const onDelete = artist => {
    updateList(list.filter(a => a.id !== artist.id));
  };

  if (!isLoading && !list?.length) {
    return null;
  }

  return (
    <div className="px-4 py-1 mt-2 bg-grey-200 rounded-2xl">
      {Array.isArray(list) &&
        list.map((ticket, ind) => {
          return (
            <Ticket
              className={
                list.length - 1 > ind ? "py-4 border-b border-grey-light" : ""
              }
              key={ticket.id}
              id={ticket.id}
              data={ticket}
              index={ind}
              onMove={onMove}
              onDelete={() => onDelete(ticket)}
            />
          );
        })}
    </div>
  );
};

export default TicketList;
