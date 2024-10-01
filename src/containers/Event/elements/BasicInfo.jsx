import TextField from "@/components/TextField";

const BasicInfo = () => {
  return (
    <div className="space-y-8 w-full">
      <TextField label="Title" required={true} placeholder="Add Title" />
    </div>
  );
};

export default BasicInfo;
