import Loading from "@/components/Loading";
import TextField from "@/components/TextField";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

const characterLimit = 100;

const Settings = ({ setValue, getValues, isLoading }) => {
  const [notes, setNotes] = useState(getValues("internal_notes") || "");

  const changeHandler = event => {
    const { value } = event.target;
    if (value.length <= characterLimit) setNotes(value);
  };

  useEffect(() => {
    setValue("internal_notes", notes);
  }, [notes]);

  if (isLoading) return <Loading />;

  return (
    <div className="space-y-5 w-full">
      <TextField
        label="Internal Notes"
        required={true}
        name="internal_notes"
        placeholder="Leave your notes..."
        characterLimit={characterLimit}
        value={notes}
        onChange={changeHandler}
      />
      <div className="flex justify-end gap-3 py-8 mb-4 border-t mt-14 border-grey-light">
        <Button variant="outline" className="w-40">
          Cancel
        </Button>
        <Button className="w-40">Continue</Button>
      </div>
    </div>
  );
};

export default Settings;
