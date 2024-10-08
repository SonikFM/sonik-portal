import TextField from "@/components/TextField";
import TicketTierAndArtist from "../elements/TicketTierAndArtist";
import { Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { openInputPicker } from "../config/helpers";

const Lineup = ({ register, errors, getValues, setValue, ...props }) => {
  const disableNextStep = () => {
    return !getValues("door_open");
  };

  const changeHandler = e => setValue("door_open", e.target.value);

  return (
    <div className="space-y-5 w-full">
      <TicketTierAndArtist
        errors={errors}
        getValues={getValues}
        setValue={setValue}
        {...props}
      />
      <TextField
        label="Door Open"
        required={true}
        type="datetime-local"
        placeholder="Choose date and time"
        Icon={Calendar}
        id="door_open"
        name="door_open"
        value={
          getValues("door_open")
            ? new Date(getValues("door_open")).toISOString().slice(0, 16)
            : ""
        }
        onChange={changeHandler}
        errorMessage={errors.door_open?.message}
        onIconClick={() => openInputPicker("door_open")}
      />
      <div className="flex justify-end gap-3 py-8 mb-4 border-t mt-14 border-grey-light">
        <Button variant="outline" className="w-40">
          Cancel
        </Button>
        <Button className="w-40" disabled={disableNextStep()}>
          Continue
        </Button>
      </div>
    </div>
  );
};

export default Lineup;
