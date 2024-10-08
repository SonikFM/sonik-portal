import pinkRoundQuestionMark from "@/assets/images/events/pinkRoundQuestionMark.svg";
import TextField from "@/components/TextField";
import { Button } from "@/components/ui/button";
import { Clock } from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { searchArtists } from "@/store/global/actions";
import SelectField from "@/components/SelectField";
import ArtistList from "./ArtistList";
import { openInputPicker } from "../config/helpers";

const DEBOUNCE_DELAY = 500;

const TicketTierAndArtist = ({ getValues, setValue }) => {
  const [openedContainerType, setOpenedContainerType] = useState("list");
  const { artists, isLoading } = useSelector(state => state.app.spotify);

  const selectedArtists = useMemo(
    () => getValues("artists") || [],
    [getValues("artists")],
  );

  useEffect(() => {
    if (selectedArtists.length === 0) setOpenedContainerType(null);
  }, [selectedArtists]);

  useEffect(() => {
    if (openedContainerType === "list" && selectedArtists.length === 0)
      setOpenedContainerType(null);
  }, [openedContainerType]);

  const onDelete = artist => {
    const confirm = window.confirm(
      "Are you sure you want to delete this artist?",
    );
    if (!confirm) return;
    if (selectedArtists.length === 1) setOpenedContainerType(null);
    setValue(
      "artists",
      selectedArtists.filter(a => a.spotify_id !== artist.spotify_id),
    );
  };

  const onEdit = () => {
    if (selectedArtists.length === 1) setOpenedContainerType(null);
    setOpenedContainerType("form");
  };

  const addArtist = () => {
    selectedArtists.push({ spotify_id: "", start_time: "00:00" });
    setValue("artists", selectedArtists);
  };

  const openForm = () => {
    selectedArtists.push({ spotify_id: "", start_time: "00:00" });
    setOpenedContainerType("form");
  };

  return (
    <div className="w-full bg-grey-200 items-center flex gap-4 px-4 py-5 shadow-[#0A0D1408] rounded-xl">
      {openedContainerType === "form" ? (
        <ArtistForm
          artists={artists}
          selectedArtists={selectedArtists}
          setValue={setValue}
          setOpenedContainerType={setOpenedContainerType}
          isLoading={isLoading}
          addArtist={addArtist}
        />
      ) : openedContainerType === "list" ? (
        <ArtistList
          artists={selectedArtists}
          setValue={setValue}
          onEdit={onEdit}
          onDelete={onDelete}
          setOpenedContainerType={setOpenedContainerType}
          addArtist={addArtist}
        />
      ) : (
        <>
          <img
            src={pinkRoundQuestionMark}
            alt=""
            className="w-12 h-12 object-cover"
          />
          <div className="flex flex-col">
            <h6 className="text-base text-white font-medium tracking-tight">
              Artist start time
            </h6>
            <p className="text-grey-100 text-sm">
              Schedule the start times for each artist performing at the event
            </p>
          </div>
          <Button className="w-40 bg-pink text-grey-dark" onClick={openForm}>
            Add Artist
          </Button>
        </>
      )}
    </div>
  );
};

const ArtistForm = ({
  setValue,
  artists,
  selectedArtists,
  setOpenedContainerType,
  isLoading,
  addArtist,
}) => {
  const cancelTokenSourceRef = useRef(null);
  const dispatch = useDispatch();

  const [artistQuery, setArtistQuery] = useState("");

  useEffect(() => {
    const handleDebounce = async () => {
      if (cancelTokenSourceRef.current) {
        cancelTokenSourceRef.current.cancel(
          "Operation canceled due to new request.",
        );
      }
      if (artistQuery) {
        cancelTokenSourceRef.current = axios.CancelToken.source();
        dispatch(
          searchArtists({
            artistQuery,
            cancelToken: cancelTokenSourceRef.current.token,
          }),
        );
      }
    };

    const debounceTimer = setTimeout(handleDebounce, DEBOUNCE_DELAY);

    return () => clearTimeout(debounceTimer);
  }, [artistQuery, dispatch]);

  const onSelect = (option, artistIndex) => {
    const selectedArtist = artists.find(artist => artist.id === option.value);

    selectedArtists[artistIndex] = {
      spotify_id: option.value,
      name: option.label,
      photo: selectedArtist.images[0].url,
      description: selectedArtist.genres.join(", "),
      genre: selectedArtist.genres,
      spotify_url: selectedArtist.external_urls.spotify,
      start_time: "00:00",
    };
    setValue("artists", selectedArtists);
  };

  const timeChangeHandler = (event, artistIndex) => {
    const { value } = event.target;
    selectedArtists[artistIndex].start_time = value;
    setValue("artists", selectedArtists);
  };

  const filteredArtists = artists.map(artist => ({
    label: artist.name,
    value: artist.id,
  }));

  return (
    <div className="w-full flex flex-col gap-16">
      <div className="flex flex-col gap-5">
        {selectedArtists.map((artist, index) => (
          <div className="flex gap-3 items-center " key={index}>
            <SelectField
              label="Artist"
              placeholder="Choose Artist"
              required={true}
              value={artist.spotify_id}
              options={filteredArtists}
              name="type"
              onSearch={e => setArtistQuery(e.target.value)}
              onChange={option => onSelect(option, index)}
              hasSearch={true}
              isLoading={isLoading}
            />

            <TextField
              label="Start Time"
              type="time"
              required={true}
              placeholder="Choose Time"
              Icon={Clock}
              id={`start_time_${index}`}
              onIconClick={() => openInputPicker(`start_time_${index}`)}
              value={artist.start_time || "00:00"} // Default time value
              onChange={event => timeChangeHandler(event, index)}
            />
          </div>
        ))}
      </div>
      <div className="flex gap-3  items-center w-full">
        <Button
          variant="outline"
          className="w-40 bg-transparent"
          onClick={addArtist}
          type="button"
        >
          Add Artist
        </Button>
        <Button
          className="w-40 bg-pink text-grey-dark"
          onClick={() => setOpenedContainerType("list")}
          type="button"
        >
          Save
        </Button>
      </div>
    </div>
  );
};

export default TicketTierAndArtist;
