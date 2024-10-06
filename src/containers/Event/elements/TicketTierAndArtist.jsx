import pinkRoundQuestionMark from "@/assets/images/events/pinkRoundQuestionMark.svg";
import SelectField from "@/components/SelectField";
import TextField from "@/components/TextField";
import { Button } from "@/components/ui/button";
import { Clock } from "lucide-react";
import { useState } from "react";

const TicketTierAndArtist = ({ getValues, setValue, errors }) => {
  const [artistFieldsOpen, setArtistFieldsOpen] = useState(false);
  const [artists, setArtists] = useState([{ artist: "", startTime: "" }]);

  const addArtist = () =>
    setArtists([...artists, { artist: "", startTime: "" }]);
  return (
    <div className="w-full bg-grey-200 items-center flex gap-4 px-4 py-5 shadow-[#0A0D1408] rounded-xl">
      {artistFieldsOpen ? (
        <div className="w-full flex flex-col gap-16">
          <div className="flex flex-col gap-5">
            {artists.map((_artist, index) => (
              <div className="flex gap-3 items-center " key={index}>
                <SelectField
                  label="Artist"
                  required={true}
                  placeholder="Choose artist"
                  options={[
                    {
                      value: "One Direction",
                      label: "One Direction",
                    },
                    {
                      value: "Charlie Z",
                      label: "Charlie Z",
                    },
                    {
                      value: "Jack E",
                      label: "Jack E",
                    },
                    {
                      value: "Elegant",
                      label: "Elegant",
                    },
                  ]}
                />

                <TextField
                  label="Start Time"
                  type="time"
                  required={true}
                  placeholder="Choose Time"
                  Icon={Clock}
                />
              </div>
            ))}
          </div>
          <div className="flex gap-3  items-center w-full">
            <Button
              variant="outline"
              className="w-40 bg-transparent"
              onClick={addArtist}
            >
              Add Artist
            </Button>
            <Button className="w-40 bg-pink text-grey-dark">Save</Button>
          </div>
        </div>
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
          <Button
            className="w-40 bg-pink text-grey-dark"
            onClick={setArtistFieldsOpen}
          >
            Add Artist
          </Button>
        </>
      )}
    </div>
  );
};

export default TicketTierAndArtist;
