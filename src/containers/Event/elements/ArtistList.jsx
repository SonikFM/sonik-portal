import { useCallback } from "react";
import Artist from "./Artist";
import { useSelector } from "react-redux";

const ArtistList = ({ artists, updateList, artistQuery }) => {
  const { isLoading } = useSelector(state => state.app.spotify);
  const moveArtist = useCallback(
    (dragIndex, hoverIndex) => {
      const updatedArtists = [...artists];
      const [draggedArtist] = updatedArtists.splice(dragIndex, 1);
      updatedArtists.splice(hoverIndex, 0, draggedArtist);
      updateList(updatedArtists);
    },
    [artists],
  );

  const onDelete = artist => {
    updateList(artists.filter(a => a.id !== artist.id));
  };

  if (!isLoading && !artistQuery && !artists.length) {
    return null;
  }
  if (artistQuery && artists.length === 0)
    return <div className="p-2">No Results Found</div>;
  return (
    <div className="px-4 py-1 mt-2 bg-grey-200 rounded-2xl">
      {Array.isArray(artists) &&
        artists.map((artist, ind) => {
          return (
            <Artist
              className={
                artists.length - 1 > ind
                  ? "py-4 border-b border-grey-light "
                  : ""
              }
              key={artist.id}
              id={artist.id}
              artist={artist}
              index={ind}
              moveArtist={moveArtist}
              onDelete={() => onDelete(artist)}
            />
          );
        })}
    </div>
  );
};

export default ArtistList;
