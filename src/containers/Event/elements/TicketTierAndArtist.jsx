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
import { useTranslation } from "react-i18next";
import { getRandomNumber } from "@/helper/general";
import { resetArtists } from "@/store/global/slice";

const DEBOUNCE_DELAY = 500;

const TicketTierAndArtist = ({ getValues, setValue }) => {
  const { t } = useTranslation("events");
  const [openedContainerType, setOpenedContainerType] = useState("list");
  const { artists, isLoading } = useSelector(state => state.app.spotify);

  const selectedArtists = useMemo(
    () => getValues("artists") || [],
    [getValues("artists")],
  );

  useEffect(() => {
    if (selectedArtists.length < 1) setOpenedContainerType(null);
    else if (openedContainerType !== "form") setOpenedContainerType("list");
  }, [selectedArtists]);

  const onDelete = index => {
    const confirm = window.confirm(t("areYouSureToDeleteArtist"));
    if (!confirm) return;
    if (selectedArtists.length === 1) setOpenedContainerType(null);
    selectedArtists.splice(index, 1);
    setValue("artists", selectedArtists);
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
              {t("artistStartTime")}
            </h6>
            <p className="text-grey-100 text-sm">{t("scheduleTheStartTime")}</p>
          </div>
          <Button className="w-40 bg-pink text-grey-dark" onClick={openForm}>
            {t("addArtist")}
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
  const { t } = useTranslation("events");
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
    dispatch(resetArtists());
    if (selectedArtist) {
      selectedArtists[artistIndex] = {
        spotify_id: option.value,
        name: option.label,
        photo: selectedArtist.images[0].url,
        description: selectedArtist.genres.join(", "),
        genre: selectedArtist.genres,
        spotify_url: selectedArtist.external_urls.spotify,
        start_time: "00:00",
      };
      return setValue("artists", selectedArtists);
    }

    selectedArtists[artistIndex] = {
      id: getRandomNumber(0, 10000),
      name: option,
      start_time: "00:00",
    };
    setValue("artists", selectedArtists);
  };

  const timeChangeHandler = (event, artistIndex) => {
    const { value } = event.target;
    selectedArtists[artistIndex].start_time = value;
    setValue("artists", selectedArtists);
  };

  const saveArtists = () => {
    selectedArtists = selectedArtists.filter(artist => artist.name);
    setValue("artists", selectedArtists);
    setOpenedContainerType("list");
  };

  const filteredArtists = useMemo(() => {
    return artists.map(artist => ({
      label: artist.name,
      value: artist.id,
    }));
  }, [artists]);

  return (
    <div className="w-full flex flex-col gap-16">
      <div className="flex flex-col gap-5">
        {selectedArtists.map((artist, index) => (
          <div
            className="flex pb-3 border-b border-grey-light md:border-none flex-col md:flex-row gap-3 items-center "
            key={index}
          >
            <SelectField
              label={t("artist")}
              placeholder={t("chooseArtist")}
              required={true}
              value={artist.name}
              options={filteredArtists}
              name="type"
              onSearch={e => setArtistQuery(e.target.value)}
              onChange={option => onSelect(option, index)}
              onClose={() => dispatch(resetArtists())}
              hasSearch={true}
              isLoading={isLoading}
            />

            <TextField
              label={t("startTime")}
              type="time"
              required={true}
              placeholder={t("chooseTime")}
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
          {t("addArtist")}
        </Button>
        <Button
          className="w-40 bg-pink text-grey-dark"
          onClick={saveArtists}
          type="button"
        >
          {t("save")}
        </Button>
      </div>
    </div>
  );
};

export default TicketTierAndArtist;
