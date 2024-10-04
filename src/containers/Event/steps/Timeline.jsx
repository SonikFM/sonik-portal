import SelectField from "@/components/SelectField";
import TextField from "@/components/TextField";
import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";

const Timeline = ({ register, errors }) => {
  return (
    <div className="space-y-5 w-full">
      <SelectField
        label="Timezone"
        value="COT (Colombia Time) - UTC-5"
        required={true}
        options={[
          { value: "concert", label: "Concert" },
          { value: "dj", label: "DJ" },
          { value: "party", label: "Party" },
        ]}
        register={register}
      />
      <TextField
        label="Announcement"
        required={true}
        type="datetime-local"
        placeholder="Choose date and time"
        Icon={Calendar}
        register={register}
      />
      <TextField
        label="Event Start"
        required={true}
        type="datetime-local"
        placeholder="Choose date and time"
        Icon={Calendar}
        register={register}
      />
      <TextField
        label="Event End"
        required={true}
        type="datetime-local"
        placeholder="Choose date and time"
        Icon={Calendar}
        register={register}
      />
      <div className="flex justify-end gap-3 py-8 mb-4 border-t mt-14 border-grey-light">
        <Button variant="outline" className="w-40">
          Cancel
        </Button>
        <Button className="w-40" disabled={true}>
          Continue
        </Button>
      </div>
    </div>
  );
};

export default Timeline;
