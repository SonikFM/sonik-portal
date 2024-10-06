import TextField from "@/components/TextField";
import TicketTierAndArtist from "../elements/TicketTierAndArtist";
import { Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

const Lineup = ({ register, errors, getValues, ...props }) => {
  const disableNextStep = () => {
    return !getValues("door_open");
  };
  return (
    <div className="space-y-5 w-full">
      <TicketTierAndArtist errors={errors} {...props} />
      <TextField
        label="Door Open"
        required={true}
        type="datetime-local"
        placeholder="Choose date and time"
        Icon={Calendar}
        name="door_open"
        {...register("door_open", true)}
        errorMessage={errors.title?.message}
      />
      <div className="flex justify-end gap-3 py-8 mb-4 border-t mt-14 border-grey-light">
        <Button variant="outline" className="w-40">
          Cancel
        </Button>
        <Button className="w-40" disabled={disableNextStep}>
          Continue
        </Button>
      </div>
    </div>
  );
};

export default Lineup;
