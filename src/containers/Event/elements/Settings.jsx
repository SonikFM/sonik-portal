import TextField from "@/components/TextField";
import { Button } from "@/components/ui/button";

const Settings = () => {
  return (
    <div className="space-y-5 w-full">
      <TextField
        label="Internal Notes"
        required={true}
        placeholder="Leave your notes..."
        hasCharacterLimit={true}
        value=""
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

export default Settings;
