import { useCallback } from "react";
import Artist from "./Artist";
import { useSelector } from "react-redux";
import { Button } from "@/components/ui/button";
import { PlusIcon } from "lucide-react";
import { useTranslation } from "react-i18next";

const ArtistList = ({
  artists,
  updateList,
  setOpenedContainerType,
  artistQuery,
  onEdit,
  onDelete,
  addArtist,
}) => {
  const { t } = useTranslation("events");
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

  if (!isLoading && !artistQuery && !artists.length) {
    return null;
  }
  if (artistQuery && artists.length === 0)
    return <div className="p-2">No Results Found</div>;

  return (
    <div className="px-4 w-full py-1 mt-2 bg-grey-200 rounded-2xl">
      {Array.isArray(artists) &&
        artists.map((artist, ind) => {
          return (
            <Artist
              className={
                artists.length - 1 > ind
                  ? "py-4 border-b border-grey-light "
                  : ""
              }
              key={artist.id || ind}
              id={artist.id}
              artist={artist}
              index={ind}
              moveArtist={moveArtist}
              onDelete={() => onDelete(ind)}
              onEdit={onEdit}
            />
          );
        })}

      <div className="flex">
        <Button
          variant="outline"
          className="flex bg-transparent w-40 gap-1"
          onClick={() => {
            addArtist();
            setOpenedContainerType("form");
          }}
        >
          <PlusIcon className="w-4" /> {t("addArtist")}
        </Button>
      </div>
    </div>
  );
};

export default ArtistList;
