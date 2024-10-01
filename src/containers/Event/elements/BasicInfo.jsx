import SelectField from "@/components/SelectField";
import TextField from "@/components/TextField";

const BasicInfo = () => {
  return (
    <div className="space-y-8 w-full">
      <TextField label="Title" required={true} placeholder="Add Title" />
      <SelectField
        label="Type"
        required={true}
        options={[
          { value: "concert", label: "Concert" },
          { value: "dj", label: "DJ" },
          { value: "party", label: "Party" },
        ]}
      />
    </div>
  );
};

export default BasicInfo;
