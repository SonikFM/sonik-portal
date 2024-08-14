import { useCallback } from "react";
import { useSelector } from "react-redux";
import ArtistTime from "./ArtistTime";

const ArtistStartTimeList = ({ list = [], updateList = e => console.log }) => {
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

  if (!isLoading && !list.length) {
    return null;
  }

  return (
    <div className="px-4 py-1 bg-grey-200 rounded-2xl">
      {Array.isArray(list) &&
        list.map((artist, ind) => {
          return (
            <ArtistTime
              className={
                list.length - 1 > ind ? "py-4 border-b border-grey-light " : ""
              }
              key={artist.id}
              id={artist.id}
              data={artist}
              index={ind}
              onMove={onMove}
              onDelete={() => onDelete(artist)}
            />
          );
        })}
    </div>
  );
};

export default ArtistStartTimeList;
