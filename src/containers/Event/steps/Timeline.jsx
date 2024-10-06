import SelectField from "@/components/SelectField";
import TextField from "@/components/TextField";
import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";
import { timezones } from "../config/options";

const Timeline = ({ register, errors, getValues, setValue }) => {
  const disableNextStep = () => {
    return (
      !getValues("timezone") ||
      !getValues("announcement") ||
      !getValues("event_start") ||
      !getValues("event_end")
    );
  };

  return (
    <div className="space-y-5 w-full">
      <SelectField
        label="Timezone"
        value={getValues("timezone") || timezones[0].value}
        required={true}
        options={timezones}
        getValues={getValues}
        name="timezone"
        setValue={setValue}
        errorMessage={errors.timezone?.message}
      />
      <TextField
        label="Announcement"
        required={true}
        type="datetime-local"
        placeholder="Choose date and time"
        Icon={Calendar}
        name="announcement"
        {...register("announcement", true)}
        errorMessage={errors.announcement?.message}
      />
      <TextField
        label="Event Start"
        required={true}
        type="datetime-local"
        placeholder="Choose date and time"
        Icon={Calendar}
        name="event_start"
        {...register("event_start", true)}
        errorMessage={errors.event_start?.message}
      />
      <TextField
        label="Event End"
        required={true}
        type="datetime-local"
        placeholder="Choose date and time"
        Icon={Calendar}
        name="event_end"
        {...register("event_end", true)}
        errorMessage={errors.event_end?.message}
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

export default Timeline;
