import PlacesSelectField from "@/components/PlacesSelectField";
import SelectField from "@/components/SelectField";
import TextField from "@/components/TextField";
import { Button } from "@/components/ui/button";
import ArtistSearch from "../elements/ArtistSearch";
import { useEffect, useMemo, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { searchArtists } from "@/store/global/actions";
import axios from "axios";

const DEBOUNCE_DELAY = 500;

const BasicInfo = ({ register, setValue, getValues, errors }) => {
  const cancelTokenSourceRef = useRef(null);
  const dispatch = useDispatch();
  const [artistQuery, setArtistQuery] = useState("");

  const selectedArtists = useMemo(
    () => getValues("artists") || [],
    [getValues("artists")],
  );

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

  const handleArtistSelect = artist => {
    if (selectedArtists.find(a => a.id === artist.id)) {
      setValue(
        "artists",
        selectedArtists.filter(a => a.id !== artist.id),
      );
    } else {
      setValue("artists", [...selectedArtists, artist]);
    }
  };

  const allowNextStep = () => {
    return (
      !getValues("title") ||
      !getValues("description") ||
      !getValues("venue") ||
      !getValues("presented_by") ||
      selectedArtists.length < 1
    );
  };

  return (
    <div className="space-y-5 w-full">
      <TextField
        label="Title"
        required={true}
        placeholder="Add Title"
        name="title"
        {...register("title", true)}
        errorMessage={errors.title?.message}
      />
      <SelectField
        label="Type"
        placeholder="Choose the type of event"
        required={true}
        options={[
          { value: "concert", label: "Concert" },
          { value: "dj", label: "DJ" },
          { value: "party", label: "Party" },
        ]}
        name="type"
        setValue={setValue}
        getValues={getValues}
      />
      <TextField
        label="Description"
        type="textarea"
        placeholder="Add Description"
        name="description"
        {...register("description", true)}
        errorMessage={errors.description?.message}
      />
      <SelectField
        label="Privacy"
        required={true}
        placeholder="Select type"
        options={[
          { value: "public", label: "Public" },
          { value: "hidden", label: "Hidden" },
          { value: "private", label: "Private" },
        ]}
        getValues={getValues}
        name="privacy"
        setValue={setValue}
      />

      <PlacesSelectField
        label="Venue"
        setValue={setValue}
        placeholder="Search for a venue"
        {...register("venue", true)}
        errorMessage={errors.venue?.formatted_address?.message}
      />

      <TextField
        label="presented_by"
        required={true}
        placeholder="Presenter"
        name="presented_by"
        register={register}
        {...register("presented_by", true)}
      />

      <ArtistSearch
        artistQuery={artistQuery}
        setArtistQuery={setArtistQuery}
        handleArtistSelect={handleArtistSelect}
        selectedArtists={selectedArtists}
        setValue={setValue}
        className="w-full"
      />

      <div className="flex justify-end gap-3 py-8 mb-4 border-t mt-14 border-grey-light">
        <Button variant="outline" className="w-40" type="button">
          Cancel
        </Button>
        <Button className="w-40" disabled={allowNextStep()} type="submit">
          Continue
        </Button>
      </div>
    </div>
  );
};

export default BasicInfo;
