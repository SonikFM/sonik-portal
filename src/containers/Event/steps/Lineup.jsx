import TextField from "@/components/TextField";
import TicketTierAndArtist from "../elements/TicketTierAndArtist";
import { Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { openInputPicker } from "../config/helpers";
import Loading from "@/components/Loading";

const Lineup = ({
  register,
  errors,
  getValues,
  setValue,
  isLoading,
  ...props
}) => {
  const disableNextStep = () => {
    return !getValues("door_open");
  };

  const changeHandler = e => setValue("door_open", e.target.value);

  if (isLoading) return <Loading />;

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
      <div className="flex justify-center md:justify-end gap-3 md:py-8 mb-4 md:border-t mt-3 md:mt-14 border-grey-light">
        <Button variant="outline" className="w-full md:w-40">
          Cancel
        </Button>
        <Button
          className="w-full md:w-40 bg-[#CDD0D5] md:bg-primary"
          disabled={disableNextStep}
        >
          Continue
        </Button>
      </div>
    </div>
  );
};

export default Lineup;
