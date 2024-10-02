import SelectField from "@/components/SelectField";
import TextField from "@/components/TextField";
import { Search } from "lucide-react";

const BasicInfo = () => {
  return (
    <div className="space-y-6 w-full">
      <TextField label="Title" required={true} placeholder="Add Title" />
      <SelectField
        label="Type"
        placeholder="Choose the type of event"
        required={true}
        options={[
          { value: "concert", label: "Concert" },
          { value: "dj", label: "DJ" },
          { value: "party", label: "Party" },
        ]}
      />
      <TextField
        label="Description"
        type="textarea"
        placeholder="Add Description"
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
      />
      <SelectField
        label="Venue"
        required={true}
        hasSearch={true}
        placeholder="Find a venue"
        options={[
          { value: "public", label: "Public" },
          { value: "hidden", label: "Hidden" },
          { value: "private", label: "Private" },
        ]}
        Icon={Search}
      />
    </div>
  );
};

export default BasicInfo;
