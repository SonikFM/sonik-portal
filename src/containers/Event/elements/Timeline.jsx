import SelectField from "@/components/SelectField";
import TextField from "@/components/TextField";
import { Calendar } from "lucide-react";

const Timeline = () => {
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
      />
      <TextField
        label="Announcement"
        required={true}
        type="datetime-local"
        placeholder="Choose date and time"
        Icon={Calendar}
      />
      <TextField
        label="Event Start"
        required={true}
        type="datetime-local"
        placeholder="Choose date and time"
        Icon={Calendar}
      />
      <TextField
        label="Event End"
        required={true}
        type="datetime-local"
        placeholder="Choose date and time"
        Icon={Calendar}
      />
    </div>
  );
};

export default Timeline;
