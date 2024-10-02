import SelectField from "@/components/SelectField";
import TextField from "@/components/TextField";
import { Button } from "@/components/ui/button";
import { MapPin, Search } from "lucide-react";

const BasicInfo = () => {
  return (
    <div className="space-y-5 w-full">
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
        OptionIcon={MapPin}
        options={[
          {
            value: "Celebrational Central",
            subValue: "street 18, NY",
            label: "Celebrational Central",
          },
          {
            value: "Celebrational Central",
            subValue: "street 18, NY",
            label: "Celebrational Central",
          },
          {
            value: "Celebrational Central",
            subValue: "street 18, NY",
            label: "Celebrational Central",
          },
        ]}
        Icon={Search}
      />

      <TextField label="Presenter" required={true} placeholder="Presenter" />

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

export default BasicInfo;
