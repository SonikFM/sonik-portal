import TextField from "@/components/TextField";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const characterLimit = 100;

const Settings = ({ register }) => {
  const [notes, setNotes] = useState("");

  const changeHandler = event => {
    const { value } = event.target;
    if (value.length <= characterLimit) setNotes(value);
  };
  return (
    <div className="space-y-5 w-full">
      <TextField
        label="Internal Notes"
        required={true}
        placeholder="Leave your notes..."
        characterLimit={characterLimit}
        value={notes}
        onChange={changeHandler}
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

export default Settings;
